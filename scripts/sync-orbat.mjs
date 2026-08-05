// Regenerates src/data/orbat.json from the unit's live ORBAT sheet.
//
//   npm run sync:orbat
//
// This is deliberately NOT wired into `npm run build`: the site should keep
// building if the sheet is unreachable or someone reshapes its columns. Run it,
// eyeball the diff, then commit.
//
// The sheet lays the troop out in fixed column groups:
//   1-2   HQ role / name
//   3-5   1 Section: sub-unit designator / role / name
//   6-8   2 Section: same
//   17    NCOs holding an appointment on top of their listed position

import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const SHEET_ID = '1MzWcybyryvdMC-87694nkIXZcQ9wywHsicAvkDCFBuw';
const GID = '840599505';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GID}`;

const OUT_FILE = path.resolve('src/data/orbat.json');

const COLUMNS = {
  hqRole: 1,
  hqName: 2,
  nco: 17,
  sections: [
    { designator: 3, label: 4, name: 5, meta: { name: '1 Section', callsign: '1-1', accent: 'blue' } },
    { designator: 6, label: 7, name: 8, meta: { name: '2 Section', callsign: '1-2', accent: 'green' } },
  ],
};

/** Minimal RFC-4180 CSV parser (handles quoted fields and escaped quotes). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') inQuotes = true;
    else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const cell = (row, index) => (row[index] ?? '').trim();

/** "Charlie Fireteam (1-1C)" -> { name: 'Charlie Fireteam', callsign: '1-1C' } */
function splitLabel(label) {
  const match = label.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  return match ? { name: match[1].trim(), callsign: match[2].trim() } : { name: label, callsign: null };
}

function parseSection(rows, cols) {
  const section = {
    designator: null,
    ...cols.meta,
    command: [],
    fireteams: [],
    overflow: [],
  };

  // Where subsequent position rows get filed.
  let target = section.command;

  for (const row of rows) {
    const designator = cell(row, cols.designator);
    const label = cell(row, cols.label);
    const name = cell(row, cols.name);

    if (!label) continue;

    // A sub-unit header is marked by its designator (111, 112, …) in the
    // designator column. Matching on the word "Fireteam" alone would also
    // swallow the "Fireteam Leader (2IC)" position rows.
    if (designator) {
      const { name: ftName, callsign } = splitLabel(label);
      const fireteam = { designator, name: ftName, callsign, positions: [] };
      section.fireteams.push(fireteam);
      target = fireteam.positions;
      continue;
    }

    if (/overflow/i.test(label)) {
      target = section.overflow;
      continue;
    }

    target.push({ role: label, name: name || null });
  }

  return section;
}

async function main() {
  console.log(`Fetching ORBAT sheet…`);
  const res = await fetch(CSV_URL);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status} ${res.statusText}`);

  const rows = parseCsv(await res.text());
  if (rows.length < 3) throw new Error('Sheet returned too few rows — has it been reshaped?');

  const updated = cell(rows[0], 1);

  // Row 0 is the title banner and row 1 the column headings; positions start at 2.
  const bodyRows = rows.slice(2);

  const hqPositions = bodyRows
    .filter((row) => cell(row, COLUMNS.hqRole))
    .map((row) => {
      const { name, callsign } = splitLabel(cell(row, COLUMNS.hqRole));
      return { role: name.replace(/\bCmdr\b/, 'Commander'), callsign, name: cell(row, COLUMNS.hqName) || null };
    });

  const sectionDesignators = ['110', '120'];
  const sections = COLUMNS.sections.map((cols, i) => {
    const parsed = parseSection(bodyRows, cols);
    parsed.designator = sectionDesignators[i];
    return parsed;
  });

  const assignedNcos = bodyRows.map((row) => cell(row, COLUMNS.nco)).filter(Boolean);

  const data = {
    meta: {
      updated,
      formation: 'A Squadron · 1 Troop',
      note: 'Members hold a single position, with the exception of assigned NCOs.',
      source: 'Unit ORBAT sheet',
    },
    assignedNcos,
    troopHq: {
      designator: '100',
      name: 'Troop HQ',
      callsign: '0',
      echelon: 'platoon',
      branch: 'recon',
      positions: hqPositions,
    },
    sections,
  };

  const total =
    hqPositions.length +
    sections.reduce(
      (sum, s) =>
        sum +
        s.command.length +
        s.fireteams.reduce((n, ft) => n + ft.positions.length, 0) +
        s.overflow.length,
      0
    );

  await writeFile(OUT_FILE, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

  console.log(`Updated: ${updated}`);
  console.log(`Sections: ${sections.length}, positions: ${total}, assigned NCOs: ${assignedNcos.length}`);
  console.log(`Wrote ${path.relative(process.cwd(), OUT_FILE)}`);
  console.log('\nReview the diff before committing.');
}

main().catch((err) => {
  console.error(`\nORBAT sync failed: ${err.message}`);
  process.exit(1);
});

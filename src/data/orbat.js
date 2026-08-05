// Order of Battle — A Squadron, 1 Troop.
//
// The data itself lives in orbat.json, regenerated from the unit's ORBAT sheet
// with `npm run sync:orbat`. Edit the sheet, not the JSON. A null `name` means
// the position is unfilled; the UI renders those as VACANT.

import orbat from './orbat.json';

export const orbatMeta = orbat.meta;
export const assignedNcos = orbat.assignedNcos;
export const troopHq = orbat.troopHq;
export const sections = orbat.sections;

/** Every position in a section, across command, fireteams and overflow. */
const sectionPositions = (section) => [
  ...section.command,
  ...section.fireteams.flatMap((ft) => ft.positions),
  ...section.overflow,
];

const tally = (positions) => {
  const filled = positions.filter((p) => p.name).length;
  return { filled, total: positions.length, vacant: positions.length - filled };
};

/** Manning strength across the whole troop. */
export const getStrength = () =>
  tally([...troopHq.positions, ...sections.flatMap(sectionPositions)]);

/** Manning strength for a single section, including its fireteams. */
export const getSectionStrength = (section) => tally(sectionPositions(section));

/** Vacant positions with the sub-unit they belong to, for recruitment display. */
export const getVacancies = () => {
  const vacancies = [];

  for (const position of troopHq.positions) {
    if (!position.name) vacancies.push({ ...position, unit: troopHq.name });
  }

  for (const section of sections) {
    for (const position of section.command) {
      if (!position.name) vacancies.push({ ...position, unit: section.name });
    }
    for (const ft of section.fireteams) {
      for (const position of ft.positions) {
        if (!position.name) {
          vacancies.push({ ...position, unit: `${section.name} · ${ft.name}` });
        }
      }
    }
    for (const position of section.overflow) {
      if (!position.name) vacancies.push({ ...position, unit: `${section.name} Overflow` });
    }
  }

  return vacancies;
};

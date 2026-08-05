import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import NatoSymbol from '../components/NatoSymbol';
import {
  orbatMeta,
  assignedNcos,
  troopHq,
  sections,
  getStrength,
  getSectionStrength,
} from '../data/orbat';

const ACCENTS = {
  blue: { text: 'text-sky-300', border: 'border-sky-400/60', bar: 'bg-sky-400' },
  green: { text: 'text-emerald-300', border: 'border-emerald-400/60', bar: 'bg-emerald-400' },
};

const isNco = (name) => assignedNcos.includes(name);

/** A single ORBAT slot: role on the left, incumbent (or VACANT) on the right. */
const Position = ({ role, callsign, name }) => (
  <li className="flex items-baseline justify-between gap-3 border-b border-white/5 py-2 last:border-0">
    <span className="flex items-baseline gap-2 text-sm text-slate-400">
      {role}
      {callsign && (
        <span className="font-mono text-[10px] tracking-widest text-qoy-yellow/60">{callsign}</span>
      )}
    </span>
    {name ? (
      <span className="flex items-center gap-2 text-right text-sm font-semibold text-white">
        {name}
        {isNco(name) && (
          <span
            className="rounded-sm border border-qoy-yellow/40 px-1 font-mono text-[9px] tracking-widest text-qoy-yellow/80"
            title="Holds an NCO appointment in addition to this position"
          >
            NCO
          </span>
        )}
      </span>
    ) : (
      <span className="font-mono text-xs uppercase tracking-widest text-status-vacant/70">
        Vacant
      </span>
    )}
  </li>
);

/** Small manning readout, e.g. 14/17. */
const Strength = ({ filled, total }) => {
  const pct = Math.round((filled / total) * 100);
  const tone =
    pct === 100 ? 'text-status-ok' : pct >= 70 ? 'text-status-warn' : 'text-status-vacant';

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
      <span className={tone}>
        {filled}/{total}
      </span>
      <span className="h-1 w-16 overflow-hidden rounded-full bg-white/10">
        <span
          className={`block h-full ${
            pct === 100 ? 'bg-status-ok' : pct >= 70 ? 'bg-status-warn' : 'bg-status-vacant'
          }`}
          style={{ width: `${pct}%` }}
        />
      </span>
    </div>
  );
};

const FireteamCard = ({ fireteam }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="tac-bracket border border-white/10 bg-tac-850 p-5 transition-colors hover:border-qoy-yellow/40"
  >
    <div className="mb-4 flex items-start justify-between gap-3 border-b border-white/10 pb-3">
      <div>
        <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
          {fireteam.name}
        </h4>
        <p className="font-mono text-[11px] tracking-widest text-qoy-yellow/70">
          {fireteam.designator} · {fireteam.callsign}
        </p>
      </div>
      <NatoSymbol branch="infantry" echelon="team" color="#ffd700" className="h-9 w-12 shrink-0 opacity-70" />
    </div>
    <ul>
      {fireteam.positions.map((p, i) => (
        <Position key={i} {...p} />
      ))}
    </ul>
  </motion.div>
);

const SectionColumn = ({ section }) => {
  const accent = ACCENTS[section.accent] ?? ACCENTS.blue;
  const strength = getSectionStrength(section);

  return (
    <div className="space-y-6">
      {/* Section header */}
      <div className={`flex items-center justify-between gap-4 border-b-2 ${accent.border} pb-3`}>
        <div className="flex items-center gap-3">
          <NatoSymbol
            branch="infantry"
            echelon="section"
            color="currentColor"
            className={`h-10 w-14 ${accent.text}`}
          />
          <div>
            <h2 className={`font-display text-2xl font-bold uppercase tracking-wide ${accent.text}`}>
              {section.name}
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-slate-500">
              {section.designator} · {section.callsign}
            </p>
          </div>
        </div>
        <Strength {...strength} />
      </div>

      {/* Section command */}
      <div className="tac-bracket border border-white/10 bg-tac-800 p-5">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70">
          Section Command
        </p>
        <ul>
          {section.command.map((p, i) => (
            <Position key={i} {...p} />
          ))}
        </ul>
      </div>

      {/* Fireteams */}
      <div className="grid gap-6 sm:grid-cols-2">
        {section.fireteams.map((ft) => (
          <FireteamCard key={ft.designator} fireteam={ft} />
        ))}
      </div>

      {/* Overflow */}
      <div className="border border-dashed border-white/15 bg-tac-900/60 p-5">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
          {section.name} Overflow
        </p>
        <ul>
          {section.overflow.map((p, i) => (
            <Position key={i} {...p} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Structure = () => {
  const strength = getStrength();

  return (
    <div className="min-h-screen bg-tac-950 pb-24 text-white">
      <PageHeader
        eyebrow="Order of Battle"
        title="Unit ORBAT"
        subtitle={`Organisational breakdown of ${orbatMeta.formation}, Queen's Own Yeomanry.`}
        meta={`Updated ${orbatMeta.updated}`}
      />

      <div className="container mx-auto px-4">
        {/* Summary bar */}
        <div className="tac-bracket -mt-8 mb-16 flex flex-col gap-4 border border-qoy-yellow/25 bg-tac-900 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70">
              Manning Strength
            </p>
            <p className="mt-1 font-display text-3xl font-bold uppercase tracking-wide text-white">
              {strength.filled}
              <span className="text-slate-500">/{strength.total}</span>{' '}
              <span className="text-base text-slate-400">positions filled</span>
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 bg-status-ok" aria-hidden="true" />
              Filled {strength.filled}
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 bg-status-vacant" aria-hidden="true" />
              Vacant {strength.vacant}
            </span>
          </div>
        </div>

        {/* Troop HQ */}
        <div className="mb-16 flex justify-center">
          <div className="tac-bracket w-full max-w-md border-2 border-qoy-yellow/50 bg-gradient-to-b from-cavalry-blue/50 to-tac-900 p-6 text-center">
            <NatoSymbol
              branch="recon"
              echelon="platoon"
              color="#ffd700"
              className="mx-auto h-12 w-16"
            />
            <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-qoy-yellow">
              {troopHq.name}
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-slate-400">
              {troopHq.designator} · Callsign {troopHq.callsign}
            </p>
            <ul className="mt-5 text-left">
              {troopHq.positions.map((p, i) => (
                <Position key={i} {...p} />
              ))}
            </ul>
          </div>
        </div>

        {/* Sections */}
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {sections.map((section) => (
            <SectionColumn key={section.designator} section={section} />
          ))}
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-16 max-w-3xl border-l-2 border-qoy-yellow/40 pl-4 text-sm italic text-slate-500">
          {orbatMeta.note} ORBAT current as of {orbatMeta.updated}.
        </p>
      </div>
    </div>
  );
};

export default Structure;

import { motion } from 'framer-motion';
import { BookOpen, Crosshair, Shield, User, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';

// British Army style rank chevrons.
const Chevron = ({ count, color = 'currentColor' }) => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <path
        key={i}
        d={`M5 ${10 + i * 8} L20 ${22 + i * 8} L35 ${10 + i * 8}`}
        stroke={color}
        strokeWidth="6"
        strokeLinecap="square"
      />
    ))}
  </svg>
);

const RANKS = [
  { rank: 'Recruit', req: 'Join Discord & @RTT', bg: 'bg-tac-700', icon: <User size={26} /> },
  { rank: 'Junior Trooper', req: 'Phase 1 + 1 Op', bg: 'bg-emerald-900', icon: <Award size={26} /> },
  { rank: 'Trooper', req: 'Phase 1 Test (1+ Mo)', bg: 'bg-cavalry-blue', icon: <Shield size={26} /> },
  { rank: 'Lance Corporal', req: 'Phase 2 + Merit', bg: 'bg-cavalry-light', icon: <Chevron count={1} color="white" /> },
  { rank: 'Corporal', req: 'JLC + Merit', bg: 'bg-indigo-900', icon: <Chevron count={2} color="white" /> },
  { rank: 'Sergeant', req: 'SLC + Merit', bg: 'bg-qoy-yellow', icon: <Chevron count={3} color="#002366" />, dark: true },
];

const PHASES = [
  {
    title: 'Phase 1',
    body: 'Initial induction and basic drills. Learn how the unit operates, our SOPs, and the buddy-buddy system.',
  },
  {
    title: 'Phase 2',
    body: 'Advanced tactical training. Covers FIBUA, heli drills, patrols, and specific combat drills for modern warfare.',
  },
  {
    title: 'Leadership',
    body: 'JLC and SLC courses for those showing merit and commitment, preparing you for NCO and command roles.',
  },
];

const COURSES = [
  'Heli Drills',
  'FIBUA (Urban)',
  'Boat Drills',
  'Parachute',
  'Overt Patrol',
  'Covert Patrol',
  'Guerrilla Warfare',
  'Navigation',
  'Combat Marksmanship',
  'Driving',
  'Signals',
];

const SPECIALISATIONS = [
  { name: 'Medic', color: 'text-red-300 border-red-900/60 bg-red-950/40' },
  { name: 'Heavy AT', color: 'text-orange-300 border-orange-900/60 bg-orange-950/40' },
  { name: 'Pointman', color: 'text-green-300 border-green-900/60 bg-green-950/40' },
  { name: 'GPMG Gunner', color: 'text-slate-300 border-slate-600/60 bg-slate-800/40' },
  { name: 'Sharpshooter', color: 'text-blue-300 border-blue-900/60 bg-blue-950/40' },
  { name: 'Sniper', color: 'text-emerald-300 border-emerald-900/60 bg-emerald-950/40' },
  { name: 'Mortar', color: 'text-amber-300 border-amber-900/60 bg-amber-950/40' },
  { name: 'Assault Pioneer', color: 'text-purple-300 border-purple-900/60 bg-purple-950/40' },
  { name: 'FAC / MFC', color: 'text-cyan-300 border-cyan-900/60 bg-cyan-950/40' },
  { name: 'Air Defence', color: 'text-indigo-300 border-indigo-900/60 bg-indigo-950/40' },
];

const Training = () => (
  <div className="min-h-screen bg-tac-950 pb-24 text-white">
    <PageHeader
      eyebrow="Career Path"
      title="Unit Progression"
      subtitle="Rank progression and specialist training within the troop."
      meta="Training Wing"
    />

    <div className="container mx-auto px-4 py-20">
      {/* Rank ladder */}
      <section className="mb-28">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Career Progression
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-qoy-yellow/40" aria-hidden="true" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div
            className="absolute left-0 top-12 hidden h-px w-full bg-white/10 lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {RANKS.map((r, i) => (
              <motion.li
                key={r.rank}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center text-center"
              >
                <span
                  className={`${r.bg} ${r.dark ? 'text-cavalry-blue' : 'text-white'} relative z-10 flex h-20 w-20 items-center justify-center border border-white/15 shadow-xl transition-all group-hover:border-qoy-yellow`}
                >
                  {r.icon}
                </span>
                <span className="mt-2 font-mono text-[10px] tracking-widest text-qoy-yellow/50">
                  OR-{i + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold uppercase tracking-wide text-white">
                  {r.rank}
                </h3>
                <p className="mt-1 px-1 text-xs leading-snug text-slate-500">{r.req}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Phases */}
      <section className="tac-grid mb-28 border border-white/10 bg-tac-900 p-10 md:p-14">
        <div className="grid gap-10 md:grid-cols-3">
          {PHASES.map((p) => (
            <div key={p.title}>
              <h3 className="mb-4 border-b border-qoy-yellow/30 pb-2 font-display text-xl font-semibold uppercase tracking-wide text-qoy-yellow">
                {p.title}
              </h3>
              <p className="leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses + specialisations */}
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="tac-bracket border border-white/10 border-l-4 border-l-qoy-yellow bg-tac-850 p-8 md:p-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <BookOpen className="text-qoy-yellow" size={34} />
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Phase 2 Modules
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {COURSES.map((name) => (
              <div
                key={name}
                className="border border-white/10 p-3 text-center font-display text-xs uppercase tracking-widest text-slate-400 transition-all hover:border-white/30 hover:text-white"
              >
                {name}
              </div>
            ))}
            <div className="col-span-2 border border-qoy-yellow p-3 text-center font-display text-xs uppercase tracking-widest text-qoy-yellow shadow-[0_0_20px_rgba(255,215,0,0.12)]">
              All-Arms Commando
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="tac-bracket border border-white/10 border-l-4 border-l-white/25 bg-tac-850 p-8 md:p-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <Crosshair className="text-white" size={34} />
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Specialisations
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {SPECIALISATIONS.map((s) => (
              <div
                key={s.name}
                className={`border p-3 text-center font-display text-xs uppercase tracking-widest transition-transform hover:scale-[1.03] ${s.color}`}
              >
                {s.name}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  </div>
);

export default Training;

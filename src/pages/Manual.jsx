import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const RIFLE_SECTION = {
  image: 'qoy-rifle-section.png',
  imageAlt: 'Rifle section composition infographic',
  heading: 'Rifle Section Composition',
  note: 'The rifle section is the core combat element of our unit, split into Charlie and Delta fireteams for tactical flexibility.',
  groups: [
    {
      name: 'Charlie Fireteam',
      loadouts: [
        { role: 'Section Commander', weapon: 'L85A2 UGL', secondary: 'NLAW', equipment: 'LR Radio' },
        { role: 'Sharpshooter', weapon: 'L129A1', secondary: 'ILAW' },
        { role: 'Minimi Gunner', weapon: 'L110A1' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'ILAW' },
      ],
    },
    {
      name: 'Delta Fireteam',
      loadouts: [
        { role: 'Fire Team Leader', weapon: 'L85A2', secondary: 'NLAW' },
        { role: 'Rifleman', weapon: 'L85A2', secondary: 'NLAW' },
        { role: 'LSW Gunner', weapon: 'L86A2 LSW', secondary: 'ILAW' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'ILAW' },
      ],
    },
  ],
};

const FIRE_SUPPORT = {
  image: 'qoy-fire-support-group.png',
  imageAlt: 'Fire support group composition infographic',
  heading: 'Fire Support Group',
  groups: [
    {
      name: 'Gun Team',
      loadouts: [
        { role: 'Section Commander', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW', equipment: 'LR Radio' },
        { role: 'GPMG Gunner', weapon: 'L7A2 GPMG', equipment: 'Static Tripod' },
        { role: 'GPMG Gunner', weapon: 'L7A2 GPMG', equipment: 'Static Tripod' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'Javelin Tube / ILAW' },
      ],
    },
    {
      name: 'Anti-Tank Team',
      loadouts: [
        { role: 'Fire Team Leader', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW' },
        { role: 'Javelin Gunner', weapon: 'L85A2', secondary: 'Javelin Launcher + CLU' },
        { role: 'MAAWs Gunner', weapon: 'L85A2', secondary: 'MAAWS Mk4' },
        { role: 'Rifleman', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW' },
      ],
    },
  ],
};

const LoadoutCard = ({ role, weapon, secondary, equipment }) => (
  <motion.article
    whileHover={{ x: 6 }}
    className="tac-bracket border border-white/10 border-l-2 border-l-qoy-yellow bg-tac-850 p-5 transition-colors hover:border-qoy-yellow/40"
  >
    <h4 className="mb-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
      {role}
    </h4>
    <dl className="grid gap-4 sm:grid-cols-2">
      <div>
        <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-qoy-yellow/70">
          Primary
        </dt>
        <dd className="text-sm font-semibold text-white">{weapon}</dd>
      </div>
      {secondary && (
        <div>
          <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-red-400/80">
            Launcher / Secondary
          </dt>
          <dd className="text-sm font-semibold text-white">{secondary}</dd>
        </div>
      )}
      {equipment && (
        <div className="border-t border-white/5 pt-3 sm:col-span-2">
          <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-sky-400/80">
            Special Equipment
          </dt>
          <dd className="text-sm font-semibold text-white">{equipment}</dd>
        </div>
      )}
    </dl>
  </motion.article>
);

const ManualSection = ({ data, reverse }) => (
  <section className="mb-28">
    <div className={`flex flex-col gap-12 lg:items-start ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:sticky lg:top-28 lg:w-1/2"
      >
        <h2
          className={`mb-6 font-display text-3xl font-bold uppercase tracking-wide text-qoy-yellow md:text-4xl ${reverse ? 'lg:text-right' : ''}`}
        >
          {data.heading}
        </h2>
        <div className="tac-bracket border border-qoy-yellow/20 bg-white p-3 shadow-2xl">
          <img
            src={`${import.meta.env.BASE_URL}${data.image}`}
            alt={data.imageAlt}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
        {data.note && (
          <div className="mt-5 flex items-start gap-4 border border-white/10 bg-tac-850 p-5">
            <Info className="shrink-0 text-qoy-yellow" size={20} />
            <p className="text-sm italic leading-relaxed text-slate-400">{data.note}</p>
          </div>
        )}
      </motion.div>

      <div className="w-full space-y-10 lg:w-1/2">
        {data.groups.map((group) => (
          <div key={group.name}>
            <h3 className="mb-5 border-b border-qoy-yellow/30 pb-2 font-display text-xl font-semibold uppercase tracking-[0.2em] text-white">
              {group.name}
            </h3>
            <div className="space-y-4">
              {group.loadouts.map((l, i) => (
                <LoadoutCard key={i} {...l} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Manual = () => (
  <div className="min-h-screen bg-tac-950 pb-24 text-white">
    <PageHeader
      eyebrow="Standard Operating Procedures"
      title="Field Manual"
      subtitle="Section composition and equipment loadouts."
      meta="Restricted · Training Use"
    />

    <div className="container mx-auto px-4 py-20">
      <ManualSection data={RIFLE_SECTION} />
      <ManualSection data={FIRE_SUPPORT} reverse />
    </div>
  </div>
);

export default Manual;

import { motion } from 'framer-motion';
import { ArrowRight, Check, Compass, Users, ShieldCheck, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import OpCountdown from '../components/OpCountdown';
import { getVacancies } from '../data/orbat';
import {
  joiningSteps,
  support,
  principles,
  conduct,
  expectations,
  missions,
} from '../data/startGuide';

const DISCORD = 'https://discord.gg/4fjPfJFVgt';

const SectionTitle = ({ eyebrow, title, icon }) => (
  <div className="mb-8">
    <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.4em] text-qoy-yellow/70">
      {icon}
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
      {title}
    </h2>
  </div>
);

const StartGuide = () => {
  const vacancies = getVacancies();

  return (
    <div className="min-h-screen bg-tac-950 pb-24 text-white">
      <PageHeader
        eyebrow="New Recruits"
        title="Start Guide"
        subtitle="Everything you need to know before your first operation with the Queen's Own Yeomanry."
        meta="Recruit Briefing"
      />

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Countdown + call to action */}
        <div className="mb-20 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <OpCountdown />
          <a
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="tac-bracket flex flex-col items-center justify-center border border-qoy-yellow bg-qoy-yellow/10 p-6 text-center transition-colors hover:bg-qoy-yellow/20"
          >
            <span className="font-display text-xl uppercase tracking-wide text-qoy-yellow">
              Join the Discord
            </span>
            <span className="mt-2 text-sm text-slate-400">
              {vacancies.length} positions currently open
            </span>
            <ArrowRight className="mt-3 text-qoy-yellow" size={20} />
          </a>
        </div>

        {/* Joining path */}
        <section className="mb-24">
          <SectionTitle
            eyebrow="Your First Weeks"
            title="From Recruit to Trooper"
            icon={<Compass size={13} />}
          />

          <ol className="relative space-y-4 border-l-2 border-qoy-yellow/25 pl-6">
            {joiningSteps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="tac-bracket relative border border-white/10 bg-tac-850 p-6"
              >
                <span
                  className="absolute -left-[calc(1.5rem+9px)] top-8 h-3 w-3 rounded-full border-2 border-tac-950 bg-qoy-yellow"
                  aria-hidden="true"
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-qoy-yellow/50">{s.step}</span>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-slate-400">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Support */}
        <section className="mb-24">
          <SectionTitle
            eyebrow="You Are Not On Your Own"
            title="How We Support You"
            icon={<Users size={13} />}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {support.map((s) => (
              <div
                key={s.title}
                className="tac-bracket border border-white/10 border-t-2 border-t-qoy-yellow bg-tac-850 p-6"
              >
                <h3 className="mb-3 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles + conduct */}
        <section className="mb-24 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="How We Fight"
              title="Basic Principles"
              icon={<ShieldCheck size={13} />}
            />
            <ul className="space-y-3">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-b border-white/5 pb-3 text-slate-300 last:border-0"
                >
                  <Check className="mt-1 shrink-0 text-qoy-yellow" size={15} />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="What We Expect" title="Conduct" icon={<Users size={13} />} />
            <ul className="space-y-3">
              {conduct.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-b border-white/5 pb-3 text-slate-300 last:border-0"
                >
                  <span className="mt-1 font-mono text-xs text-qoy-yellow/60">»</span>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Expectations */}
        <section className="mb-24">
          <SectionTitle
            eyebrow="The Deal"
            title="Trust, Freedom & Responsibility"
            icon={<ShieldCheck size={13} />}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {expectations.map((e) => (
              <div key={e.title} className="border-l-2 border-qoy-yellow/40 bg-tac-900 p-6">
                <h3 className="mb-3 font-display text-lg font-semibold uppercase tracking-wide text-qoy-yellow">
                  {e.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Missions */}
        <section className="tac-grid border border-white/10 bg-tac-900 p-10 md:p-14">
          <SectionTitle
            eyebrow="Where We Fight"
            title="Our Missions"
            icon={<Globe size={13} />}
          />
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">{missions.intro}</p>
          <ul className="grid gap-4 md:grid-cols-2">
            {missions.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 border border-white/10 bg-tac-850 p-5 text-slate-300"
              >
                <Check className="mt-0.5 shrink-0 text-qoy-yellow" size={16} />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StartGuide;

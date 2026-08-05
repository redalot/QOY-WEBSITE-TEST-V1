import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Swords, Shield, Target, Radio } from 'lucide-react';
import { getStrength, getVacancies } from '../data/orbat';
import OpCountdown from '../components/OpCountdown';
import PageMeta from '../components/PageMeta';

// Hoisted so the slider effect isn't rebuilding this array on every render.
const HERO_SLIDES = [1, 2, 3, 4, 5, 6].map((n) => `${import.meta.env.BASE_URL}gallery-${n}.jpg`);

const GALLERY_PREVIEW = [
  { n: 1, alt: 'Section advancing during a live operation' },
  { n: 2, alt: 'Reconnaissance patrol observing a treeline' },
  { n: 3, alt: 'Urban clearance during FIBUA training' },
  { n: 4, alt: 'Night insertion under NVGs' },
];

const Home = () => {
  const [slide, setSlide] = useState(0);
  const strength = getStrength();
  const vacancies = getVacancies();

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-tac-950 text-white">
      <PageMeta description="Queen's Own Yeomanry — a light cavalry reconnaissance Arma 3 milsim unit. Operations Tuesday and Sunday, 20:00 UK. No interviews, no applications." />

      {/* ---------------- Hero ---------------- */}
      <section className="relative flex h-[88vh] min-h-[560px] items-center justify-center overflow-hidden border-b-2 border-qoy-yellow bg-cavalry-blue">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={HERO_SLIDES[slide]}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 0.28, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-tac-950/55" />
          <div className="tac-grid-fine absolute inset-0 opacity-70" />
          <div className="tac-vignette absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}qoy-badge.jpg`}
              alt="Queen's Own Yeomanry cap badge"
              className="animate-pulse-slow mx-auto mb-8 h-28 w-28 rounded-full border-4 border-qoy-yellow shadow-[0_0_60px_rgba(255,215,0,0.25)] md:h-44 md:w-44"
            />

            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.5em] text-qoy-yellow/70 md:text-xs">
              A Squadron · 1 Troop
            </p>

            <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-wide text-qoy-yellow drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-8xl">
              Queen's Own Yeomanry
            </h1>

            <p className="mt-5 font-display text-lg uppercase tracking-[0.35em] text-blue-100/80 md:text-2xl">
              Cavalry · Reconnaissance · Strike
            </p>

            {/* Status line */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-white/10 py-4 font-mono text-[11px] uppercase tracking-widest text-slate-300 md:text-xs">
              <span>
                <span className="text-slate-500">Est.</span> 2022
              </span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span>
                <span className="text-slate-500">Strength</span> {strength.filled}/{strength.total}
              </span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span>
                <span className="text-slate-500">Ops</span> Tue &amp; Sun 20:00 UK
              </span>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://discord.gg/4fjPfJFVgt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-qoy-yellow px-10 py-4 font-display text-base uppercase tracking-widest text-tac-950 shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all hover:bg-white"
              >
                Join the Fight <ArrowRight size={18} />
              </a>
              <Link
                to="/start-guide"
                className="border-2 border-white/40 px-10 py-4 font-display text-base uppercase tracking-widest text-white transition-all hover:border-qoy-yellow hover:text-qoy-yellow"
              >
                Read the Start Guide
              </Link>
            </div>

            {vacancies.length > 0 && (
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
                <span className="text-status-warn">{vacancies.length} positions open</span> across
                the troop
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Next op ---------------- */}
      <section className="border-b border-white/5 bg-tac-950 py-10">
        <div className="container mx-auto px-4">
          <OpCountdown />
        </div>
      </section>

      {/* ---------------- Role ---------------- */}
      <section className="tac-grid border-b border-white/5 bg-tac-900 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Capability" title="Role &amp; Mission" />
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Swords size={36} />}
              title="Light Cavalry"
              description="Fast-moving, hard-hitting reconnaissance and direct action using light vehicles and dismounted infantry tactics."
            />
            <FeatureCard
              icon={<Target size={36} />}
              title="Reconnaissance"
              description="Operating ahead of the main force to locate threats, acquire targets, and disrupt enemy logistics."
            />
            <FeatureCard
              icon={<Shield size={36} />}
              title="Immersion & Realism"
              description="Serious milsim procedure balanced with a relaxed community atmosphere. No 'Yes Sir' required."
            />
          </div>
        </div>
      </section>

      {/* ---------------- Gallery preview ---------------- */}
      <section className="border-b border-white/5 bg-tac-850 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.4em] text-qoy-yellow/70">
                Field Imagery
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
                Operations in Action
              </h2>
            </div>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border-b-2 border-qoy-yellow pb-1 font-display text-sm uppercase tracking-widest text-qoy-yellow transition-colors hover:text-white"
            >
              View All Screenshots <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {GALLERY_PREVIEW.map(({ n, alt }) => (
              <motion.div
                key={n}
                whileHover={{ y: -6 }}
                className="tac-bracket group relative overflow-hidden border border-white/10"
              >
                <img
                  src={`${import.meta.env.BASE_URL}gallery-${n}.jpg`}
                  alt={alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cavalry-blue/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Joining ---------------- */}
      <section className="tac-grid bg-tac-900 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Recruitment"
            title="How to Join"
            subtitle="We keep things simple. No interviews, no complex applications — just show up and play."
          />

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <JoinStep number="01" title="Join Discord" desc="Click the join button to enter our communications hub." icon={<Radio size={26} />} />
            <JoinStep number="02" title="Ping @RTT" desc="Let the Recruit Training Team know you've arrived." icon={<Target size={26} />} />
            <JoinStep number="03" title="Read & Ask" desc="Review the start guide and ask any questions you have." icon={<ArrowRight size={26} />} />
            <JoinStep number="04" title="Start Playing" desc="Attend an op. Growth is based on merit and respect." icon={<Swords size={26} />} />
          </div>

          <blockquote className="mx-auto mt-14 max-w-3xl border-l-2 border-qoy-yellow bg-tac-850 p-8 text-center">
            <p className="font-display text-lg uppercase tracking-wide text-white md:text-xl">
              "No interviews or conditions — just respect the rules and your fellow members."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden border-t-2 border-qoy-yellow bg-cavalry-blue py-28 text-center">
        <div className="tac-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-qoy-yellow md:text-6xl">
            Would you like to know more?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/80">
            Join our Discord, speak to the recruitment team, and start your journey from Recruit to
            Trooper today.
          </p>
          <a
            href="https://discord.gg/4fjPfJFVgt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-qoy-yellow px-12 py-5 font-display text-lg uppercase tracking-[0.2em] text-tac-950 shadow-2xl transition-all hover:bg-white"
          >
            Join Our Discord
          </a>
        </div>
      </section>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mb-14 text-center">
    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.4em] text-qoy-yellow/70">
      {eyebrow}
    </p>
    <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
      {title}
    </h2>
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">{subtitle}</p>}
    <div className="mx-auto mt-6 h-px w-20 bg-qoy-yellow/40" aria-hidden="true" />
  </div>
);

const JoinStep = ({ number, title, desc, icon }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="tac-bracket border border-white/10 bg-tac-850 p-7 transition-colors hover:border-qoy-yellow/50"
  >
    <div className="mb-5 flex items-center justify-between">
      <span className="font-mono text-2xl font-bold text-qoy-yellow/40">{number}</span>
      <span className="flex h-11 w-11 items-center justify-center border border-qoy-yellow/30 bg-cavalry-blue text-qoy-yellow">
        {icon}
      </span>
    </div>
    <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-wide text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="tac-bracket border border-white/10 border-t-2 border-t-qoy-yellow bg-tac-850 p-9 transition-colors hover:border-qoy-yellow/40"
  >
    <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center border border-qoy-yellow/30 bg-cavalry-blue text-qoy-yellow">
      {icon}
    </div>
    <h3 className="mb-4 text-center font-display text-2xl font-semibold uppercase tracking-wide text-white">
      {title}
    </h3>
    <p className="text-center leading-relaxed text-slate-400">{description}</p>
  </motion.div>
);

export default Home;

import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldCheck, Smile } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ETHOS = [
  'Serious and immersive during operations, relaxed otherwise.',
  'Rank structure for order, but no "Yes Sir" required.',
  'Real life always comes first. No formal attendance policy.',
  'First person only, realistic kit, and balanced difficulty.',
];

const About = () => (
  <div className="min-h-screen bg-tac-950 pb-24 text-white">
    <PageHeader
      eyebrow="Regimental Background"
      title="Unit History & Ethos"
      subtitle="Operating since 2022 with members from across the world — a premier reserve light cavalry regiment."
      meta="Est. 2022"
    />

    <div className="container mx-auto space-y-24 px-4 py-20">
      {/* Who we are */}
      <section className="grid items-start gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.4em] text-qoy-yellow/70">
            Mission
          </p>
          <h2 className="mb-8 border-l-4 border-qoy-yellow pl-5 font-display text-3xl font-bold uppercase tracking-wide text-qoy-yellow md:text-4xl">
            Who We Are
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              Our role is twofold — overt and covert operations. The majority of our operations are
              combat based, playing as either light or mounted infantry performing front-line combat
              duties.
            </p>
            <p>
              Our second specialist role is to advance ahead of the main force, behind enemy lines to
              locate enemy positions and movement, to advise on enemy threats and to acquire targets
              of opportunity.
            </p>
            <p>
              Beyond reconnaissance, we conduct a wide variety of other covert operations; disrupting
              enemy activity through ambushes, raids and other sabotage operations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="tac-bracket border border-white/10 border-l-4 border-l-qoy-yellow bg-tac-850 p-8 md:p-10"
        >
          <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide text-white">
            <ShieldCheck className="text-qoy-yellow" size={28} /> Our Ethos
          </h3>
          <ul className="space-y-5">
            {ETHOS.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                <span className="mt-0.5 font-mono text-xs text-qoy-yellow/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Schedule */}
      <section className="tac-grid border border-white/10 bg-tac-900 p-10 md:p-16">
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.4em] text-qoy-yellow/70">
            Battle Rhythm
          </p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Operation Schedule
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="tac-bracket flex flex-col items-center border border-qoy-yellow/30 bg-cavalry-blue p-10 text-center">
            <Calendar size={48} className="mb-5 text-qoy-yellow" />
            <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-wide text-white">
              Main Operations
            </h3>
            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-blue-200">
              Tuesday &amp; Sunday
            </p>
            <div className="flex items-center gap-3 border border-qoy-yellow/20 bg-tac-950/50 px-6 py-3 font-display text-xl tracking-wide text-qoy-yellow">
              <Clock size={22} /> 20:00 – 22:30 UK
            </div>
          </div>

          <div className="flex flex-col items-center border border-dashed border-white/15 bg-tac-850/60 p-10 text-center">
            <Smile size={48} className="mb-5 text-slate-500" />
            <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-wide text-slate-300">
              Mini-Ops &amp; Fun
            </h3>
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-slate-500">
              Thursday or Friday
            </p>
            <p className="max-w-xs leading-relaxed text-slate-500">
              Optional training, Antistasi, or community-led missions on off-nights.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;

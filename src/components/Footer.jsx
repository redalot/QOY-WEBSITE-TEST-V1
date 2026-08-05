import { Link } from 'react-router-dom';
import { badgeSrc } from '../data/media';

const Footer = () => (
  <footer className="border-t-2 border-qoy-yellow bg-tac-950">
    <div className="tac-stripes h-1.5 w-full opacity-60" aria-hidden="true" />

    <div className="container mx-auto grid gap-12 px-4 py-14 md:grid-cols-3">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <img
            src={badgeSrc}
            alt=""
            className="h-14 w-14 rounded-full border border-qoy-yellow/40 opacity-80"
          />
          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-qoy-yellow">
              Queen's Own Yeomanry
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Arma 3 Milsim Unit
            </p>
          </div>
        </div>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
          A light cavalry reconnaissance unit. Serious on operations, relaxed off them.
        </p>
      </div>

      <div className="text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70">
          Operational Info
        </p>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>Tuesday · 20:00 UK</li>
          <li>Sunday · 20:00 UK</li>
          <li className="text-slate-500">Role: Reconnaissance</li>
        </ul>
        <nav className="mt-6 flex justify-center gap-5 font-display text-xs uppercase tracking-widest">
          <Link to="/structure" className="text-slate-400 transition-colors hover:text-qoy-yellow">
            ORBAT
          </Link>
          <Link to="/training" className="text-slate-400 transition-colors hover:text-qoy-yellow">
            Training
          </Link>
          <Link to="/manual" className="text-slate-400 transition-colors hover:text-qoy-yellow">
            Manual
          </Link>
        </nav>
      </div>

      <div className="text-center md:text-right">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70">
          Connect
        </p>
        <div className="flex justify-center gap-4 md:justify-end">
          <a
            href="https://discord.gg/4fjPfJFVgt"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-qoy-yellow/40 px-5 py-2 font-display text-sm uppercase tracking-widest text-qoy-yellow transition-colors hover:bg-qoy-yellow hover:text-tac-950"
          >
            Discord
          </a>
          <a
            href="#"
            className="border border-white/15 px-5 py-2 font-display text-sm uppercase tracking-widest text-slate-400 transition-colors hover:border-white/40 hover:text-white"
          >
            Steam
          </a>
        </div>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} Queen's Own Yeomanry
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

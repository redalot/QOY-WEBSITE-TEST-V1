import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const NotFound = () => (
  <div className="tac-grid flex min-h-[70vh] items-center justify-center bg-tac-950 px-4 py-24 text-center text-white">
    <PageMeta title="Page Not Found" />
    <div>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.5em] text-qoy-yellow/60">
        Grid Reference Invalid
      </p>
      <h1 className="font-display text-7xl font-bold uppercase tracking-wide text-qoy-yellow md:text-9xl">
        404
      </h1>
      <p className="mt-4 font-display text-xl uppercase tracking-[0.3em] text-slate-300 md:text-2xl">
        Position Not Found
      </p>
      <p className="mx-auto mt-5 max-w-md text-slate-500">
        That page is off the map. Check the navigation above or return to base.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 bg-qoy-yellow px-10 py-4 font-display text-base uppercase tracking-widest text-tac-950 transition-all hover:bg-white"
      >
        Return to Base <ArrowRight size={18} />
      </Link>
    </div>
  </div>
);

export default NotFound;

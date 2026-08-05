import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { badgeSrc } from '../data/media';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/structure', label: 'Structure' },
  { to: '/training', label: 'Training' },
  { to: '/manual', label: 'Field Manual' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/start-guide', label: 'Start Guide' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-qoy-yellow/30 bg-tac-950/95 shadow-lg backdrop-blur">
      {/* Classification strip */}
      <div className="hidden items-center justify-between border-b border-white/5 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 lg:flex">
        <span>A Sqn · 1 Troop</span>
        <span className="text-qoy-yellow/60">Ops: Tue &amp; Sun · 20:00 UK</span>
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={badgeSrc}
            alt=""
            className="h-11 w-11 rounded-full border-2 border-qoy-yellow shadow-md"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold uppercase tracking-wide text-qoy-yellow">
              Queen's Own Yeomanry
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Light Cavalry · Recce
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden gap-5 font-display text-sm font-medium uppercase tracking-wide lg:flex">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `group relative transition-colors ${
                  isActive ? 'text-qoy-yellow' : 'text-slate-300 hover:text-qoy-yellow'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-qoy-yellow transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-qoy-yellow lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="border-t border-qoy-yellow/20 bg-tac-900 pb-4 lg:hidden">
          <div className="flex flex-col px-4 pt-2 font-display uppercase tracking-widest">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `border-b border-white/10 py-3 last:border-0 ${
                    isActive ? 'text-qoy-yellow' : 'text-slate-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

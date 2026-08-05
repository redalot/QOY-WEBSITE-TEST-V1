import { useEffect, useState } from 'react';
import { Radio } from 'lucide-react';
import {
  getNextOp,
  splitDuration,
  localZoneLabel,
  viewerIsUkTime,
} from '../lib/opSchedule';

const ukTime = (date) =>
  date.toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

const localTime = (date) =>
  date.toLocaleString(undefined, {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

const Unit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="font-mono text-3xl font-bold tabular-nums text-qoy-yellow md:text-4xl">
      {String(value).padStart(2, '0')}
    </span>
    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
      {label}
    </span>
  </div>
);

const OpCountdown = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const op = getNextOp(now);
  if (!op) return null;

  const remaining = splitDuration(op.start - now);
  const showLocal = !viewerIsUkTime();

  return (
    <section
      aria-label="Next operation"
      className="tac-bracket border border-qoy-yellow/25 bg-tac-900/80 p-6 backdrop-blur"
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70 md:justify-start">
            <Radio size={13} />
            {op.isLive ? 'Operation in progress' : 'Next operation'}
          </p>

          <p className="mt-2 font-display text-xl uppercase tracking-wide text-white">
            {ukTime(op.start)} <span className="text-slate-500">UK</span>
          </p>

          {showLocal && (
            <p className="mt-1 font-mono text-xs text-slate-400">
              {localTime(op.start)} your time ({localZoneLabel(op.start)})
            </p>
          )}
        </div>

        {op.isLive ? (
          <p className="font-display text-2xl uppercase tracking-[0.2em] text-status-ok">
            On the ground
          </p>
        ) : (
          <div className="flex gap-6">
            <Unit value={remaining.days} label="Days" />
            <Unit value={remaining.hours} label="Hrs" />
            <Unit value={remaining.minutes} label="Min" />
            <Unit value={remaining.seconds} label="Sec" />
          </div>
        )}
      </div>
    </section>
  );
};

export default OpCountdown;

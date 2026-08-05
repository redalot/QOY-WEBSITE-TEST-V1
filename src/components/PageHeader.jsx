// Standard page header: a classification strip over a gridded regimental
// banner. Used by every inner page so headings stay consistent.

const PageHeader = ({ eyebrow, title, subtitle, meta }) => (
  <header className="relative overflow-hidden border-b-2 border-qoy-yellow bg-cavalry-blue">
    {/* Classification strip */}
    <div className="relative z-10 flex items-center justify-between gap-4 border-b border-qoy-yellow/25 bg-tac-950/60 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-qoy-yellow/70">
      <span>Queen's Own Yeomanry</span>
      <span className="hidden sm:inline">{meta ?? 'Arma 3 · Milsim'}</span>
    </div>

    <div className="tac-grid absolute inset-0 opacity-60" aria-hidden="true" />
    <div
      className="absolute inset-0 bg-gradient-to-b from-transparent to-tac-950/70"
      aria-hidden="true"
    />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center md:py-20">
      {eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-qoy-yellow/70">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-qoy-yellow md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-blue-100/80 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-8 h-px w-24 bg-qoy-yellow/40" aria-hidden="true" />
    </div>
  </header>
);

export default PageHeader;

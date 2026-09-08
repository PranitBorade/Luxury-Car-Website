export default function Hero({ setActiveView }) {
  const stats = [
    { label: 'Curated Models', value: '7' },
    { label: 'Avg. Decision Speed', value: '3×' },
    { label: 'Data Points per Car', value: '40+' },
    { label: 'Logic-First Buyers', value: '4,200+' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16" id="hero">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,245,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)' }} />

      {/* Vertical accent lines */}
      <div className="hidden lg:block absolute left-10 top-32 hero-accent-line" />
      <div className="hidden lg:block absolute right-10 top-48 hero-accent-line" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">Premium Car Marketplace</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-offwhite font-medium leading-[1.05] mb-6">
            Buy on{' '}
            <span className="gold-text-gradient italic">logic.</span>
            <br />
            Not on ego.
          </h1>

          {/* Sub-copy */}
          <p className="font-inter text-offwhite/55 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Rancho Motors strips away the pageantry. Every car, compared side-by-side, 
            spec for spec. Because the best purchase is an{' '}
            <span className="text-offwhite/80">informed</span> one.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <button
              onClick={() => { setActiveView('Compare'); window.scrollTo({ top: 0 }); }}
              className="btn-primary"
              id="hero-compare-cta"
            >
              Compare Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => { setActiveView('Listings'); window.scrollTo({ top: 0 }); }}
              className="btn-outline"
              id="hero-listings-cta"
            >
              View All Cars
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-offwhite/8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-playfair text-3xl md:text-4xl text-gold font-medium mb-1">{s.value}</div>
                <div className="font-inter text-xs text-offwhite/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-offwhite">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-offwhite/60 to-transparent" />
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

const NAV_ITEMS = ['Home', 'Listings', 'Compare', 'Specs', 'EMI Calculator', 'Book Test Drive'];

export default function Navbar({ activeView, setActiveView, compareCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (item) => {
    setActiveView(item);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/95 backdrop-blur-md border-b border-offwhite/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('Home')}
            className="flex items-center gap-3 group"
            aria-label="Rancho Motors Home"
          >
            <div className="w-8 h-8 border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors duration-200">
              <span className="font-playfair text-gold text-sm font-bold">R</span>
            </div>
            <div>
              <span className="font-playfair text-offwhite font-medium tracking-wide text-base">Rancho</span>
              <span className="font-inter text-gold text-xs tracking-[0.25em] ml-0.5 uppercase"> Motors</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`nav-link ${activeView === item ? 'active' : ''}`}
                aria-current={activeView === item ? 'page' : undefined}
              >
                {item}
                {item === 'Compare' && compareCount > 0 && (
                  <span className="ml-1.5 bg-gold text-charcoal text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                    {compareCount}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-offwhite transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-offwhite transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-offwhite transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="menu-overlay fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg flex flex-col justify-center px-8 lg:hidden">
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`text-left font-playfair text-3xl font-medium transition-colors duration-200 ${
                  activeView === item ? 'text-gold' : 'text-offwhite/80 hover:text-offwhite'
                }`}
              >
                {item}
                {item === 'Compare' && compareCount > 0 && (
                  <span className="ml-3 bg-gold text-charcoal text-sm font-inter font-bold px-2 py-1 rounded-sm">
                    {compareCount}
                  </span>
                )}
              </button>
            ))}
          </nav>
          <div className="mt-12 section-label">Logic Over Luxury</div>
        </div>
      )}
    </>
  );
}

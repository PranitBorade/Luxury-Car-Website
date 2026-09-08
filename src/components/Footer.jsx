export default function Footer() {
  const socials = [
    { name: 'Instagram', icon: 'IG', href: '#' },
    { name: 'X (Twitter)', icon: 'X', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' },
  ];

  const links = {
    'Discover': ['Home', 'Car Listings', 'All Specs', 'EMI Calculator'],
    'Experience': ['Book Test Drive', 'Showroom Finder', 'Finance Partners', 'After-Sales'],
    'Company': ['About Rancho', 'Careers', 'Press', 'Contact'],
  };

  return (
    <footer className="border-t border-offwhite/6 bg-nearblack" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
                <span className="font-playfair text-gold text-sm font-bold">R</span>
              </div>
              <div>
                <span className="font-playfair text-offwhite font-medium text-base">Rancho</span>
                <span className="font-inter text-gold text-xs tracking-[0.25em] ml-0.5 uppercase"> Motors</span>
              </div>
            </div>
            <p className="font-inter text-xs text-offwhite/35 leading-loose max-w-xs mb-6">
              The premium luxury car marketplace that puts data before desire. 
              Because the best purchase decision is always an informed one.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="social-icon font-inter text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-4">{cat}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="font-inter text-xs text-offwhite/40 hover:text-offwhite/80 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-offwhite/6 pt-8 flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/25 mb-1">General Enquiry</div>
              <a href="tel:+918000001234" className="font-inter text-sm text-offwhite/60 hover:text-gold transition-colors duration-200">
                +91 80000 01234
              </a>
            </div>
            <div>
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/25 mb-1">Email</div>
              <a href="mailto:hello@ranchomotors.in" className="font-inter text-sm text-offwhite/60 hover:text-gold transition-colors duration-200">
                hello@ranchomotors.in
              </a>
            </div>
            <div>
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/25 mb-1">Headquarters</div>
              <span className="font-inter text-sm text-offwhite/60">Bandra Kurla Complex, Mumbai 400051</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-offwhite/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-inter text-[10px] text-offwhite/20 leading-relaxed max-w-2xl">
            <strong className="text-offwhite/30">Disclaimer:</strong> All car brands, names, specifications, and pricing shown on this website are entirely fictional and created for demonstration purposes only. 
            Rancho Motors is a concept project. Any resemblance to actual manufacturers is purely coincidental. 
            EMI calculations are illustrative only and do not constitute financial advice.
          </p>
          <p className="font-inter text-[10px] text-offwhite/20 whitespace-nowrap">
            © {new Date().getFullYear()} Rancho Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

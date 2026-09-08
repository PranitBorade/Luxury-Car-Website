import { useState } from 'react';
import { cars } from '../data/cars';
import CarIllustration from './CarIllustration';

const SPEC_GROUPS = [
  {
    title: 'Performance',
    specs: ['engine', 'displacement', 'power', 'torque', 'transmission', 'drivetrain', 'fuelType', 'topSpeed', 'acceleration'],
  },
  {
    title: 'Efficiency',
    specs: ['mileage'],
  },
  {
    title: 'Dimensions',
    specs: ['length', 'width', 'height', 'wheelbase', 'bootSpace', 'kerbWeight'],
  },
  {
    title: 'Capacity',
    specs: ['seating'],
  },
];

const LABELS = {
  engine: 'Engine', displacement: 'Displacement', power: 'Max Power', torque: 'Max Torque',
  transmission: 'Transmission', drivetrain: 'Drivetrain', fuelType: 'Fuel Type',
  topSpeed: 'Top Speed', acceleration: '0–100 km/h', mileage: 'Mileage / Range',
  length: 'Length', width: 'Width', height: 'Height', wheelbase: 'Wheelbase',
  bootSpace: 'Boot Space', kerbWeight: 'Kerb Weight', seating: 'Seating',
};

export default function Specs({ specCar, setSpecCar, setActiveView }) {
  const [openGroups, setOpenGroups] = useState(['Performance', 'Dimensions', 'Capacity', 'Efficiency']);

  if (!specCar) {
    return (
      <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="font-playfair text-3xl text-offwhite mb-4">Select a vehicle</h2>
        <p className="font-inter text-sm text-offwhite/40 mb-8">
          Choose a car from our listings to see its full specification sheet.
        </p>
        <button onClick={() => { setActiveView('Listings'); window.scrollTo({ top: 0 }); }} className="btn-primary">
          View Listings
        </button>
      </section>
    );
  }

  const toggleGroup = (g) => setOpenGroups(prev =>
    prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
  );

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Back */}
      <button
        onClick={() => { setActiveView('Listings'); window.scrollTo({ top: 0 }); }}
        className="flex items-center gap-2 font-inter text-xs text-offwhite/40 hover:text-gold transition-colors duration-200 mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Listings
      </button>

      {/* Hero header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <div className="section-label mb-3">{specCar.segment}</div>
          <div className="font-inter text-xs tracking-widest uppercase text-gold/70 mb-1">{specCar.brand}</div>
          <h1 className="font-playfair text-4xl md:text-5xl text-offwhite font-medium mb-3">{specCar.name}</h1>
          <p className="font-inter text-offwhite/40 italic mb-6">{specCar.tagline}</p>
          <div className="font-playfair text-3xl text-gold mb-4">{specCar.priceDisplay}</div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-nearblack border border-offwhite/8 px-4 py-2 text-center">
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/30 mb-1">Power</div>
              <div className="font-inter text-sm font-semibold text-offwhite">{specCar.power}</div>
            </div>
            <div className="bg-nearblack border border-offwhite/8 px-4 py-2 text-center">
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/30 mb-1">0–100</div>
              <div className="font-inter text-sm font-semibold text-offwhite">{specCar.acceleration.replace(' (0–100 km/h)', '')}</div>
            </div>
            <div className="bg-nearblack border border-offwhite/8 px-4 py-2 text-center">
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/30 mb-1">Top Speed</div>
              <div className="font-inter text-sm font-semibold text-offwhite">{specCar.topSpeed}</div>
            </div>
            <div className="bg-nearblack border border-offwhite/8 px-4 py-2 text-center">
              <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/30 mb-1">Safety</div>
              <div className="font-inter text-sm font-semibold text-gold">{specCar.safetyRating.split(' ')[0]} {specCar.safetyRating.split(' ')[1]}</div>
            </div>
          </div>
        </div>
        <div className="car-img-placeholder rounded-none p-8 flex items-center justify-center h-60">
          <CarIllustration car={specCar} className="w-full h-full" />
        </div>
      </div>

      {/* Car picker */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-offwhite/8 pb-6">
        <span className="font-inter text-xs text-offwhite/30 self-center mr-2">View specs for:</span>
        {cars.map(c => (
          <button
            key={c.id}
            onClick={() => setSpecCar(c)}
            className={`font-inter text-xs px-3 py-1.5 border transition-all duration-200 ${
              c.id === specCar.id
                ? 'border-gold/50 text-gold bg-gold/5'
                : 'border-offwhite/10 text-offwhite/40 hover:border-offwhite/25 hover:text-offwhite/60'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Spec groups */}
      <div className="space-y-2">
        {SPEC_GROUPS.map(group => (
          <div key={group.title} className="border border-offwhite/8 overflow-hidden">
            <button
              onClick={() => toggleGroup(group.title)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-offwhite/2 transition-colors duration-200"
              aria-expanded={openGroups.includes(group.title)}
            >
              <span className="font-playfair text-offwhite font-medium">{group.title}</span>
              <span className={`text-gold text-lg transition-transform duration-200 ${openGroups.includes(group.title) ? 'rotate-45' : ''}`}>+</span>
            </button>
            {openGroups.includes(group.title) && (
              <div className="px-6 pb-5 border-t border-offwhite/5">
                {group.specs.map(key => (
                  <div key={key} className="spec-row">
                    <span className="font-inter text-xs text-offwhite/35">{LABELS[key]}</span>
                    <span className="font-inter text-sm text-offwhite/80">{specCar[key] || '—'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Safety Features */}
        <div className="border border-offwhite/8 overflow-hidden">
          <button
            onClick={() => toggleGroup('Safety')}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-offwhite/2 transition-colors duration-200"
            aria-expanded={openGroups.includes('Safety')}
          >
            <span className="font-playfair text-offwhite font-medium">Safety Features</span>
            <span className={`text-gold text-lg transition-transform duration-200 ${openGroups.includes('Safety') ? 'rotate-45' : ''}`}>+</span>
          </button>
          {openGroups.includes('Safety') && (
            <div className="px-6 pb-5 border-t border-offwhite/5 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {specCar.safetyFeatures.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="text-gold text-xs">✓</span>
                  <span className="font-inter text-sm text-offwhite/65">{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interior & Technology */}
        <div className="border border-offwhite/8 overflow-hidden">
          <button
            onClick={() => toggleGroup('Interior')}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-offwhite/2 transition-colors duration-200"
            aria-expanded={openGroups.includes('Interior')}
          >
            <span className="font-playfair text-offwhite font-medium">Interior & Comfort</span>
            <span className={`text-gold text-lg transition-transform duration-200 ${openGroups.includes('Interior') ? 'rotate-45' : ''}`}>+</span>
          </button>
          {openGroups.includes('Interior') && (
            <div className="px-6 pb-5 border-t border-offwhite/5 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {specCar.interior.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="text-gold text-xs">◈</span>
                  <span className="font-inter text-sm text-offwhite/65">{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border border-offwhite/8 overflow-hidden">
          <button
            onClick={() => toggleGroup('Technology')}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-offwhite/2 transition-colors duration-200"
            aria-expanded={openGroups.includes('Technology')}
          >
            <span className="font-playfair text-offwhite font-medium">Technology & Connectivity</span>
            <span className={`text-gold text-lg transition-transform duration-200 ${openGroups.includes('Technology') ? 'rotate-45' : ''}`}>+</span>
          </button>
          {openGroups.includes('Technology') && (
            <div className="px-6 pb-5 border-t border-offwhite/5 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {specCar.technology.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="text-gold text-xs">▸</span>
                  <span className="font-inter text-sm text-offwhite/65">{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

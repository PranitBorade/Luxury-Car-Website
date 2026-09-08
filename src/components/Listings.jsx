import { useState } from 'react';
import { cars } from '../data/cars';
import CarIllustration from './CarIllustration';

export default function Listings({ selectedCars, setSelectedCars, setActiveView, setSpecCar }) {
  const [filter, setFilter] = useState('All');
  const segments = ['All', ...Array.from(new Set(cars.map(c => c.fuelType)))];

  const filtered = filter === 'All' ? cars : cars.filter(c => c.fuelType === filter);

  const toggleSelect = (car) => {
    if (selectedCars.find(c => c.id === car.id)) {
      setSelectedCars(selectedCars.filter(c => c.id !== car.id));
    } else if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const isSelected = (car) => selectedCars.some(c => c.id === car.id);
  const isDisabled = (car) => !isSelected(car) && selectedCars.length >= 3;

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="section-label">Our Collection</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="section-title">Precision Engineered.<br />Logically Priced.</h2>
          {/* Fuel filter */}
          <div className="flex flex-wrap gap-2">
            {segments.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`font-inter text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                  filter === s
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-offwhite/10 text-offwhite/50 hover:border-offwhite/25 hover:text-offwhite/80'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        {selectedCars.length > 0 && (
          <p className="mt-4 font-inter text-xs text-offwhite/40">
            {selectedCars.length}/3 vehicles selected for comparison
            {selectedCars.length >= 3 && <span className="text-gold ml-2">— Maximum reached</span>}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isSelected={isSelected(car)}
            isDisabled={isDisabled(car)}
            onToggle={toggleSelect}
            onViewSpecs={() => { setSpecCar(car); setActiveView('Specs'); window.scrollTo({ top: 0 }); }}
          />
        ))}
      </div>

      {/* Compare sticky bar */}
      {selectedCars.length >= 2 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 compare-bar-enter">
          <div className="bg-nearblack border-t border-gold/20 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="font-inter text-sm text-offwhite/70">
                  <span className="text-gold font-semibold">{selectedCars.length}</span> cars ready to compare
                </span>
                <div className="hidden md:flex items-center gap-2 ml-2">
                  {selectedCars.map(c => (
                    <span key={c.id} className="font-inter text-xs text-offwhite/50 bg-offwhite/5 px-2 py-1">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="btn-primary text-xs px-6 py-2.5"
                onClick={() => { setActiveView('Compare'); window.scrollTo({ top: 0 }); }}
                id="sticky-compare-btn"
              >
                Compare ({selectedCars.length})
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CarCard({ car, isSelected, isDisabled, onToggle, onViewSpecs }) {
  return (
    <article
      className={`car-card card-glass relative flex flex-col ${isSelected ? 'border-gold/40 shadow-[0_0_0_1px_rgba(201,162,39,0.2)]' : ''} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {/* Car image area */}
      <div className="car-img-placeholder h-48 flex items-end justify-center pb-2 px-4 relative">
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="font-inter text-[10px] tracking-widest uppercase text-offwhite/30 bg-offwhite/5 px-2 py-1">
            {car.segment}
          </span>
        </div>
        <CarIllustration car={car} className="w-full h-32" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Brand & Name */}
        <div>
          <div className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">{car.brand}</div>
          <h3 className="font-playfair text-xl text-offwhite font-medium">{car.name}</h3>
          <p className="font-inter text-xs text-offwhite/35 italic mt-0.5">{car.tagline}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-playfair text-2xl text-gold font-medium">{car.priceDisplay}</span>
          <span className="font-inter text-xs text-offwhite/30">ex-showroom</span>
        </div>

        {/* Key specs */}
        <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-offwhite/6">
          {[
            { icon: '⚡', label: 'Engine', val: car.engine.split(' ').slice(0,2).join(' ') },
            { icon: '⛽', label: 'Mileage', val: car.mileage },
            { icon: '👥', label: 'Seats', val: car.seating },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-inter text-[9px] uppercase tracking-widest text-offwhite/30 mb-1">{s.label}</div>
              <div className="font-inter text-xs font-medium text-offwhite/75">{s.val}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={onViewSpecs}
            className="btn-outline text-xs py-2 px-4 flex-1 justify-center"
            id={`specs-btn-${car.id}`}
          >
            Full Specs
          </button>
          <label
            className={`flex items-center gap-2 cursor-pointer ${isDisabled ? 'cursor-not-allowed' : ''}`}
            title={isDisabled ? 'Maximum 3 cars for comparison' : 'Select to compare'}
          >
            <input
              type="checkbox"
              className="compare-check"
              checked={isSelected}
              disabled={isDisabled}
              onChange={() => !isDisabled && onToggle(car)}
              id={`compare-check-${car.id}`}
              aria-label={`Select ${car.name} for comparison`}
            />
            <span className="font-inter text-xs text-offwhite/50">Compare</span>
          </label>
        </div>
      </div>
    </article>
  );
}

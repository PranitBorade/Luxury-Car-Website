import { useState } from 'react';
import { cars } from '../data/cars';
import CarIllustration from './CarIllustration';

const SPEC_ROWS = [
  { key: 'price', label: 'Price', format: c => c.priceDisplay },
  { key: 'engine', label: 'Engine', format: c => c.engine },
  { key: 'displacement', label: 'Displacement', format: c => c.displacement },
  { key: 'power', label: 'Power', format: c => c.power },
  { key: 'torque', label: 'Torque', format: c => c.torque },
  { key: 'transmission', label: 'Transmission', format: c => c.transmission },
  { key: 'drivetrain', label: 'Drivetrain', format: c => c.drivetrain },
  { key: 'fuelType', label: 'Fuel Type', format: c => c.fuelType },
  { key: 'mileage', label: 'Mileage / Range', format: c => c.mileage },
  { key: 'topSpeed', label: 'Top Speed', format: c => c.topSpeed },
  { key: 'acceleration', label: '0–100 km/h', format: c => c.acceleration },
  { key: 'seating', label: 'Seating Capacity', format: c => c.seating },
  { key: 'length', label: 'Length', format: c => c.length },
  { key: 'width', label: 'Width', format: c => c.width },
  { key: 'height', label: 'Height', format: c => c.height },
  { key: 'wheelbase', label: 'Wheelbase', format: c => c.wheelbase },
  { key: 'bootSpace', label: 'Boot Space', format: c => c.bootSpace },
  { key: 'kerbWeight', label: 'Kerb Weight', format: c => c.kerbWeight },
  { key: 'safetyRating', label: 'Safety Rating', format: c => c.safetyRating },
];

export default function Compare({ selectedCars, setSelectedCars, setActiveView }) {
  const [editSlot, setEditSlot] = useState(null); // index 0,1,2 of which slot to change

  const handleChangeCar = (slotIdx, newCarId) => {
    const newCar = cars.find(c => c.id === Number(newCarId));
    if (!newCar) return;
    const updated = [...selectedCars];
    updated[slotIdx] = newCar;
    setSelectedCars(updated);
    setEditSlot(null);
  };

  const removeSlot = (idx) => {
    setSelectedCars(selectedCars.filter((_, i) => i !== idx));
  };

  const addSlot = (carId) => {
    if (selectedCars.length >= 3) return;
    const car = cars.find(c => c.id === Number(carId));
    if (car && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const usedIds = selectedCars.map(c => c.id);
  const available = cars.filter(c => !usedIds.includes(c.id));

  if (selectedCars.length === 0) {
    return (
      <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 14h20M14 4v20" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="font-playfair text-3xl text-offwhite mb-3">No cars selected yet</h2>
        <p className="font-inter text-offwhite/40 text-sm mb-8 max-w-sm">
          Head to Listings and select 2–3 vehicles to compare them side by side.
        </p>
        <button
          onClick={() => { setActiveView('Listings'); window.scrollTo({ top: 0 }); }}
          className="btn-primary"
        >
          Browse Listings
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="section-label">Side-by-Side Analysis</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="section-title">The Numbers<br /><span className="italic">Don't Lie.</span></h2>
          <button
            onClick={() => { setActiveView('Listings'); window.scrollTo({ top: 0 }); }}
            className="btn-outline text-xs self-start sm:self-auto"
          >
            ← Back to Listings
          </button>
        </div>
      </div>

      {/* Comparison table — scrolls horizontally on small screens */}
      <div className="overflow-x-auto pb-4">
        <table className="w-full min-w-[640px] border-collapse">
          {/* Car header row */}
          <thead>
            <tr>
              <th className="w-36 md:w-44 text-left pb-6 pr-4 align-top">
                <span className="font-inter text-xs text-offwhite/30 uppercase tracking-widest">Specification</span>
              </th>
              {selectedCars.map((car, idx) => (
                <th key={car.id} className="pb-6 px-2 align-top">
                  <div className={`rounded-none p-4 border ${idx === 0 ? 'border-gold/25 bg-gold/5' : 'border-offwhite/8 bg-nearblack'}`}>
                    <CarIllustration car={car} className="w-full h-20 mb-3" />
                    <div className="font-inter text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-0.5">{car.brand}</div>
                    <div className="font-playfair text-sm text-offwhite font-medium leading-tight mb-1">{car.name}</div>
                    {/* Edit / Remove controls */}
                    <div className="flex gap-2 mt-2">
                      {editSlot === idx ? (
                        <select
                          className="input-field text-[11px] py-1 px-2 flex-1"
                          onChange={e => handleChangeCar(idx, e.target.value)}
                          defaultValue=""
                          autoFocus
                          aria-label="Select replacement car"
                        >
                          <option value="" disabled>Swap car…</option>
                          {available.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditSlot(editSlot === idx ? null : idx)}
                            className="font-inter text-[10px] text-offwhite/40 hover:text-gold transition-colors duration-150"
                            aria-label={`Swap ${car.name}`}
                          >
                            Swap
                          </button>
                          <span className="text-offwhite/15">|</span>
                          <button
                            onClick={() => removeSlot(idx)}
                            className="font-inter text-[10px] text-offwhite/40 hover:text-red-400 transition-colors duration-150"
                            aria-label={`Remove ${car.name}`}
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </th>
              ))}
              {/* Add slot */}
              {selectedCars.length < 3 && available.length > 0 && (
                <th className="pb-6 px-2 align-top">
                  <div className="border border-dashed border-offwhite/15 p-4 h-40 flex flex-col items-center justify-center gap-3">
                    <span className="font-inter text-xs text-offwhite/30">Add a car</span>
                    <select
                      className="input-field text-[11px] py-1 px-2 w-full"
                      onChange={e => { addSlot(e.target.value); e.target.value = ''; }}
                      defaultValue=""
                      aria-label="Add car to compare"
                    >
                      <option value="" disabled>Select…</option>
                      {available.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </th>
              )}
            </tr>
          </thead>

          {/* Spec rows */}
          <tbody>
            {SPEC_ROWS.map((row, rowIdx) => (
              <tr
                key={row.key}
                className={`border-b border-offwhite/5 ${rowIdx % 2 === 0 ? 'bg-nearblack/30' : ''}`}
              >
                <td className="py-3 pr-4 font-inter text-xs text-offwhite/40 align-middle whitespace-nowrap">
                  {row.label}
                </td>
                {selectedCars.map((car, idx) => (
                  <td
                    key={car.id}
                    className={`py-3 px-3 text-center font-inter text-xs font-medium align-middle ${
                      idx === 0 ? 'text-gold/90' : 'text-offwhite/70'
                    }`}
                  >
                    {row.format(car)}
                  </td>
                ))}
                {selectedCars.length < 3 && <td />}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Safety & Features comparison */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCompare selectedCars={selectedCars} dataKey="safetyFeatures" title="Safety Features" />
        <FeatureCompare selectedCars={selectedCars} dataKey="interior" title="Interior & Comfort" />
      </div>
    </section>
  );
}

function FeatureCompare({ selectedCars, dataKey, title }) {
  const allFeatures = Array.from(new Set(selectedCars.flatMap(c => c[dataKey] || [])));

  return (
    <div>
      <h3 className="font-playfair text-lg text-offwhite mb-4 border-b border-offwhite/8 pb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-2 font-inter text-[10px] uppercase tracking-widest text-offwhite/30 pr-4">Feature</th>
              {selectedCars.map(c => (
                <th key={c.id} className="pb-2 font-inter text-[10px] uppercase tracking-widest text-offwhite/30 text-center px-2">
                  {c.brand}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map(feat => (
              <tr key={feat} className="border-b border-offwhite/5">
                <td className="py-2 font-inter text-xs text-offwhite/50 pr-4">{feat}</td>
                {selectedCars.map(c => (
                  <td key={c.id} className="py-2 text-center px-2">
                    {(c[dataKey] || []).includes(feat)
                      ? <span className="text-gold text-sm">✓</span>
                      : <span className="text-offwhite/15 text-sm">—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

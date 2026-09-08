import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Compare from './components/Compare';
import Specs from './components/Specs';
import EMICalculator from './components/EMICalculator';
import BookTestDrive from './components/BookTestDrive';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('Home');
  const [selectedCars, setSelectedCars] = useState([]);
  const [specCar, setSpecCar] = useState(null);

  const navigateTo = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-charcoal text-offwhite">
      <Navbar
        activeView={activeView}
        setActiveView={navigateTo}
        compareCount={selectedCars.length}
      />

      <main>
        {activeView === 'Home' && (
          <>
            <Hero setActiveView={navigateTo} />
            {/* Teaser strip below hero */}
            <div className="bg-nearblack border-t border-b border-offwhite/6 py-8">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap justify-center md:justify-between gap-8 items-center">
                {[
                  { label: 'The data-first marketplace', icon: '◈' },
                  { label: 'Compare up to 3 vehicles side-by-side', icon: '⇌' },
                  { label: 'Calculate your exact EMI in seconds', icon: '₹' },
                  { label: 'Book a test drive at a showroom near you', icon: '◎' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-gold text-sm">{item.icon}</span>
                    <span className="font-inter text-xs text-offwhite/40">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Featured listings preview */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-px bg-gold" />
                    <span className="section-label">Featured</span>
                  </div>
                  <h2 className="font-playfair text-2xl md:text-3xl text-offwhite font-medium">
                    Start with a comparison
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('Listings')}
                  className="btn-outline text-xs hidden sm:flex"
                >
                  View All 7 Cars
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Velmora Prestige', sub: 'Full-Size Sedan', price: '₹98,00,000', view: 'Listings' },
                  { name: 'Orionis Volt', sub: 'EV Flagship • 600 km range', price: '₹1,60,00,000', view: 'Listings' },
                  { name: 'Sterling Aeon GT', sub: 'Grand Touring Coupé', price: '₹1,35,00,000', view: 'Listings' },
                ].map(item => (
                  <button
                    key={item.name}
                    onClick={() => navigateTo(item.view)}
                    className="flex flex-col p-5 bg-nearblack border border-offwhite/8 hover:border-gold/25 transition-all duration-200 text-left group"
                  >
                    <span className="font-inter text-[10px] uppercase tracking-widest text-offwhite/30 mb-1">{item.sub}</span>
                    <span className="font-playfair text-lg text-offwhite font-medium group-hover:text-gold/90 transition-colors duration-200 mb-2">{item.name}</span>
                    <span className="font-inter text-sm text-gold mt-auto">{item.price}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => navigateTo('Listings')}
                className="btn-outline text-xs mt-5 sm:hidden"
              >
                View All 7 Cars
              </button>
            </div>
            {/* Philosophy section */}
            <div className="border-t border-offwhite/6 bg-nearblack py-20">
              <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <div className="section-label mb-6 text-center">Our Philosophy</div>
                <blockquote className="font-playfair text-3xl md:text-4xl text-offwhite font-medium leading-tight mb-8">
                  "A luxury car should earn its price on{' '}
                  <span className="gold-text-gradient italic">specifications</span>,<br />
                  not on status symbols."
                </blockquote>
                <p className="font-inter text-offwhite/40 text-sm max-w-2xl mx-auto leading-loose">
                  At Rancho Motors, every listing is stripped of marketing language. 
                  What you see is engine displacement, power figures, safety ratings, 
                  and real-world mileage. The decision is yours — and it should be rational.
                </p>
              </div>
            </div>
            <Footer />
          </>
        )}

        {activeView === 'Listings' && (
          <>
            <Listings
              selectedCars={selectedCars}
              setSelectedCars={setSelectedCars}
              setActiveView={navigateTo}
              setSpecCar={setSpecCar}
            />
            <Footer />
          </>
        )}

        {activeView === 'Compare' && (
          <>
            <Compare
              selectedCars={selectedCars}
              setSelectedCars={setSelectedCars}
              setActiveView={navigateTo}
            />
            <Footer />
          </>
        )}

        {activeView === 'Specs' && (
          <>
            <Specs
              specCar={specCar}
              setSpecCar={setSpecCar}
              setActiveView={navigateTo}
            />
            <Footer />
          </>
        )}

        {activeView === 'EMI Calculator' && (
          <>
            <EMICalculator />
            <Footer />
          </>
        )}

        {activeView === 'Book Test Drive' && (
          <>
            <BookTestDrive />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

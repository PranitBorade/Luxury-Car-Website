import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cars } from '../data/cars';

function formatINR(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

const COLORS = ['#C9A227', '#2a2a2e'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-nearblack border border-gold/20 px-3 py-2 text-xs font-inter">
        <span className="text-offwhite/60">{payload[0].name}: </span>
        <span className="text-offwhite font-medium">{formatINR(payload[0].value)}</span>
      </div>
    );
  }
  return null;
};

export default function EMICalculator() {
  const [carPrice, setCarPrice] = useState(9800000);
  const [downPayment, setDownPayment] = useState(2000000);
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(8.5);
  const [selectedCar, setSelectedCar] = useState('');

  const handleCarSelect = (e) => {
    const car = cars.find(c => c.id === Number(e.target.value));
    if (car) {
      setCarPrice(car.price);
      setSelectedCar(e.target.value);
      setDownPayment(Math.round(car.price * 0.2));
    }
  };

  const calc = useMemo(() => {
    const P = Math.max(0, carPrice - downPayment);
    const r = rate / 12 / 100;
    const n = tenure;
    if (P <= 0) return { emi: 0, totalPayment: 0, totalInterest: 0, principal: 0 };
    let emi;
    if (r === 0) {
      emi = P / n;
    } else {
      const pow = Math.pow(1 + r, n);
      emi = (P * r * pow) / (pow - 1);
    }
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    return { emi, totalPayment, totalInterest, principal: P };
  }, [carPrice, downPayment, tenure, rate]);

  const pieData = [
    { name: 'Principal (Loan Amount)', value: Math.round(calc.principal) },
    { name: 'Total Interest Paid', value: Math.round(calc.totalInterest) },
  ];

  const maxDP = Math.max(0, carPrice - 1);

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="section-label">Financial Planning</span>
        </div>
        <h2 className="section-title">EMI <span className="italic">Calculator</span></h2>
        <p className="font-inter text-offwhite/40 text-sm mt-2 max-w-lg">
          Know your exact monthly outflow before you walk into the showroom. 
          Uses the standard reducing-balance formula.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-7">
          {/* Quick-fill from car */}
          <div>
            <label className="font-inter text-xs uppercase tracking-widest text-offwhite/40 block mb-2">
              Quick-fill from listing
            </label>
            <select
              className="input-field"
              value={selectedCar}
              onChange={handleCarSelect}
              id="emi-car-select"
            >
              <option value="">Select a car to auto-fill price…</option>
              {cars.map(c => (
                <option key={c.id} value={c.id}>{c.name} — {c.priceDisplay}</option>
              ))}
            </select>
          </div>

          {/* Car Price */}
          <SliderInput
            id="emi-car-price"
            label="Car Price (ex-showroom)"
            value={carPrice}
            min={500000}
            max={50000000}
            step={50000}
            display={formatINR(carPrice)}
            onChange={setCarPrice}
          />

          {/* Down Payment */}
          <SliderInput
            id="emi-down-payment"
            label="Down Payment"
            value={downPayment}
            min={0}
            max={maxDP}
            step={50000}
            display={formatINR(downPayment)}
            onChange={v => setDownPayment(Math.min(v, maxDP))}
          />

          {/* Tenure */}
          <SliderInput
            id="emi-tenure"
            label="Loan Tenure"
            value={tenure}
            min={12}
            max={84}
            step={6}
            display={`${tenure} months (${(tenure / 12).toFixed(1)} yr)`}
            onChange={setTenure}
          />

          {/* Interest rate */}
          <SliderInput
            id="emi-rate"
            label="Annual Interest Rate"
            value={rate}
            min={6}
            max={20}
            step={0.25}
            display={`${rate.toFixed(2)}% p.a.`}
            onChange={setRate}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* EMI highlight */}
          <div className="border border-gold/25 bg-gold/5 px-8 py-8">
            <div className="font-inter text-xs uppercase tracking-widest text-offwhite/40 mb-2">Monthly EMI</div>
            <div className="font-playfair text-5xl text-gold font-medium">
              {calc.emi > 0 ? formatINR(Math.round(calc.emi)) : '₹0'}
            </div>
            <div className="font-inter text-xs text-offwhite/30 mt-2">per month for {tenure} months</div>
          </div>

          {/* Breakdown summary */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Loan Amount', value: formatINR(calc.principal) },
              { label: 'Total Interest', value: formatINR(Math.round(calc.totalInterest)), highlight: true },
              { label: 'Total Payable', value: formatINR(Math.round(calc.totalPayment)) },
            ].map(item => (
              <div key={item.label} className="bg-nearblack border border-offwhite/8 p-4 text-center">
                <div className="font-inter text-[9px] uppercase tracking-widest text-offwhite/30 mb-1">{item.label}</div>
                <div className={`font-inter text-sm font-semibold ${item.highlight ? 'text-gold' : 'text-offwhite'}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Pie chart */}
          {calc.principal > 0 && (
            <div className="bg-nearblack border border-offwhite/8 p-6">
              <div className="font-inter text-xs uppercase tracking-widest text-offwhite/30 mb-4">Breakup: Principal vs. Interest</div>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    formatter={(value) => (
                      <span className="font-inter text-xs text-offwhite/60">{value}</span>
                    )}
                    iconType="circle"
                    iconSize={8}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Formula note */}
          <p className="font-inter text-[10px] text-offwhite/20 leading-relaxed">
            Formula: EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1) 
            where P = loan principal, r = monthly interest rate (annual/12/100), n = tenure in months. 
            For illustration only. Actual rates vary by lender.
          </p>
        </div>
      </div>
    </section>
  );
}

function SliderInput({ id, label, value, min, max, step, display, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="font-inter text-xs uppercase tracking-widest text-offwhite/40">{label}</label>
        <span className="font-inter text-sm font-medium text-offwhite/90">{display}</span>
      </div>
      <div className="relative">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full"
          style={{
            background: `linear-gradient(to right, #C9A227 ${pct}%, rgba(245,245,240,0.12) ${pct}%)`,
          }}
          aria-label={label}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-inter text-[10px] text-offwhite/20">{formatINR(min)}</span>
        <span className="font-inter text-[10px] text-offwhite/20">{formatINR(max)}</span>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { cars, carLocations } from '../data/cars';

export default function BookTestDrive() {
  const [form, setForm] = useState({
    name: '', phone: '', car: '', date: '', time: '', location: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.car) e.car = 'Please select a preferred car.';
    if (!form.date) e.date = 'Please choose a date.';
    if (!form.time) e.time = 'Please select a time slot.';
    if (!form.location) e.location = 'Please select a showroom.';
    return e;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    const selectedCarName = cars.find(c => String(c.id) === form.car)?.name || form.car;
    return (
      <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <div className="confirm-message w-full border border-gold/30 bg-gold/5 p-10 text-center">
          <div className="w-12 h-12 border border-gold/50 flex items-center justify-center mx-auto mb-6">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5 9-9" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="font-inter text-xs uppercase tracking-[0.3em] text-gold/70 mb-3">Booking Confirmed</div>
          <h2 className="font-playfair text-3xl text-offwhite mb-4">See you at the wheel, {form.name.split(' ')[0]}.</h2>
          <p className="font-inter text-offwhite/50 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
            Your test drive of the <span className="text-offwhite">{selectedCarName}</span> has been scheduled for{' '}
            <span className="text-offwhite">{new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>{' '}
            at <span className="text-offwhite">{form.time}</span>.<br /><br />
            Location: <span className="text-offwhite">{form.location}</span>
          </p>
          <div className="border-t border-offwhite/8 pt-6 font-inter text-xs text-offwhite/30">
            A Rancho Motors advisor will reach you at <span className="text-offwhite">{form.phone}</span> to confirm the appointment.
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', car:'', date:'', time:'', location:'' }); }}
            className="btn-outline mt-6 text-xs"
          >
            Book Another Drive
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="section-label">Experience First</span>
        </div>
        <h2 className="section-title">Book a <span className="italic">Test Drive</span></h2>
        <p className="font-inter text-offwhite/40 text-sm mt-2 max-w-lg">
          Before the data, there's the drive. Reserve your slot at a Rancho Motors experience centre.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="td-name" label="Full Name" error={errors.name}>
              <input
                id="td-name"
                type="text"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder="Arjun Sharma"
                className={`input-field ${errors.name ? 'border-red-500/40' : ''}`}
                aria-required="true"
              />
            </Field>
            <Field id="td-phone" label="Mobile Number" error={errors.phone}>
              <div className="flex">
                <span className="input-field w-14 flex-shrink-0 text-center text-offwhite/40 border-r-0">+91</span>
                <input
                  id="td-phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="9876543210"
                  maxLength={10}
                  className={`input-field flex-1 ${errors.phone ? 'border-red-500/40' : ''}`}
                  aria-required="true"
                />
              </div>
            </Field>
          </div>

          <Field id="td-car" label="Preferred Car" error={errors.car}>
            <select
              id="td-car"
              value={form.car}
              onChange={e => handleChange('car', e.target.value)}
              className={`input-field ${errors.car ? 'border-red-500/40' : ''}`}
              aria-required="true"
            >
              <option value="">Select a vehicle…</option>
              {cars.map(c => (
                <option key={c.id} value={c.id}>{c.name} — {c.priceDisplay}</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="td-date" label="Preferred Date" error={errors.date}>
              <input
                id="td-date"
                type="date"
                value={form.date}
                min={today}
                onChange={e => handleChange('date', e.target.value)}
                className={`input-field ${errors.date ? 'border-red-500/40' : ''}`}
                aria-required="true"
                style={{ colorScheme: 'dark' }}
              />
            </Field>
            <Field id="td-time" label="Preferred Time" error={errors.time}>
              <select
                id="td-time"
                value={form.time}
                onChange={e => handleChange('time', e.target.value)}
                className={`input-field ${errors.time ? 'border-red-500/40' : ''}`}
                aria-required="true"
              >
                <option value="">Select a time slot…</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>
          </div>

          <Field id="td-location" label="Showroom Location" error={errors.location}>
            <select
              id="td-location"
              value={form.location}
              onChange={e => handleChange('location', e.target.value)}
              className={`input-field ${errors.location ? 'border-red-500/40' : ''}`}
              aria-required="true"
            >
              <option value="">Select a showroom…</option>
              {carLocations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </Field>

          <button type="submit" className="btn-primary w-full justify-center" id="td-submit">
            Confirm Test Drive
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="border border-offwhite/8 p-6">
            <h3 className="font-playfair text-lg text-offwhite mb-4">What to expect</h3>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Advisor Welcome', desc: 'A dedicated product advisor greets you and walks you through the vehicle.' },
                { step: '02', title: 'Pre-drive Briefing', desc: 'Quick orientation of controls, drive modes, and safety systems.' },
                { step: '03', title: 'The Drive', desc: '45-minute curated route designed to demonstrate the car\'s character.' },
                { step: '04', title: 'Data Debrief', desc: 'Post-drive telemetry review. Numbers, not opinions.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-playfair text-gold/40 text-lg leading-none mt-0.5">{item.step}</span>
                  <div>
                    <div className="font-inter text-xs font-semibold text-offwhite/80 mb-0.5">{item.title}</div>
                    <div className="font-inter text-xs text-offwhite/35 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-offwhite/8 p-6">
            <div className="font-inter text-[10px] uppercase tracking-widest text-offwhite/25 mb-2">Showroom Hours</div>
            <div className="font-inter text-sm text-offwhite/60">Mon – Sat: 9 AM – 6 PM</div>
            <div className="font-inter text-sm text-offwhite/60">Sunday: 10 AM – 4 PM</div>
            <div className="mt-4 font-inter text-[10px] uppercase tracking-widest text-offwhite/25 mb-1">General Enquiry</div>
            <div className="font-inter text-sm text-gold">+91 80000 01234</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-inter text-xs uppercase tracking-widest text-offwhite/40 block mb-2">
        {label}
      </label>
      {children}
      {error && <p className="font-inter text-xs text-red-400/80 mt-1.5">{error}</p>}
    </div>
  );
}

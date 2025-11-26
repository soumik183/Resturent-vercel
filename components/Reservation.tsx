import React, { useState } from 'react';
import { Reveal } from './Reveal';

export const Reservation: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setResultMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c885bc82-fd77-47e8-a0f6-99218f2f4d92");
    formData.append("subject", "New Table Reservation - Calcutta 2025");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus('success');
        setResultMessage("Reservation request sent successfully! We will confirm shortly.");
        (e.target as HTMLFormElement).reset();
        
        setTimeout(() => {
            setSubmissionStatus('idle');
            setResultMessage('');
        }, 5000);
      } else {
        setSubmissionStatus('error');
        setResultMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus('error');
      setResultMessage("Failed to send reservation. Please check your connection.");
    }
  };

  return (
    <section id="reservation" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#C5A059"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,89.3,-2.4C88.5,13.1,84.1,28.5,75.2,40.8C66.3,53.1,52.8,62.3,38.8,69.5C24.8,76.7,10.2,81.9,-3.3,87.6C-16.8,93.3,-29.2,99.5,-40.3,95.3C-51.4,91.1,-61.2,76.5,-69.3,61.8C-77.4,47.1,-83.8,32.3,-84.9,17.2C-86,2.1,-81.8,-13.3,-74.6,-27.1C-67.4,-40.9,-57.2,-53.1,-45.3,-61.4C-33.4,-69.7,-19.8,-74.1,-5.5,-74.6C8.8,-75.1,17.6,-71.7,30.5,-83.6L44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-brand-charcoal p-6 md:p-12 border border-white/5 shadow-2xl">
            <div className="text-center mb-8 md:mb-10">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Reserve Your Spot</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-brand-cream mt-2">Book a Table</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full bg-brand-dark border-b border-gray-700 text-white py-3 px-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold">
                    Time
                  </label>
                  <select 
                    name="time"
                    className="w-full bg-brand-dark border-b border-gray-700 text-white py-3 px-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none"
                  >
                    <option value="Lunch (1:00 PM)">Lunch (1:00 PM)</option>
                    <option value="Dinner (8:00 PM)">Dinner (8:00 PM)</option>
                    <option value="Dinner (9:30 PM)">Dinner (9:30 PM)</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold">
                    Guests
                  </label>
                  <select 
                    name="guests"
                    className="w-full bg-brand-dark border-b border-gray-700 text-white py-3 px-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none"
                  >
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6+ Guests">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="pt-8 text-center">
                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full md:w-auto bg-brand-gold text-brand-dark px-12 py-4 uppercase tracking-widest font-bold text-xs hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {submissionStatus === 'submitting' ? 'Confirming...' : 'Confirm Booking'}
                </button>
              </div>
              
              {resultMessage && (
                <div className={`text-center text-sm mt-4 p-3 rounded ${submissionStatus === 'success' ? 'text-green-400 bg-green-900/20 border border-green-900' : 'text-red-400 bg-red-900/20 border border-red-900'}`}>
                  {resultMessage}
                </div>
              )}

              <p className="text-center text-xs text-gray-500 mt-4">*For large groups (8+), please call us directly.</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
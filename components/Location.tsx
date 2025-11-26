import React from 'react';
import { Reveal } from './Reveal';

export const Location: React.FC = () => {
  return (
    <section id="visit" className="bg-brand-charcoal border-y border-white/5">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Hours & Info */}
        <div className="w-full lg:w-5/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-brand-dark order-2 lg:order-1">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <i className="fa-regular fa-clock text-3xl md:text-4xl text-brand-gold"></i>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-cream">Opening Hours</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-800 pb-2 items-baseline">
                <span className="text-gray-400 uppercase tracking-widest text-xs">Mon - Thu</span>
                <span className="text-white font-serif italic text-base md:text-lg">12:30 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 items-baseline">
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Fri - Sun</span>
                <span className="text-brand-gold font-serif italic text-base md:text-lg">12:30 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 items-baseline">
                <span className="text-gray-400 uppercase tracking-widest text-xs">Happy Hour</span>
                <span className="text-white font-serif italic text-base md:text-lg">4:00 PM - 7:00 PM</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-brand-gold uppercase tracking-widest text-xs mb-2">Address</h3>
              <p className="text-gray-300 font-serif text-lg md:text-xl leading-relaxed">18/2, Park Street, Kolkata - 700071</p>
              <p className="text-gray-500 text-sm mt-1">Opposite The Park Hotel</p>
            </div>
            
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-xs uppercase tracking-widest text-white border-b border-white pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors lg:hidden">
              Get Directions
            </a>
          </Reveal>
        </div>

        {/* Right: Map */}
        <div className="w-full lg:w-7/12 map-container bg-gray-900 h-64 md:h-96 lg:h-auto relative group order-1 lg:order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.288768297755!2d88.35026647596076!3d22.55397413313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277107f905d11%3A0x675c942971295325!2sPark%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714574825916!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full filter grayscale invert-[.92] contrast-[.83] transition-all duration-500 lg:group-hover:filter-none"
            title="Map Location"
          ></iframe>
          <div className="absolute top-4 right-4 bg-brand-dark px-4 py-2 text-xs text-white uppercase tracking-widest border border-brand-gold/50 pointer-events-none z-10">
            Locate Us
          </div>
        </div>
      </div>
    </section>
  );
};
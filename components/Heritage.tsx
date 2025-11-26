import React from 'react';
import { Reveal } from './Reveal';

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-16 md:py-24 bg-brand-charcoal relative border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <Reveal>
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold block mb-2">Since 2025</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-brand-cream leading-tight">
                A Love Letter to <br />
                <span className="text-brand-gold italic">Old Kolkata</span>
              </h2>
              <p className="text-gray-400 font-light leading-7 mb-8 text-sm md:text-base text-justify">
                Nestled in the heritage corridors of the city, Calcutta 2025 brings back the charm of the colonial era
                blended with the fiery spirit of Bengali cuisine. From the mustard fields of Bengal to the Nawabi
                kitchens of Lucknow, our menu is a curated journey.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-gold"></div>
                <p className="font-serif italic text-lg md:text-xl text-white">"Rannaghar"</p>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <Reveal delay={200}>
              <div className="relative overflow-hidden border border-white/10 p-2 group">
                <img
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-64 md:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  alt="Heritage Kitchen"
                />
                <div className="absolute bottom-6 right-6 bg-brand-gold text-brand-dark px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg">
                  Chef Anjan's Kitchen
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
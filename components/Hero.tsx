
import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1572573673391-7f938c4c3295?q=80&w=1920&auto=format&fit=crop")'}}
        />
        {/* Dark Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto pt-16 md:pt-0">
        <Reveal>
          <p className="text-brand-gold uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm mb-4 font-bold">
            The Soul of Bengal
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-none">
            Royal <br /> <span className="italic font-light text-brand-gold">Calcutta</span>
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto mb-10 font-sans font-light leading-relaxed text-sm md:text-base px-4">
            Experience the nostalgia of Park Street and the royalty of Zamindar cuisines. A symphony of spices in the heart of the City of Joy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#menu"
              onClick={(e) => handleScroll(e, 'menu')}
              className="border border-white text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto inline-block cursor-pointer"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              onClick={(e) => handleScroll(e, 'reservation')}
              className="bg-brand-gold border border-brand-gold text-brand-dark px-8 py-3 uppercase tracking-widest text-xs hover:bg-transparent hover:text-brand-gold transition-all duration-300 w-full sm:w-auto font-bold inline-block cursor-pointer"
            >
              Book Table
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

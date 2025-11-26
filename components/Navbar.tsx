
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger earlier for smoother feel
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header if needed, but since header is often transparent or changes size, 
      // standard scrollIntoView is usually fine. 
      // For improved UX with fixed headers, we can use scrollIntoView and CSS scroll-margin-top on sections.
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-[60] transition-all duration-300 px-6 lg:px-12 flex justify-between items-center border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-dark/95 backdrop-blur-md border-brand-gold/20 py-4 shadow-lg'
            : 'bg-transparent border-white/5 py-6'
        }`}
      >
        {/* Logo */}
        <a 
            href="#home" 
            className="group flex flex-col items-start z-[60]" 
            onClick={(e) => handleScroll(e, 'home')}
        >
          <span className="text-xl md:text-2xl lg:text-3xl font-serif font-bold tracking-widest text-brand-gold uppercase leading-none">
            Calcutta
          </span>
          <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] text-white group-hover:text-brand-gold transition-colors mt-1">
            2025
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {['Home', 'Heritage', 'Menu', 'Location'].map((item) => {
            const targetId = item.toLowerCase() === 'location' ? 'visit' : item.toLowerCase();
            return (
                <a
                key={item}
                href={`#${targetId}`}
                onClick={(e) => handleScroll(e, targetId)}
                className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 relative group cursor-pointer"
                >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
            );
          })}
          <a
            href="#reservation"
            onClick={(e) => handleScroll(e, 'reservation')}
            className="border border-brand-gold text-brand-gold px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 cursor-pointer"
          >
            Reserve Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-brand-gold text-2xl focus:outline-none z-[60] p-2"
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid transition-all duration-300 ${isMobileMenuOpen ? "fa-xmark rotate-90" : "fa-bars-staggered"}`}></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {['Home', 'Heritage', 'Menu', 'Location'].map((item) => {
            const targetId = item.toLowerCase() === 'location' ? 'visit' : item.toLowerCase();
            return (
                <a
                    key={item}
                    href={`#${targetId}`}
                    onClick={(e) => handleScroll(e, targetId)}
                    className="text-3xl font-serif text-white hover:text-brand-gold transition-colors transform hover:scale-105 duration-300 cursor-pointer"
                >
                    {item}
                </a>
            );
        })}
        <a
          href="#reservation"
          onClick={(e) => handleScroll(e, 'reservation')}
          className="text-xl font-serif text-brand-dark bg-brand-gold px-10 py-3 mt-4 hover:bg-white transition-colors cursor-pointer"
        >
          Book Table
        </a>
      </div>
    </>
  );
};

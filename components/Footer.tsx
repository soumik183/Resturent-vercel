
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:w-1/3">
            <a href="#" className="text-2xl font-serif font-bold tracking-widest uppercase block mb-4">
              Calcutta<span className="text-brand-gold">2025</span>
            </a>
            <p className="text-gray-500 text-xs leading-6 max-w-xs mx-auto md:mx-0">
              Celebrating the culinary heritage of Bengal with a touch of modern elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 flex flex-col gap-3 text-xs uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brand-gold transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              Press & Media
            </a>
          </div>

          {/* Socials */}
          <div className="md:w-1/3 flex justify-center md:justify-end gap-6">
            <a
              href="#"
              className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-full hover:border-brand-gold hover:text-brand-gold transition-all"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-full hover:border-brand-gold hover:text-brand-gold transition-all"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] uppercase tracking-widest gap-4 md:gap-0">
          <p>&copy; 2024 Calcutta 2025. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-brand-gold/70 font-semibold">Created by Soumik</p>
            <p>
              Made with <i className="fa-solid fa-heart text-red-800 mx-1"></i> in Kolkata
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

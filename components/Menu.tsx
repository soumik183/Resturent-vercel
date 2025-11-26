import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { MENU_CATEGORIES } from '../data';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Signatures");
  const categories = Object.keys(MENU_CATEGORIES);

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-cream">The Grand Menu</h2>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-6"></div>
          </Reveal>
        </div>

        {/* Categories Tabs */}
        <div className="mb-12">
          <Reveal delay={100}>
            <div className="flex justify-start md:justify-center overflow-x-auto pb-4 md:pb-0 gap-6 md:gap-8 text-sm uppercase tracking-widest text-gray-500 whitespace-nowrap scrollbar-hide px-2 md:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-1 transition-colors duration-300 focus:outline-none ${
                    activeCategory === category
                      ? 'text-brand-gold border-b border-brand-gold'
                      : 'hover:text-white border-b border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Menu Grid - Key forces re-render for animation on tab switch */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MENU_CATEGORIES[activeCategory].map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="menu-card group bg-brand-charcoal p-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer h-full border border-transparent hover:border-white/5 flex flex-col">
                <div className="overflow-hidden h-56 md:h-64 mb-6 relative w-full">
                  <img
                    src={item.image}
                    className="menu-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.name}
                  />
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-brand-gold text-black text-[10px] font-bold px-2 py-1 uppercase shadow-md">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-serif text-brand-cream group-hover:text-brand-gold transition-colors pr-4">
                    {item.name}
                  </h3>
                  <span className="text-brand-gold font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mt-auto">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Reveal>
            <button className="px-8 py-3 border border-brand-gold text-brand-gold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-black transition-all duration-300 w-full md:w-auto">
              Download Full Menu PDF
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

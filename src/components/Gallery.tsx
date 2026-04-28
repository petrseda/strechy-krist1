import React from 'react';

const placeholders = [
  'https://images.unsplash.com/photo-1605282717013-145789f6fcaf?q=80&w=800&auto=format&fit=crop', // Roof detail
  'https://images.unsplash.com/photo-1541888086925-920f0fd5b62d?q=80&w=800&auto=format&fit=crop', // House wide
  'https://images.unsplash.com/photo-1628178122607-1bcf3e2840d8?q=80&w=800&auto=format&fit=crop', // Wood structure
  'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop', // Modern roof 
  'https://images.unsplash.com/photo-1590725140246-20addd8cb1c4?q=80&w=800&auto=format&fit=crop', // Renovation
  'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=800&auto=format&fit=crop', // Brick pattern
];

export const Gallery = () => {
  return (
    <section id="reference" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Reference</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ukázky naší práce
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Prohlédněte si výběr z našich nedávných realizací šikmých, plochých střech a tesařských prací. 
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[4/3] bg-gray-800">
              <img 
                src={src} 
                alt={`Reference realizace ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">Zobrazit realizaci</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

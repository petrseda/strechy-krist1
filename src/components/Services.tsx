import React from 'react';
import { Home, LayoutGrid, Hammer, Wrench, Wind } from 'lucide-react';

const services = [
  {
    title: 'Šikmé střechy',
    description: 'Kompletní realizace a rekonstrukce šikmých střech z pálených střech tašek i betonových krytin s důrazem na detail.',
    icon: Home,
  },
  {
    title: 'Ploché střechy',
    description: 'Moderní hydroizolace plochých střech z PVC, TPO fólií a asfaltových pásů s garantovanou těsností.',
    icon: LayoutGrid,
  },
  {
    title: 'Tesařství',
    description: 'Precizní výroba a montáž klasických krovů i vazníkových konstrukcí na míru vašim požadavkům.',
    icon: Hammer,
  },
  {
    title: 'Klempířství',
    description: 'Instalace okapových systémů, oplechování komínů a výroba atypických prvků z kvalitních plechů.',
    icon: Wrench,
  },
  {
    title: 'Izolace',
    description: 'Nadkrokevní a mezikrokevní izolace pro maximální energetickou úsporu a tepelný komfort.',
    icon: Wind,
  },
];

export const Services = () => {
  return (
    <section id="sluzby" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Naše Služby</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark">
              Komplexní řešení pro vaši střechu
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 max-w-sm text-right leading-relaxed">
              O vaši střechu se postaráme kompletně. Od prvotního návrhu až po finální detaily.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 group border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red transition-colors duration-300">
                <service.icon size={28} className="text-brand-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-brand-dark">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          {/* Vizuální prvek pro zaplnění gridu */}
          <div className="bg-brand-dark p-8 flex flex-col justify-center items-center text-center text-white min-h-[250px]">
             <h4 className="text-2xl font-bold mb-4">Potřebujete poradit?</h4>
             <a href="#kontakt" className="inline-block px-6 py-3 border border-white/30 hover:bg-white hover:text-brand-dark transition-colors">
               Kontaktujte nás
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

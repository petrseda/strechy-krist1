import React from 'react';
import { Award, ShieldCheck, Clock } from 'lucide-react';

export const About = () => {
  return (
    <section id="o-nas" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <img 
              src="/images/pokryvaci.jpg" 
              alt="Pokrývači při pokládce krytiny na střeše" 
              className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 shadow-2xl hidden md:block">
              <span className="block text-5xl font-extrabold mb-1">30+</span>
              <span className="text-sm uppercase tracking-wider font-semibold opacity-90">Let tradice</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">O Nás</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-6">
              Stavění střech máme v rodině
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Firma Střechy KRIST působí na trhu nepřetržitě od roku 1994. Z malé rodinné firmy jsme se vypracovali na spolehlivého partnera pro stovky spokojených zákazníků v jihomoravském regionu.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Garantujeme nejvyšší kvalitu materiálů a řemeslného zpracování. Sledujeme moderní trendy, ale ctíme tradiční postupy, které prežijí generace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-50 text-brand-red rounded-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Certifikace</h4>
                  <p className="text-sm text-gray-500">Jsme certifikovanými montéry předních výrobců střešních krytin.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-50 text-brand-red rounded-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Dodržování termínů</h4>
                  <p className="text-sm text-gray-500">Kvalita a profesionalita pro nás znamená i plnění dohodnutých časů.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

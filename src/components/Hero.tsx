import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[72vh] min-h-[500px] flex items-center justify-center overflow-hidden clip-diagonal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1634149692429-c0ae9896e001?q=80&w=2500&auto=format&fit=crop" 
          alt="Modern roof construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-gray/90"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/20 border border-brand-red/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-brand-red font-medium text-sm tracking-wide uppercase">Rodinná firma od roku 1994</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Pevný základ pro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
              váš bezpečný domov
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-10 leading-relaxed">
            Realizujeme šikmé a ploché střechy s důrazem na špičkovou kvalitu a detail. Tesařské a klempířské práce od certifikovaných mistrů ve svém oboru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-medium text-lg transition-all hover:bg-brand-red-dark group">
              Nezávazná poptávka
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#sluzby" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium text-lg transition-all hover:bg-white hover:text-brand-dark">
              Prozkoumat služby
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

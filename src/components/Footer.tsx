import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <span className="text-2xl font-bold tracking-tight text-white mb-6 inline-block">
              STŘECHY <span className="text-brand-red">KRIST</span>
            </span>
            <p className="text-gray-400 leading-relaxed pr-8">
              Kvalitní střechy od roku 1994. Vaše jistota pevného a bezpečného domova díky poctivému řemeslu a dlouholeté praxi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Rychlé Odkazy</h4>
            <ul className="space-y-3">
              <li><a href="#sluzby" className="text-gray-400 hover:text-brand-red transition-colors">Služby</a></li>
              <li><a href="#o-nas" className="text-gray-400 hover:text-brand-red transition-colors">O nás</a></li>
              <li><a href="#reference" className="text-gray-400 hover:text-brand-red transition-colors">Reference</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-brand-red transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Právní Informace</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>IČ: 12345678</li>
              <li>DIČ: CZ12345678</li>
              <li>Společnost je zapsána v živnostenském rejstříku.</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Střechy KRIST. Všechna práva vyhrazena.</p>
          <p>Návrh připravil Petr ŠEĎA.</p>
        </div>
      </div>
    </footer>
  );
};

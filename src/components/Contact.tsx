import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Kontakt</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            Ozvěte se nám
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold text-brand-dark mb-6">Nezávazná poptávka</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Jméno a příjmení</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                  placeholder="jan@novak.cz"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Poptávka / Zpráva</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
                  placeholder="Popište nám, co potřebujete..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-red text-white py-4 font-bold tracking-wide uppercase hover:bg-brand-red-dark transition-colors"
              >
                Odeslat poptávku
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <MapPin size={24} className="text-brand-red" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">Sídlo firmy</h5>
                  <p className="text-gray-600">Milotice 123<br />696 05 Milotice<br />Česká republika</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Phone size={24} className="text-brand-red" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">Telefon</h5>
                  <p className="text-gray-600">
                    <a href="tel:+420123456789" className="hover:text-brand-red transition-colors">+420 123 456 789</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Mail size={24} className="text-brand-red" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">E-mail</h5>
                  <p className="text-gray-600">
                    <a href="mailto:info@strechy-krist.cz" className="hover:text-brand-red transition-colors">info@strechy-krist.cz</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed - Centered generally around Milotice/Hodonín area */}
            <div className="bg-gray-200 w-full h-[300px] border border-gray-100 placeholder-map flex-shrink-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83506.74542261622!2d17.0673322194646!3d48.95679586196395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713222dc6f92ccf%3A0x400af0f6615bfa0!2sMilotice!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa působnosti Střechy KRIST"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

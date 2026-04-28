import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Logo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
    {/* Minimalist roof and house structure */}
    <path d="M4 22L24 6L44 22" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
    <path d="M12 28V38" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
    <path d="M36 28V38" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
    <path d="M12 38H36" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
    {/* Chimney */}
    <path d="M32 9V14" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Služby', href: '#sluzby' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Reference', href: '#reference' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-brand-dark/90 backdrop-blur-sm py-4 pb-4 md:bg-transparent md:backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <Logo />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                  STŘECHY <span className="text-brand-red">KRIST</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm tracking-wide uppercase transition-colors hover:text-brand-red ${
                    isScrolled ? 'text-brand-dark' : 'text-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className={`flex flex-col items-end text-sm font-medium ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              <a href="tel:+420123456789" className="flex items-center gap-2 hover:text-brand-red transition-colors">
                <Phone size={16} className="text-brand-red" />
                +420 123 456 789
              </a>
              <a href="mailto:info@strechy-krist.cz" className="flex items-center gap-2 text-xs opacity-80 hover:text-brand-red transition-colors">
                <Mail size={12} className="text-brand-red" />
                info@strechy-krist.cz
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-brand-dark hover:text-brand-red' : 'text-white hover:text-brand-red'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-gray absolute w-full left-0 origin-top animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-white hover:bg-brand-gray hover:text-brand-red transition-colors border-b border-brand-gray/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-6 flex flex-col gap-3 text-white">
              <a href="tel:+420123456789" className="flexItems-center gap-3">
                <Phone size={20} className="text-brand-red" />
                <span className="text-lg">+420 123 456 789</span>
              </a>
              <a href="mailto:info@strechy-krist.cz" className="flexItems-center gap-3">
                <Mail size={20} className="text-brand-red" />
                <span className="text-lg">info@strechy-krist.cz</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

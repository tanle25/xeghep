import React, { useState, useEffect } from 'react';
import { PhoneIcon, CarIcon } from './Icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <CarIcon className="w-6 h-6" />
          </div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight ${
            isScrolled ? 'text-blue-900' : 'text-white shadow-black drop-shadow-md'
          }`}>
            XE GHÉP <span className="text-orange-500">VIP</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Về Chúng Tôi', 'Bảng Giá', 'Lộ Trình', 'Liên Hệ'].map((item, idx) => {
            const ids = ['about', 'pricing', 'features', 'contact'];
            return (
              <button 
                key={item}
                onClick={() => scrollToSection(ids[idx])}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:0988888888" 
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden sm:inline">098.888.8888</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className={`w-8 h-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 flex flex-col animate-fade-in">
           {['Về Chúng Tôi', 'Bảng Giá', 'Lộ Trình', 'Liên Hệ'].map((item, idx) => {
            const ids = ['about', 'pricing', 'features', 'contact'];
            return (
              <button 
                key={item}
                onClick={() => scrollToSection(ids[idx])}
                className="py-3 px-6 text-left text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 border-b border-gray-50 last:border-none"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 backdrop-blur-lg border-b border-orange-200 fixed w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Side - Logo with Image */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur-md opacity-70 animate-gradient-x"></div>
                <div className="relative w-12 h-12 rounded-xl bg-white p-1 animate-float">
                  <img 
                    src={logo} 
                    alt="Dharmadhwajam Logo"
                    className="w-full h-full object-contain animate-gentle-scale"
                  />
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-xl animate-ping-slow opacity-30"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-500 rounded-full animate-ping delay-1000"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent animate-gradient-x">
                ధర్మధ్వజం
              </span>
            </div>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-amber-800 hover:text-amber-900 font-semibold transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full rounded-full animate-gradient-x"></span>
              </button>
            ))}
          </div>

          {/* Right Side - Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 animate-gradient-x"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-xl text-amber-700 hover:text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-amber-200 mt-2">
            <div className="px-2 pt-4 pb-4 space-y-3 bg-white/80 backdrop-blur-lg rounded-xl mt-2 border border-amber-200">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-amber-800 hover:text-amber-900 block px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 hover:bg-amber-100 w-full text-left relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full rounded-full animate-gradient-x"></span>
                </button>
              ))}
              <div className="pt-3">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex justify-center items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 animate-gradient-x"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-2px) rotate(1deg); }
          66% { transform: translateY(1px) rotate(-0.5deg); }
        }
        @keyframes gentle-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-gentle-scale { animation: gentle-scale 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-gradient-x { 
          animation: gradient-x 3s ease infinite; 
          background-size: 200% 200%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
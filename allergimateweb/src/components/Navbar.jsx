import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="shadow-lg fixed w-full top-0 z-50" style={{backgroundColor: '#2196F3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center p-1 bg-white" >
              <img src={logo} alt="AllergiMate Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white">AllergiMate</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                onClick={() => setActiveLink('home')}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${activeLink === 'home' ? 'border-b-2 border-white' : ''}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setActiveLink('about')}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${activeLink === 'about' ? 'border-b-2 border-white' : ''}`}
              >
                About
              </a>
              <a 
                href="#product" 
                onClick={() => setActiveLink('product')}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${activeLink === 'product' ? 'border-b-2 border-white' : ''}`}
              >
                Product
              </a>
              <a 
                href="#team" 
                onClick={() => setActiveLink('team')}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${activeLink === 'team' ? 'border-b-2 border-white' : ''}`}
              >
                Team
              </a>
              <a 
                href="#contact" 
                onClick={() => setActiveLink('contact')}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${activeLink === 'contact' ? 'border-b-2 border-white' : ''}`}
              >
                Contact
              </a>
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none transition duration-200 p-2 rounded"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white border-opacity-20" style={{backgroundColor: '#2196F3'}}>
              <a 
                href="#home" 
                onClick={() => setActiveLink('home')}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'home' ? 'border-l-4 border-white' : ''}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setActiveLink('about')}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'about' ? 'border-l-4 border-white' : ''}`}
              >
                About
              </a>
              <a 
                href="#product" 
                onClick={() => setActiveLink('product')}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'product' ? 'border-l-4 border-white' : ''}`}
              >
                Product
              </a>
              <a 
                href="#contact" 
                onClick={() => setActiveLink('contact')}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'contact' ? 'border-l-4 border-white' : ''}`}
              >
                Contact
              </a>
              <a 
                href="#team" 
                onClick={() => setActiveLink('team')}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'team' ? 'border-l-4 border-white' : ''}`}
              >
                Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
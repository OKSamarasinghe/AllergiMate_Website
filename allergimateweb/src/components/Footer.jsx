import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="text-white" style={{backgroundColor: '#2196F3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Company Info - Always First on Mobile */}
          <div className="text-left md:text-left lg:text-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={logo} alt="AllergiMate Logo" className="w-15 h-15 object-contain mt-2" />
              </div>
              <h2 className="text-2xl font-bold text-white">AllergiMate</h2>
            </div>
            <div className="mb-6">
              <p className="text-white font-semibold text-lg mb-2">
                AllergiMate — Making allergy-safe living effortless.
              </p>
              <p className="text-white text-sm leading-relaxed">
                AllergiMate is your trusted companion for managing allergies safely and effectively. 
                We help you live confidently with advanced allergy tracking and prevention technology.
              </p>
            </div>
          </div>

          {/* Quick Links - Second on Mobile, Center on Desktop */}
          <div className="text-left md:text-center lg:text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-gray-200 transition duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-200 transition duration-200 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-white hover:text-gray-200 transition duration-200 text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white hover:text-gray-200 transition duration-200 text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-200 transition duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us - Third on Mobile, Right on Desktop */}
          <div className="text-left md:text-left lg:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="space-y-3 flex flex-col md:items-start lg:items-end">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/allergimate/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-200 md:justify-start lg:justify-end">
                <span className="text-sm order-1">LinkedIn</span>
                <svg className="w-5 h-5 order-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-200 md:justify-start lg:justify-end">
                <span className="text-sm order-1">X</span>
                <svg className="w-5 h-5 order-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-200 md:justify-start lg:justify-end">
                <span className="text-sm order-1">Instagram</span>
                <svg className="w-5 h-5 order-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.534l.002.001-.283-.342c-.315-.38-.506-.869-.506-1.401 0-.532.191-1.021.506-1.401l.283-.342c.757-.938 1.908-1.534 3.205-1.534s2.448.596 3.205 1.534l.283.342c.315.38.506.869.506 1.401 0 .532-.191 1.021-.506 1.401l-.283.342c-.757.938-1.908 1.534-3.207 1.534zm7.101 0c-1.297 0-2.448-.596-3.205-1.534l-.283-.342c-.315-.38-.506-.869-.506-1.401 0-.532.191-1.021.506-1.401l.283-.342c-.757-.938 1.908-1.534 3.205-1.534s2.448.596 3.205 1.534l.283.342c.315.38.506.869.506 1.401 0 .532-.191 1.021-.506 1.401l-.283.342c-.757.938-1.908 1.534-3.205 1.534z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/share/1A85SjSbTQ/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-200 md:justify-start lg:justify-end">
                <span className="text-sm order-1">Facebook</span>
                <svg className="w-5 h-5 order-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-200 md:justify-start lg:justify-end">
                <span className="text-sm order-1">TikTok</span>
                <svg className="w-5 h-5 order-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            © 2025 AllergiMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-bold text-earth-dark hover:text-terracotta transition-all duration-300 transform hover:scale-105">
            Jaydeep<span className="text-terracotta">Art</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-lg font-medium text-earth-medium hover:text-terracotta transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-lg font-medium text-earth-medium hover:text-terracotta transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="text-lg font-medium text-earth-medium hover:text-terracotta transition-all duration-300 relative group">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-lg font-medium text-earth-medium hover:text-terracotta transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-earth-dark focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-[slideUp_0.3s_ease-out]">
            <Link
              to="/"
              className="block py-3 text-lg font-medium text-earth-medium hover:text-terracotta hover:bg-earth-sand px-4 rounded transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 text-lg font-medium text-earth-medium hover:text-terracotta hover:bg-earth-sand px-4 rounded transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="block py-3 text-lg font-medium text-earth-medium hover:text-terracotta hover:bg-earth-sand px-4 rounded transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-lg font-medium text-earth-medium hover:text-terracotta hover:bg-earth-sand px-4 rounded transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
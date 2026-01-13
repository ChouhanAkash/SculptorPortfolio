import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-2xl font-bold mb-4">
              Jaydeep<span className="text-terracotta">Art</span>
            </h3>
            <p className="text-earth-clay leading-relaxed">
              Traditional murtikar from Thakurganj, Bihar. Handcrafting divine idols for over 30 years using only natural materials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-earth-clay hover:text-terracotta transition-all duration-300 inline-block hover:translate-x-2">
                  → Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-earth-clay hover:text-terracotta transition-all duration-300 inline-block hover:translate-x-2">
                  → About
                </a>
              </li>
              <li>
                <a href="/products" className="text-earth-clay hover:text-terracotta transition-all duration-300 inline-block hover:translate-x-2">
                  → Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-earth-clay hover:text-terracotta transition-all duration-300 inline-block hover:translate-x-2">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <p className="text-earth-clay hover:text-white transition-colors duration-300">
                <span className="font-semibold">Location:</span> Bhat Thala Chowk, Thakurganj, Bihar
              </p>
              <p className="text-earth-clay hover:text-white transition-colors duration-300">
                <span className="font-semibold">Phone:</span> +91 91999 33692
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-light mt-8 pt-8 text-center">
          <p className="text-earth-clay hover:text-white transition-colors duration-300">
            &copy; {currentYear} JaydeepArt. All rights reserved. Traditional murtikar from Thakurganj, Bihar.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

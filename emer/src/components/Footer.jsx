import React from 'react';
import { businessInfo } from '../mockData';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-amber-100 mb-4 leading-relaxed">
              Crafting custom wooden furniture with passion and precision. Every piece tells a story.
            </p>
            <div className="inline-block bg-amber-800 text-amber-100 px-3 py-1 rounded-full text-sm">
              Order Based Manufacturing Only
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-amber-100">
              <li>Wooden Gates</li>
              <li>Designer Doors</li>
              <li>Wooden Windows</li>
              <li>Beds & Bedroom Sets</li>
              <li>Sofas & Couches</li>
              <li>Dining Tables</li>
              <li>Cabinets & Wardrobes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`tel:${businessInfo.phone}`} className="text-amber-100 hover:text-white">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${businessInfo.email}`} className="text-amber-100 hover:text-white break-all">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <p className="text-amber-100">
                  {businessInfo.address}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-100 text-sm text-center md:text-left">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-amber-100 text-sm text-center md:text-right">
              Crafted with passion for quality wooden furniture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

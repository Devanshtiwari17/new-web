import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { heroContent, businessInfo } from '../mockData';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in custom furniture from Prabhu Furnitures");
    window.open(`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent.image}
          alt="Custom wooden furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-900/90 text-amber-100 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold">🛠️ Order Based Manufacturing Only</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-900 hover:bg-amber-800 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Request a Custom Design
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-6 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold text-amber-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-gray-300">Custom Made</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

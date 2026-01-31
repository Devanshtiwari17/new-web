import React from 'react';
import { aboutContent } from '../mockData';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutContent.image}
                alt="Craftsman working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-900 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutContent.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutContent.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {aboutContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-900 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-amber-900">
              <p className="text-gray-800 font-medium">
                "Every piece we create tells a story of dedication, precision, and the timeless beauty of natural wood."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

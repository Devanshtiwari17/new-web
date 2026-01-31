import React from 'react';
import { howItWorksSteps } from '../mockData';
import { MessageSquare, Pencil, FileText, Hammer, Truck } from 'lucide-react';

const iconComponents = {
  MessageSquare,
  Pencil,
  FileText,
  Hammer,
  Truck
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to installation, we guide you through every step of creating your perfect custom furniture.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-amber-200" style={{ width: '80%', marginLeft: '10%' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = iconComponents[step.icon];
              return (
                <div key={step.step} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-6 w-12 h-12 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="mt-6 mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-amber-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Ready to start your custom furniture journey?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-900 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

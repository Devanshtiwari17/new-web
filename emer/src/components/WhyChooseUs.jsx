import React from 'react';
import { whyChooseUs } from '../mockData';
import { Ruler, Trees, Award, Shield, Sparkles, Headphones } from 'lucide-react';

const iconComponents = {
  Ruler,
  Trees,
  Award,
  Shield,
  Sparkles,
  Headphones
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Prabhu Furnitures Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When you choose us, you're choosing quality, craftsmanship, and a commitment to bringing your vision to life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-900"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 bg-amber-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Trusted by Hundreds of Happy Customers
          </h3>
          <p className="text-amber-100 text-lg mb-8 max-w-3xl mx-auto">
            Join our family of satisfied clients who have transformed their spaces with our custom wooden furniture. Quality you can trust, craftsmanship you can see.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-amber-400">15+</div>
              <div className="text-amber-100 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400">500+</div>
              <div className="text-amber-100 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400">100%</div>
              <div className="text-amber-100 mt-2">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400">50+</div>
              <div className="text-amber-100 mt-2">Wood Varieties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

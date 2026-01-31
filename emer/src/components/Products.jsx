import React from 'react';
import { Card, CardContent } from './ui/card';
import { products } from '../mockData';
import { Badge } from './ui/badge';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Wooden Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From grand entrance gates to cozy bedroom furniture, we craft every piece to match your exact specifications and style preferences.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-200 border-0">
                  {product.note}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't See What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We create any type of wooden furniture you can imagine. Share your ideas, and we'll bring them to life with our expert craftsmanship.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-900 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Discuss Your Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

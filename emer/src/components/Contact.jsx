import React, { useState } from 'react';
import { businessInfo } from '../mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock functionality)
    setTimeout(() => {
      // Store in localStorage for demo purposes
      const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      inquiries.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('inquiries', JSON.stringify(inquiries));

      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', email: '', requirement: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm ${formData.name || 'interested in custom furniture'}. ${formData.requirement || "I'd like to discuss a project."}`
    );
    window.open(
      `https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your ideas with us, and let's start crafting your perfect custom furniture piece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href={`tel:${businessInfo.phone}`} className="text-gray-600 hover:text-amber-900">
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${businessInfo.email}`} className="text-gray-600 hover:text-amber-900">
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{businessInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">{businessInfo.hours}</p>
                  <p className="text-gray-600">{businessInfo.closedDay}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900">Prefer WhatsApp?</h4>
                  <p className="text-sm text-gray-600">Chat with us instantly!</p>
                </div>
              </div>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Open WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="border-gray-300 focus:border-amber-900 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="border-gray-300 focus:border-amber-900 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-amber-900 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Requirement *
                  </label>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Tell us about the furniture you need - type, size, style, etc."
                    rows={5}
                    className="border-gray-300 focus:border-amber-900 focus:ring-amber-900"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white py-6 text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to be contacted by Prabhu Furnitures regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

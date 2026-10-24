import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Users, BadgeCheck, Star, ChevronDown } from 'lucide-react';

import testimonialsData from '../data/testimonials.json';
import SEO from '../components/SEO';

const testimonials = testimonialsData;

export const ClientTestimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="bg-white">
      <SEO title="Client Testimonials" description="Trust built over generations. See what our partners and families have to say about finding their place with Skyyroot." />
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-white">
        <div className="max-w-7xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-primary mb-4 tracking-tight"
          >
            Trust Built Over Generations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            Rooted In Trust. Rising To The Sky.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Building2, number: "50+", label: "Projects Delivered" },
            { icon: Users, number: "1.2k+", label: "Satisfied Clients" },
            { icon: BadgeCheck, number: "15+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center mb-6 text-white">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-neutral mb-4">What Our Partners Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from the families and businesses who found their place with Skyyroot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, visibleCount).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-neutral text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < testimonials.length && (
            <div className="text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="inline-flex bg-primary text-white items-center gap-2 p-4 rounded-xl hover:text-white hover:bg-neutral font-medium transition-colors cursor-pointer"
              >
                Load More Reviews
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative geometric lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full border-t border-white/20 transform -skew-y-6 origin-top-left"></div>
          <div className="absolute top-1/2 left-0 w-full h-full border-t border-white/20 transform skew-y-6 origin-bottom-right"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join the hundreds of satisfied families and businesses who have chosen Skyyroot for their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white border border-white/20 rounded-lg font-bold hover:bg-primary transition-colors backdrop-blur-sm"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Users } from 'lucide-react';
import { projects } from '../constants';
import SEO from '../components/SEO';

import { HeroSlider } from '../components/HeroSlider';
import { AboutVideoSection } from '../components/AboutVideoSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO title="Home" description="Skyroot Real Estate Ltd - Providing premium services for our real estate clients with excellence and care." />

      {/* Hero Section */}
      <HeroSlider />

      {/* About Video Section */}
      <AboutVideoSection />

      {/* Mission & Vision */}
      <section className="bg-neutral py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10 space-y-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-base-100/60 leading-relaxed">
              To deliver high-quality, structurally sound developments that enhance the lives of our residents. We strive to set new standards in urban construction by prioritizing safety, efficiency, and aesthetic elegance.
            </p>
          </div>
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10 space-y-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Users className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-base-100/60 leading-relaxed">
              To be the most trusted name in real estate through transparency and architectural innovation. We envision a future where urban living is synonymous with sustainability and community wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral/90 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            Ready to build your future?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            From concept to completion, Skyroot is your partner in creating spaces that inspire. Let's discuss your vision today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 min-w-50">
              Schedule a Meeting
            </Link>
            <Link to="/projects" className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-primary hover:border-none transition-all duration-300 min-w-50">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
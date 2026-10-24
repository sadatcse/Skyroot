import { motion } from 'motion/react';
import { Shield, Zap, Users, CheckCircle2, Clock, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Structural Integrity',
    desc: 'Uncompromising standards in materials and engineering ensuring every building is disaster-resilient.',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Design Innovation',
    desc: 'Blending modern aesthetics with functional urban planning to maximize space and natural light.',
    icon: Zap,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Full Transparency',
    desc: 'Open communication and ethical business practices throughout every stage of development.',
    icon: Users,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Sustainability',
    desc: 'Eco-friendly construction methods that minimize environmental impact and promote green living.',
    icon: CheckCircle2,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'On-Time Delivery',
    desc: 'Strict adherence to timelines and project milestones to ensure you move into your dream home as planned.',
    icon: Clock,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: '24/7 Support',
    desc: 'Dedicated customer care team to assist you even after project handover and possession.',
    icon: Headphones,
    color: 'bg-rose-50 text-rose-600',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">
                Why Choose Skyyroot?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Building Beyond <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Expectations
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We go beyond construction. We deliver peace of mind through a culture of excellence and a passion for structural perfection.
              </p>
              
              <Link 
                to="/projects" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30"
              >
                View Our Process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats or Trust Indicators could go here */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-gray-900">18+</h4>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900">50+</h4>
                <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

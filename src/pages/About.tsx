import { motion } from 'motion/react';
import { Shield, Zap, Users, Globe, Award, Target, Briefcase, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import mdPhoto from '../assets/Team/shahed-al-mamun.jpg';

export const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEO title="About Us" description="Learn about Skyyroot Real Estate Ltd. Building legacies and crafting dreams since 2008." />
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 bg-neutral text-white overflow-hidden">
        {/* Header background: drop the image at public/headers/about.jpg (falls back to solid colour) */}
        <img
          src="/headers/about.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral/75" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wide mb-6"
          >
            EST. 2008
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8"
          >
            Building Legacies, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              Crafting Dreams.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            At Skyyroot, we don't just construct buildings; we curate lifestyles.
            Rooted in trust and rising to the sky, we are redefining the urban landscape of Bangladesh.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2008, Skyyroot Real Estate Ltd began with a singular vision: to bring world-class architectural standards to the heart of Dhaka. What started as a boutique firm has grown into a premier developer known for structural integrity and aesthetic finesse.
              </p>
              <p>
                Over the past 18 years, we have successfully delivered over 50 landmark projects, each standing as a testament to our commitment to quality. From residential havens in Gulshan to commercial hubs in Banani, our footprint is etched in the city's skyline.
              </p>
              <p>
                We believe that a home is more than just walls; it's a sanctuary. That's why every Skyyroot project is designed with a human-centric approach, prioritizing light, air, and community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">18+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Skyyroot Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <p className="font-serif italic text-neutral text-lg">
                "We build with the precision of engineers and the passion of artists."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-bold tracking-widest uppercase text-sm">Leadership</span>
            <h2 className="text-4xl font-bold text-primary mt-3">Guided by Visionaries</h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-2/5 h-125 lg:h-auto relative">
              <img
                src={mdPhoto}
                alt="Ar. Shahed Al Mamun, Managing Director of Skyyroot Real Estate Ltd"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white lg:hidden">
                <h3 className="text-2xl font-bold">Ar. Shahed Al Mamun</h3>
                <p className="opacity-80">Managing Director</p>
              </div>
            </div>

            <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-center space-y-8">
              <div className="hidden lg:block">
                <h3 className="text-3xl font-bold text-neutral">Ar. Shahed Al Mamun</h3>
                <p className="text-primary font-medium text-lg">B.Arch (MIAB), Managing Director</p>
              </div>

              <blockquote className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-primary pl-6">
                "Architecture is not just about buildings; it's about the souls that inhabit them. At Skyyroot, our design philosophy revolves around the harmony between structural precision and human comfort. Every blueprint we sign is a promise of quality and a commitment to urban progress."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">IAB Member</h4>
                    <p className="text-xs text-gray-500">Institute of Architects Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">REHAB Member</h4>
                    <p className="text-xs text-gray-500">Real Estate & Housing Association</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The principles that guide every decision we make and every brick we lay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Integrity First',
              desc: 'We believe in transparent dealings. No hidden costs, no false promises. Just honest, ethical business.',
              icon: Shield
            },
            {
              title: 'Design Excellence',
              desc: 'We don’t just build; we create art. Our designs are modern, functional, and aesthetically pleasing.',
              icon: Target
            },
            {
              title: 'Sustainable Living',
              desc: 'We are committed to green building practices, ensuring a healthier environment for our residents.',
              icon: Globe
            },
            {
              title: 'Customer Centric',
              desc: 'Our relationship doesn’t end at handover. We provide dedicated after-sales support for peace of mind.',
              icon: Users
            },
            {
              title: 'Timely Delivery',
              desc: 'We respect your time. Our project management ensures that we deliver on our promised dates.',
              icon: CheckCircle
            },
            {
              title: 'Innovation',
              desc: 'We constantly adopt new technologies and materials to improve the quality and durability of our structures.',
              icon: Zap
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-neutral text-white rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral mb-3">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build your dream with us?</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your vision. Whether it's a new home or a commercial investment, we are here to guide you.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:/90 transition-all shadow-lg shadow-secondary/20">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
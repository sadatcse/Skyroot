import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const offices = [
  {
    name: 'Aftab Nagar Branch',
    address: 'Sector 1, Road 4, House 12, Aftab Nagar, Dhaka - 1212, Bangladesh',
    mapQuery: 'Aftab Nagar, Dhaka 1212, Bangladesh',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Mohammadpur Branch',
    address: 'Block C, Zakir Hossain Road, Mohammadpur, Dhaka - 1207, Bangladesh',
    mapQuery: 'Zakir Hossain Road, Block C, Mohammadpur, Dhaka 1207, Bangladesh',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=200&q=80',
  },
];

export const Contact = () => {
  const [activeOffice, setActiveOffice] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Sales Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    
    setError('');
    setSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Sales Inquiry',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Contact Us" description="Reach out to the dedicated Skyroot team for expert real estate guidance and inquiries." />
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Office"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-4 tracking-tighter">Get In Touch</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-medium">
            Let's build your future together. Reach out to our dedicated team for expert real estate guidance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-neutral mb-4">Send us a Message</h2>
              <p className="text-base-content/60">
                Have a specific project in mind or just want to say hello? Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl flex items-start gap-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Inquiry Submitted Successfully!</h4>
                  <p className="text-sm text-emerald-700 mt-1">Thank you for reaching out. A representative from the Skyroot team will contact you shortly.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-5 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Missing Fields</h4>
                  <p className="text-sm text-rose-700 mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option>Sales Inquiry</option>
                    <option>Investment Opportunity</option>
                    <option>General Support</option>
                    <option>Careers</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral uppercase tracking-widest">Message *</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your interest..."
                  className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-xl font-black text-lg hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/20 cursor-pointer">
                Submit Request <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 p-8 rounded-2xl space-y-4 border border-base-content/5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-neutral">Call Us</h3>
                <p className="text-base-content/60 text-sm">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+8801818100503" className="block text-primary font-bold hover:underline">+88 01818-100 503</a>
              </div>
              <div className="bg-base-100 p-8 rounded-2xl space-y-4 border border-base-content/5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-neutral">Email Us</h3>
                <p className="text-base-content/60 text-sm">Our team is here to help.</p>
                <a href="mailto:info@skyyroot.com" className="block text-primary font-bold hover:underline">info@skyyroot.com</a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-neutral">Our Offices</h3>

              {offices.map((office, i) => (
                <button
                  key={office.name}
                  type="button"
                  onClick={() => setActiveOffice(i)}
                  aria-pressed={activeOffice === i}
                  className={`group w-full text-left bg-white p-6 rounded-2xl border transition-all shadow-sm flex gap-6 ${
                    activeOffice === i ? 'border-primary ring-2 ring-primary/15' : 'border-base-content/5 hover:border-primary'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={office.image} alt="Office" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg transition-colors group-hover:text-primary ${activeOffice === i ? 'text-primary' : 'text-neutral'}`}>
                      {office.name}
                    </h4>
                    <p className="text-base-content/60 text-sm mt-1">{office.address}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-2">
                      <MapPin className="w-3.5 h-3.5" /> {activeOffice === i ? 'Shown on map below' : 'View on map'}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Google Map of the selected office */}
            <div className="relative h-[350px] rounded-3xl overflow-hidden border border-base-content/5 shadow-sm bg-gray-100">
              <iframe
                key={activeOffice}
                title={`Map of ${offices[activeOffice].name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(offices[activeOffice].mapQuery)}&z=16&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(offices[activeOffice].mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-3 rounded-full shadow-lg hover:bg-neutral transition-colors"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

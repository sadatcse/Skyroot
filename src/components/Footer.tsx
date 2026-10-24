import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Globe } from 'lucide-react';
import Logo from '../assets/skyyroot-logo-dark.svg';

const policyLinks = [
  { name: 'Terms of Use', path: '/termsOfUse' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Cookies Policy', path: '/cookies' },
  { name: 'Refund Policy', path: '/refund' },
];

export const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Skyyroot Real Estate Ltd" className="h-28 w-auto" />
            </div>
            <p className="text-base-100/60 text-sm leading-relaxed">
              A premier corporate real estate developer dedicated to structural excellence and urban innovation. Setting the benchmark for over 15 years.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SkyyrootRealEstate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skyyroot Real Estate Ltd on Facebook"
                className="p-2 bg-primary rounded-full hover:bg-white hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-primary  rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-primary  rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base-100/60 text-sm">
              <li><Link to="/projects" className="hover:text-white transition-colors">Completed Projects</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Upcoming Ventures</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Architectural Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Legal Documents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-base-100/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  <span className="block text-white font-semibold">Aftab Nagar Office</span>
                  House 20 (1st Floor), Block F, Road 01, Sector 01, Jahurul Islam City, Aftab Nagar, Badda, Dhaka 1212, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  <span className="block text-white font-semibold">Mohammadpur Office</span>
                  House 23/C (Ground Floor), Road 11, P.C Culture Housing, Mohammadpur, Dhaka 1207, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+8801818100503" className="hover:text-white transition-colors">+88 01818-100 503</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@skyyroot.com" className="hover:text-white transition-colors">info@skyyroot.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-base-100/60 text-sm mb-4">Subscribe to get the latest updates and offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary p-2 rounded-lg hover:bg-neutral transition-colors">
                <Globe className="w-5 h-5 " />
              </button>
            </div>
          </div>
        </div>



        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base-100/60 text-xs">
            {/* Added dynamic year here as a bonus! */}
            © {new Date().getFullYear()} Skyyroot Real Estate Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-base-100/60">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/termsOfUse" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link>
            <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
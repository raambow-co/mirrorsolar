import React from 'react';
import { Sun, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      svg: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-dark-bg text-slate-300 border-t border-white/10 relative">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2 group">
              <Sun className="h-8 w-8 text-primary animate-spin-slow" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  MIRROR<span className="text-primary">SOLAR</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-primary/80 -mt-1 leading-none">
                  Vision
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Powering Andhra Pradesh With Clean Energy. We provide modern, custom solar energy systems designed to reduce monthly utility costs by up to 90%.
            </p>
            {/* Social links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 bg-white/5 border border-white/10 hover:border-primary hover:text-primary text-slate-400 rounded-xl transition-all"
                    aria-label={social.name}
                  >
                    {social.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Services & AMC', href: '#services' },
                { name: 'Government Subsidy', href: '#subsidy' },
                { name: 'Recent Projects', href: '#projects' },
                { name: 'Customer FAQ', href: '#faq' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solar Services */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Solar Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>Residential Rooftop Solar</li>
              <li>Commercial Solar Systems</li>
              <li>Industrial Power Solar</li>
              <li>Agricultural Solar Pumpsets</li>
              <li>Hybrid Battery Systems</li>
              <li>Net Metering Support</li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Eluru Town, Andhra Pradesh, India - 534001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+919999999999" className="hover:text-primary transition-colors">+91 99999 99999</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@mirrorsolar.in" className="hover:text-primary transition-colors">info@mirrorsolar.in</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; 2026 Mirror Solar Vision. All rights reserved. | Powering Andhra Pradesh With Clean Energy</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 border border-white/10 text-slate-400 hover:text-white rounded-xl transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}

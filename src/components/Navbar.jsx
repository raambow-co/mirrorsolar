import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Subsidy Guide', href: '#subsidy' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-ambient bg-slate-950/70 border-b border-white/5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.5)]' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <img 
                src="/logo.png" 
                alt="Mirror Solar Vision Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-[14px] text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://wa.me/919999999999?text=Hi%20Mirror%20Solar%20Vision,%20I%20am%20interested%20in%20a%20free%20solar%20site%20survey."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm rounded-full transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4 fill-emerald-500/10" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-bold text-sm rounded-full shadow-lg shadow-cyan-500/10 transition-all duration-300"
              >
                Free Survey
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5 fill-emerald-500/10" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-300 hover:bg-white/5 rounded-full transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-950/95 border-b border-white/5 shadow-lg overflow-hidden backdrop-blur-md"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 grid grid-cols-2 gap-3 px-3">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 rounded-xl font-bold text-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-sm shadow-md"
                  >
                    Free Survey
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

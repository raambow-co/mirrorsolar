import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Subsidy from './components/Subsidy';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';

import Testimonials from './components/Testimonials';
import Impact from './components/Impact';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, Calendar, Phone } from 'lucide-react';

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled down past the hero section
      setShowStickyCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-slate-800 antialiased overflow-x-hidden">
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Indicator Stats Bar */}
      <TrustBar />

      {/* Services Grid Section */}
      <Services />

      {/* About Us Company Profile Section */}
      <About />

      {/* PM Surya Ghar Government Subsidy Details & Quick Estimator */}
      <Subsidy />

      {/* 10 Core Performance Features (Why Choose Us) */}
      <WhyChooseUs />

      {/* Project Portfolio Filter Gallery with Lightbox Modals */}
      <Projects />



      {/* Testimonials Review Slider & Video Previews */}
      <Testimonials />

      {/* Key Metric Counters (MW Installed, Customer Savings) */}
      <Impact />

      {/* 7-Step Methodological Timeline (How it works) */}
      <Process />

      {/* Accordion FAQ Panels */}
      <FAQ />

      {/* Lead Generation Form Panel */}
      <Contact />

      {/* Footer navigation, address maps, and socials */}
      <Footer />

      {/* Floating Action Button: WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Mirror%20Solar%20Vision,%20I%20am%20interested%20in%20a%20free%20site%20survey."
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-40 p-4 bg-success hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-350 hover:scale-105 ${
          showStickyCta ? 'bottom-20 sm:bottom-24 lg:bottom-6 right-6' : 'bottom-6 right-6'
        }`}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 fill-white stroke-[2]" />
      </a>

      {/* Sticky Bottom CTA for Mobile & Tablet Devices */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 py-3 px-4 shadow-2xl flex items-center justify-between lg:hidden transition-all duration-300">
          <div className="text-left">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary block leading-none">MIRROR SOLAR</span>
            <span className="text-xs font-extrabold text-deep-blue mt-0.5 block">Save Up To 90% On Bills</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="tel:+919999999999"
              className="p-3 bg-neutral-100 border border-neutral-350 text-deep-blue rounded-xl hover:bg-neutral-200 transition-colors"
              aria-label="Call Mirror Solar"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="px-5 py-3 bg-gradient-to-r from-primary to-accent hover:brightness-105 text-white text-xs font-extrabold rounded-xl shadow-md transition-all"
            >
              Book Free Survey
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

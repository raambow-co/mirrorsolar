import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Briefcase, Factory, Sprout, BatteryCharging, Zap, ShieldAlert, Wrench, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: "Residential Rooftop Solar",
    description: "Tailored solar installations for independent houses and apartments to drop residential energy bills to zero.",
    badge: "Most Popular",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Briefcase,
    title: "Commercial Solar Systems",
    description: "Solar setups for corporate offices, shops, hospitals, malls, and educational institutions to slash operating costs.",
    badge: "High ROI",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Factory,
    title: "Industrial Solar Solutions",
    description: "Large-scale solar arrays configured for factories, cold storages, and manufacturing plants with high base loads.",
    badge: "Max Savings",
    color: "from-slate-700 to-slate-900"
  },
  {
    icon: Sprout,
    title: "Agricultural Solar Systems",
    description: "MNRE-compliant solar water pumps, microgrid solutions, and solar setups to power farm tube wells and irrigation.",
    badge: "Govt Subsidized",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: BatteryCharging,
    title: "Hybrid Solar Systems",
    description: "On-grid solar energy generation combined with battery banks, giving you cost savings plus power backup during cuts.",
    badge: "Smart Grid",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "On-Grid Solar Systems",
    description: "Grid-connected systems optimized to yield maximum utility credits through APSPDCL net-metering policies.",
    badge: "Net Metering",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: ShieldAlert,
    title: "Off-Grid Solar Systems",
    description: "Independent solar configurations with batteries, suitable for remote farm houses and places with frequent blackouts.",
    badge: "100% Autonomy",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Wrench,
    title: "Solar Maintenance & AMC",
    description: "Annual Maintenance Contracts, panel cleaning services, health diagnostics, inverter checks, and repairs.",
    badge: "Full Support",
    color: "from-teal-500 to-emerald-600"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - visibleSlides;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="h-3.5 w-3.5" />
            <span>Our Offerings</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            Custom Solar Energy Solutions
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We plan, design, install, and service top-quality solar arrays tailored specifically for different applications across Andhra Pradesh.
          </p>
        </div>

        {/* Services Slideshow Wrapper */}
        <div 
          className="relative px-2 sm:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 bg-white/90 hover:bg-white text-deep-blue border border-neutral-200/80 shadow-md hover:shadow-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous service slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 bg-white/90 hover:bg-white text-deep-blue border border-neutral-200/80 shadow-md hover:shadow-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next service slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div 
                    key={i} 
                    style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                    className="px-3 md:px-4 flex-shrink-0 flex flex-col"
                  >
                    <div
                      className="group flex flex-col justify-between flex-1 p-6 sm:p-8 bg-white border border-neutral-200/80 rounded-2xl shadow-premium shadow-premium-hover relative overflow-hidden text-left cursor-pointer"
                    >
                      <div>
                        {/* Top Badge & Icon */}
                        <div className="flex justify-between items-start mb-5">
                          <div className={`p-3 bg-gradient-to-br ${svc.color} text-white rounded-xl shadow-lg shadow-neutral-200`}>
                            <Icon className="h-6 w-6 stroke-[1.8]" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-neutral-100 text-slate-500 rounded-full">
                            {svc.badge}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-display font-extrabold text-lg text-deep-blue mb-2.5 group-hover:text-primary transition-colors duration-200">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>

                      {/* Bottom CTA Arrow */}
                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-deep-blue group-hover:text-primary transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-6 bg-primary' 
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* General Service Survey CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Need a custom design that doesn't fit standard categories?{' '}
            <a href="#contact" className="text-primary hover:underline font-bold inline-flex items-center space-x-1">
              <span>Request custom solution</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

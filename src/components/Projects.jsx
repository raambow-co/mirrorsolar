import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ArrowRight, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Venkata Raman Villa",
    location: "Ashok Nagar, Eluru",
    capacity: "5 kW",
    savings: "₹82,000 / Year",
    image: "/project-1.jpg",
    beforeText: "₹8,000 monthly grid bills, frequent summer voltage drops, high carbon footprint.",
    afterText: "₹500 monthly bills, steady backup power, net-metering enabled, 25-yr clean power."
  },
  {
    id: 2,
    title: "Eluru Tech Park Hub",
    location: "Powerpet, Eluru",
    capacity: "80 kW",
    savings: "₹12,40,000 / Year",
    image: "/project-2.jpg",
    beforeText: "Massive commercial tariff expenses, peak summer cooling load costs.",
    afterText: "Solar-covered cooling, 65% drop in commercial grid dependencies, green certification."
  },
  {
    id: 3,
    title: "Sri Lakshmi Rice Mill",
    location: "Industrial Estate, Eluru",
    capacity: "150 kW",
    savings: "₹23,50,000 / Year",
    image: "/project-3.jpg",
    beforeText: "Heavy machinery peak loads raising demand charges, expensive diesel generator usage.",
    afterText: "Daytime factory runs entirely on solar power, diesel costs slashed by 80%, tax depreciation savings."
  },
  {
    id: 4,
    title: "Raju Farms Pump Station",
    location: "Denduluru, near Eluru",
    capacity: "7.5 HP",
    savings: "₹95,000 / Year",
    image: "/project-4.jpg",
    beforeText: "Erratic rural power schedules, manual pump starters, nighttime watering hazards.",
    afterText: "Automatic solar pump runs on sunshine, zero fuel cost, consistent daytime farm irrigation."
  },
  {
    id: 5,
    title: "Satyanarayana Apartments",
    location: "RR Pet, Eluru",
    capacity: "15 kW",
    savings: "₹2,40,000 / Year",
    image: "/project-5.jpg",
    beforeText: "Common area lightning and elevators raising power bills for all apartment residents.",
    afterText: "On-grid solar system powering common utilities, reduced maintenance charges for residents."
  },
  {
    id: 6,
    title: "St. Xavier Public School",
    location: "Sanivarapupeta, Eluru",
    capacity: "30 kW",
    savings: "₹4,80,000 / Year",
    image: "/project-6.jpg",
    beforeText: "High electricity bills during daytime school hours due to smart classrooms and air cooling.",
    afterText: "Zero-cost daytime consumption, school powered 100% by rooftop solar, educational green model."
  },
  {
    id: 7,
    title: "Venkateswara Cold Storage",
    location: "Pedapadu Road, Eluru",
    capacity: "200 kW",
    savings: "₹31,00,000 / Year",
    image: "/project-7.jpg",
    beforeText: "Perishable items at risk due to cooling cut-offs, immense industrial base load costs.",
    afterText: "APSPDCL net-metering credits, uninterrupted chilling loops, offset carbon output by 200 tons/yr."
  },
  {
    id: 8,
    title: "Green Meadows Nursery",
    location: "Tangellamudi, Eluru",
    capacity: "5 HP",
    savings: "₹75,000 / Year",
    image: "/project-8.jpg",
    beforeText: "Irregular water flow stunted plant growth, high grid charges for sprinkler setups.",
    afterText: "Solar microgrid powers automated mist sprays, healthy crop growth, completely grid-independent."
  },
  {
    id: 9,
    title: "Bhavani Shopping Mall",
    location: "GNT Road, Eluru",
    capacity: "45 kW",
    savings: "₹7,20,000 / Year",
    image: "/project-9.jpg",
    beforeText: "Heavy commercial power bills from escalators, neon lighting, and central climate control.",
    afterText: "Commercial solar array cutting electricity expenses by 45%, sustainable retail shopping experience."
  },
  {
    id: 10,
    title: "Reddy Residential Mansion",
    location: "Vatluru, near Eluru",
    capacity: "10 kW",
    savings: "₹1,60,000 / Year",
    image: "/project-10.jpg",
    beforeText: "Multiple luxury home appliances leading to highest slab rate electricity bills.",
    afterText: "Zero net electricity bills, hybrid inverter battery backup keeping appliances safe from blackouts."
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const [lightboxProject, setLightboxProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = projectsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };



  const isMobile = windowWidth < 640;

  return (
    <section id="projects" className="py-20 bg-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Our Portfolio</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            Recent Projects Showcase
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Real solar installations executed in Eluru and nearby regions, proving energy savings and quality execution.
          </p>
        </div>

        {/* 3D Carousel Wrapper */}
        <div 
          className="relative max-w-7xl mx-auto px-2 sm:px-12 select-none"
          style={{ perspective: "1200px" }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 bg-white/90 hover:bg-white text-deep-blue border border-neutral-200/80 shadow-md hover:shadow-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous project slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 bg-white/90 hover:bg-white text-deep-blue border border-neutral-200/80 shadow-md hover:shadow-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next project slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>

          {/* 3D Viewport */}
          <div className="relative h-[220px] sm:h-[320px] flex items-center justify-center overflow-visible py-4">
            {projectsData.map((proj, idx) => {
              // Circular offset math
              let offset = idx - currentIndex;
              if (offset < -total / 2) offset += total;
              if (offset > total / 2) offset -= total;

              const isActive = offset === 0;
              const isVisible = isMobile ? offset === 0 : Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Calculate 3D styles
              let tx = 0;
              let tz = 0;
              let rotY = 0;
              
              if (!isMobile) {
                tx = offset * 260; // card spacing
                tz = -Math.abs(offset) * 120; // push back in 3D depth
                rotY = offset * -20; // rotate slightly inwards
              }

              const scale = 1 - Math.abs(offset) * 0.12;
              const opacity = 1 - Math.abs(offset) * 0.35;
              const blur = Math.abs(offset) * 1.2;
              const zIndex = 20 - Math.abs(offset);



              return (
                <div
                  key={proj.id}
                  onClick={() => isActive ? setLightboxProject(proj) : setCurrentIndex(idx)}
                  className={`absolute w-[290px] sm:w-[420px] bg-white rounded-3xl overflow-hidden shadow-premium border border-neutral-200 flex flex-col text-left group select-none ${
                    isActive ? 'cursor-pointer' : 'cursor-pointer hover:border-primary/40'
                  }`}
                  style={{
                    transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden shrink-0">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    


                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 inline-flex items-center space-x-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-[10px] sm:text-xs font-semibold">
                      <span className="truncate max-w-[120px] sm:max-w-none">{proj.location}</span>
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-full text-[10px] sm:text-xs font-extrabold shadow-md">
                      <span>{proj.capacity}</span>
                    </div>
                  </div>


                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Indicator Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-350 ${
                currentIndex === idx 
                  ? 'w-6 bg-primary' 
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Left image column */}
                <div className="md:w-3/5 bg-neutral-900 relative flex items-center justify-center">
                  <img 
                    src={lightboxProject.image} 
                    alt={lightboxProject.title} 
                    className="w-full h-full object-cover max-h-[40vh] md:max-h-none md:aspect-square"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    {lightboxProject.capacity} System
                  </div>
                </div>

                {/* Right content column */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary font-display">
                        Solar Installation
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-deep-blue mt-1">
                        {lightboxProject.title}
                      </h3>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        <span>{lightboxProject.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-200">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SOLAR CAPACITY</span>
                        <span className="text-xl font-extrabold text-deep-blue">{lightboxProject.capacity}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SAVINGS PER YEAR</span>
                        <span className="text-xl font-extrabold text-success">{lightboxProject.savings}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div>
                        <h4 className="text-xs font-bold text-red-500 uppercase tracking-wide">Before Installation</h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{lightboxProject.beforeText}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-success uppercase tracking-wide">After Installation</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{lightboxProject.afterText}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-200 mt-6">
                    <a
                      href="#contact"
                      onClick={() => setLightboxProject(null)}
                      className="flex items-center justify-center space-x-2 w-full py-3.5 bg-gradient-to-r from-primary to-accent hover:brightness-105 text-white font-extrabold rounded-xl transition-all"
                    >
                      <span>Inquire About Similar Setup</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

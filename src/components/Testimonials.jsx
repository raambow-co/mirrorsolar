import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Play, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. K. Srinivas Rao",
    location: "Eluru Town, AP",
    role: "Residential Owner",
    rating: 5,
    review: "We installed a 5 kW on-grid solar system. Our monthly bill dropped from ₹7,500 to just ₹350. Mirror Solar Vision handled all the net metering work with APSPDCL and uploaded our subsidy application. Highly professional team!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "M. Durga Prasad",
    location: "Industrial Area, Eluru",
    role: "MD, Durga Rice Mill",
    rating: 5,
    review: "For a factory with high day-time loads, switching to a 100 kW solar setup was the best business choice. Our ROI will hit in just 3.2 years, and our power bill is slashed by over 60%. Excellent post-sales support.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "G. Lakshmi Devi",
    location: "Denduluru, Andhra Pradesh",
    role: "Farmer & Landowner",
    rating: 5,
    review: "The solar pump set operates seamlessly throughout the day. No more waiting for power at midnight or handling line faults. I highly recommend Mirror Solar Vision for their transparent pricing and fast installation.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

const videoTestimonials = [
  {
    name: "Ramesh Babu",
    location: "Eluru",
    system: "3 kW Residential",
    duration: "1:45 Min",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Satyanarayana",
    location: "Pedapadu",
    system: "10 kW Shop Roof",
    duration: "2:10 Min",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Success Stories</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Hear from families, business owners, and farmers who have transitioned to clean energy with Mirror Solar Vision.
          </p>
        </div>

        {/* Testimonials Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Testimonials Slider */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-premium relative text-left">
            <div className="absolute top-6 right-8 text-neutral-100 pointer-events-none">
              <Quote className="h-24 w-24 stroke-[1]" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              
              {/* Active Testimonial Content */}
              <div className="min-h-[220px] flex flex-col justify-center">
                {/* Rating stars */}
                <div className="flex space-x-1 mb-4 text-accent">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic mb-6">
                  "{testimonials[activeIndex].review}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-primary/20 shadow-md"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-base text-deep-blue">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold">
                      {testimonials[activeIndex].role} &bull; <span className="text-primary">{testimonials[activeIndex].location}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Toggles */}
              <div className="flex items-center space-x-3 mt-8 pt-6 border-t border-neutral-150">
                <button
                  onClick={prev}
                  className="p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-deep-blue rounded-xl transition-colors focus:outline-none"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-xs font-bold text-slate-400">
                  {activeIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-deep-blue rounded-xl transition-colors focus:outline-none"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Video Testimonial Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <h3 className="font-display font-extrabold text-xl text-deep-blue text-left pl-2 flex items-center space-x-2">
              <span className="h-2 w-2 bg-primary rounded-full"></span>
              <span>Watch Customer Reviews</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {videoTestimonials.map((v, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-row items-center p-3 text-left"
                >
                  {/* Thumbnail with Overlay */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-neutral-150">
                    <img
                      src={v.thumbnail}
                      alt={v.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                      <div className="p-2 bg-primary text-white rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
                        <Play className="h-4 w-4 fill-white" />
                      </div>
                    </div>
                    
                    {/* Duration tag */}
                    <span className="absolute bottom-1 right-1 bg-black/60 text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                      {v.duration}
                    </span>
                  </div>

                  {/* Video details */}
                  <div className="pl-4 flex-1 flex flex-col justify-center py-2">
                    <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest block">
                      {v.system}
                    </span>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-deep-blue mt-0.5">
                      {v.name}
                    </h4>
                    <p className="text-xs text-slate-550 font-medium">
                      Location: {v.location}, AP
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-slate-550 leading-relaxed text-left pl-2 italic">
              *Real client videos are available on request during site consultation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

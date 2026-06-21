import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Compass, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="h-3.5 w-3.5" />
              <span>Who We Are</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-deep-blue leading-tight">
              Serving Eluru with Trusted Solar Solutions
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Mirror Solar Vision is a trusted renewable energy company serving Eluru and surrounding regions with customized rooftop solar solutions. 
              We assist homeowners, commercial establishments, apartments, schools, industries, and farmers to transition to solar energy, reduce operational costs, and benefit from the central government's subsidy schemes.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full flex items-center justify-center transition-colors group-hover:bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-deep-blue mb-2 flex items-center space-x-2">
                  <span>Our Mission</span>
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Deliver affordable, sustainable, and top-tier solar power solutions to every roof, enabling self-reliance and significant electricity bill savings.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full flex items-center justify-center transition-colors group-hover:bg-accent/10">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-deep-blue mb-2 flex items-center space-x-2">
                  <span>Our Vision</span>
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Become Andhra Pradesh’s most trusted solar energy partner, recognized for professional execution, subsidy processing, and customer care.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative border border-neutral-200 bg-neutral-50/50 p-8 rounded-3xl shadow-premium w-full max-w-[400px]">
              <h3 className="font-display font-extrabold text-xl text-deep-blue mb-6 text-center">
                Our Values & Commitments
              </h3>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Quality Components Only",
                    desc: "We exclusively utilize high-efficiency Tier-1 panels and MNRE compliant inverters.",
                    icon: ShieldCheck,
                    color: "text-success bg-success/10"
                  },
                  {
                    title: "Local Eluru Support",
                    desc: "Our localized presence ensures quick technical site survey, net metering, and service.",
                    icon: Zap,
                    color: "text-primary bg-primary/10"
                  },
                  {
                    title: "Subsidy Processing Help",
                    desc: "We handle all the paperwork for PM Surya Ghar Yojana to guarantee your subsidy credits.",
                    icon: Target,
                    color: "text-accent bg-accent/10"
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3.5 text-left">
                      <div className={`p-2.5 rounded-xl shrink-0 ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-deep-blue">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

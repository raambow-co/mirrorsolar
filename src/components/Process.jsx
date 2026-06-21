import React from 'react';
import { HelpCircle, PhoneCall, Ruler, FileCheck, Landmark, Construction, Zap, Coins } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: "Free Consultation",
    desc: "Get in touch with our Eluru team. We review your current bills and discuss your objectives."
  },
  {
    icon: Ruler,
    title: "Site Inspection",
    desc: "Our solar engineers inspect your roof space, orientation, shadow factors, and structural health."
  },
  {
    icon: FileCheck,
    title: "Custom Proposal",
    desc: "We deliver a detailed engineering layout, specifying recommended kW capacity, pricing, and ROI."
  },
  {
    icon: Landmark,
    title: "Subsidy Assistance",
    desc: "We collect documentation and process approvals on the PM Surya Ghar national portal."
  },
  {
    icon: Construction,
    title: "Installation",
    desc: "Our expert team installs mounting brackets, panels, wiring, and inverters within 3-7 days."
  },
  {
    icon: Zap,
    title: "Net Metering Setup",
    desc: "We coordinate with APSPDCL to install your bi-directional net meter for power exchange credits."
  },
  {
    icon: Coins,
    title: "Energy Savings Begin",
    desc: "Turn on your solar system. Watch your electricity bill drop by up to 90% and enjoy clean power."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Construction className="h-3.5 w-3.5" />
            <span>Our Methodology</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            How We Get You Solar Powered
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            A seamless, end-to-end process from initial contact to net metering setup and subsidy collection.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line (Desktop only) */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-0.5 bg-neutral-200 -translate-x-1/2 pointer-events-none" />

          {/* Steps Grid */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge (Circle) */}
                  <div className="absolute left-[30px] md:left-1/2 top-0 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent border-4 border-white shadow-md text-white font-extrabold text-xs">
                    {idx + 1}
                  </div>

                  {/* Left Empty Side / Desktop Alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Step Card Content */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative text-left">
                      
                      {/* Icon */}
                      <div className="p-2 bg-primary/10 text-primary rounded-xl w-max mb-4">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-deep-blue mb-2.5">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

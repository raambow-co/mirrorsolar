import React from 'react';
import { Users, Zap, ShieldAlert, Award, TrendingUp, Trees } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Customers",
    desc: "Residential & Commercial"
  },
  {
    icon: Zap,
    value: "15 MW+",
    label: "Installed Capacity",
    desc: "Clean solar power active"
  },
  {
    icon: TrendingUp,
    value: "₹5 Crore+",
    label: "Customer Savings",
    desc: "Saved in grid power bills"
  },
  {
    icon: Trees,
    value: "5,000 Tons",
    label: "CO₂ Reduced",
    desc: "Offsetting carbon footprint"
  },
  {
    icon: Award,
    value: "100+",
    label: "Villages Served",
    desc: "Rural electrification support"
  }
];

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-[#0c2a3f] to-dark-bg text-white relative overflow-hidden">
      {/* Background Graphic Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trees className="h-3.5 w-3.5" />
            <span>Green Impact</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Making a Real Difference
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our clean energy systems do more than just save money; they shape a sustainable future for Andhra Pradesh.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-white/5 border border-white/10 text-accent rounded-2xl mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  
                  <h3 className="font-bold text-sm text-slate-200 mt-2">
                    {stat.label}
                  </h3>
                </div>
                
                <p className="text-xs text-slate-400 mt-3 border-t border-white/5 pt-3 leading-normal">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

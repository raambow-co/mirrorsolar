import React from 'react';
import { Award, Zap, Smile, CheckCircle, MapPin } from 'lucide-react';

const trustStats = [
  {
    icon: Zap,
    value: "100+",
    label: "Solar Installations",
    color: "text-primary"
  },
  {
    icon: Award,
    value: "5+ Years",
    label: "Experience",
    color: "text-accent"
  },
  {
    icon: CheckCircle,
    value: "Govt Approved",
    label: "Government Approved",
    color: "text-success"
  },
  {
    icon: Smile,
    value: "AP Service & 100%",
    label: "Customer Satisfaction",
    color: "text-deep-blue"
  }
];

export default function TrustBar() {
  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-light shadow-xl shadow-slate-900/5 rounded-2xl py-6 px-4 md:px-8 border border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200">
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center p-3 ${
                  i > 0 ? 'pt-6 sm:pt-3' : 'pt-3'
                } lg:pt-3`}
              >
                <div className={`p-2.5 bg-neutral-100 rounded-xl mb-2.5 ${stat.color} bg-opacity-70`}>
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <span className="font-display font-extrabold text-xl sm:text-2xl text-deep-blue leading-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

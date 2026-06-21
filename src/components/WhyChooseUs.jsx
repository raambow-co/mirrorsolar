import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileSpreadsheet, Zap, HelpCircle, Activity, HeartHandshake, BadgePercent, Clock, Landmark } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Premium Tier-1 Solar Panels",
    description: "We install top-quality monocrystalline panels that generate maximum energy even in low sunlight."
  },
  {
    icon: ShieldCheck,
    title: "Expert Installation Team",
    description: "Highly trained local engineers following strict safety and structural standards."
  },
  {
    icon: Landmark,
    title: "MNRE Compliant Solutions",
    description: "Our component choices adhere to all guidelines of the Ministry of New and Renewable Energy."
  },
  {
    icon: Zap,
    title: "Net Metering Assistance",
    description: "We handle the entire net meter liaison process with APSPDCL to ensure billing credits."
  },
  {
    icon: BadgePercent,
    title: "Government Subsidy Support",
    description: "Full aid for uploading subsidy papers on the national solar portal for direct cashbacks."
  },
  {
    icon: Activity,
    title: "High Efficiency Systems",
    description: "Engineered to deliver high conversion efficiency with minimal degradation over time."
  },
  {
    icon: FileSpreadsheet,
    title: "25-Year Warranty",
    description: "Industry-standard performance warranty on solar panels and 5-year warranty on inverters."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Customer Support",
    description: "Prompt post-sales service, regular health audits, and rapid troubleshooting from Eluru."
  },
  {
    icon: BadgePercent,
    title: "Transparent Pricing",
    description: "No hidden costs. Detailed breakdowns on solar panels, structure, mounting, wiring, and inverters."
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "System installation is completed within 3 to 7 working days once approval is received."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Why Mirror Solar</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            Setting the Standard in Solar Installation
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We don’t just sell solar panels; we deliver complete, hassle-free energy independence with local reliability in Eluru.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-deep-blue mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

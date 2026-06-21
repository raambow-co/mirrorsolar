import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How much does solar installation cost in Eluru?",
    answer: "A standard residential rooftop solar system costs approximately ₹55,000 to ₹65,000 per kW. However, this is the cost before government subsidies. With a 3 kW system, the total initial cost is around ₹1,80,000, and after getting the ₹78,000 PM Surya Ghar subsidy, the net investment is around ₹1,02,000."
  },
  {
    question: "How much government subsidy can I get?",
    answer: "Under the PM Surya Ghar Muft Bijli Yojana, residential subsidies are capped by capacity: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW or higher systems. Commercial and industrial solar systems do not qualify for direct capital subsidies, but they can claim 40% accelerated tax depreciation benefits."
  },
  {
    question: "What is net metering and how does it work?",
    answer: "Net metering is a billing mechanism that credits solar energy owners for the excess electricity they feed back into the APSPDCL utility grid. Your bi-directional meter records both the power you import from the grid and the power you export. At the end of the billing cycle, you are only charged for the net units consumed."
  },
  {
    question: "How long do solar panels last and what is the warranty?",
    answer: "Tier-1 solar panels are built to last for 25 to 30 years. We offer a 25-year performance warranty on solar panels (guaranteeing they will produce at least 80% of original capacity at year 25) and a 5-year standard warranty on inverters."
  },
  {
    question: "Will solar power work during a grid power cut?",
    answer: "In a standard On-Grid system, the solar inverter is programmed to shut down automatically during power cuts for safety reasons (anti-islanding protection to protect line workers). If you need power during blackouts, we recommend a Hybrid Solar System, which includes battery storage to maintain power back up."
  },
  {
    question: "How much roof area is required for solar panels?",
    answer: "Generally, you need about 80 to 100 square feet of shadow-free rooftop area for every 1 kW of solar capacity. A 3 kW solar array will require about 250 to 300 square feet of flat or inclined roof space."
  },
  {
    question: "What maintenance is needed for rooftop solar panels?",
    answer: "Solar systems require very low maintenance because they have no moving parts. The main maintenance activity is regular panel cleaning (dusting and washing with water once every 10-15 days) to ensure dirt does not block sunlight. We offer Annual Maintenance Contracts (AMC) to handle cleaning, health checks, and repairs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Questions & Answers</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-deep-blue tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Get clear, quick answers to common questions about solar installations, costs, billing, and government subsidies in Andhra Pradesh.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => toggle(idx)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left font-display font-extrabold text-sm sm:text-base text-deep-blue hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-1 rounded-lg bg-neutral-50 border border-neutral-200 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-primary bg-primary/5 border-primary/20' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Answer Box (Animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-neutral-100 bg-neutral-50/50"
                    >
                      <div className="px-6 py-5 text-xs sm:text-sm text-slate-550 leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Support Notice */}
        <div className="mt-12 text-center bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Have a different question not listed here?{' '}
            <a href="#contact" className="text-primary font-bold hover:underline">
              Speak to our Eluru solar experts directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

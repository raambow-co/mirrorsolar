import React from 'react';
import { Percent, Check, FileText, ArrowRight } from 'lucide-react';

export default function Subsidy() {
  return (
    <section id="subsidy" className="py-20 bg-gradient-to-br from-dark-bg via-[#0c2a3f] to-dark-bg text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
            <Percent className="h-3.5 w-3.5" />
            <span>Government Incentives</span>
          </div>
          
          {/* Title */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl">
            Get Government Solar Subsidies Under <span className="text-accent">PM Surya Ghar Yojana</span>
          </h2>
          
          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            The Government of India provides substantial subsidies for residential rooftop solar installations. 
            Under the PM Surya Ghar Muft Bijli Yojana, homes get up to ₹78,000 directly credited back to make clean energy transition affordable.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl text-left pt-4">
            {[
              "Reduce installation costs immediately by up to 40%+",
              "Quick return on investment within 3 to 4 years",
              "Lower monthly electricity bills (reduce up to 90%)",
              "Environment-friendly energy generation for 25+ years",
              "Complete documentation, upload, and verification support by our team"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-200">
                <div className="p-1 bg-success/20 text-success rounded-full shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-200 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="pt-6 w-full flex flex-col items-center">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:brightness-105 text-white font-extrabold rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-102"
            >
              <span>Claim Your Subsidy Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Government Approved Badge */}
          <div className="pt-6 border-t border-white/10 w-full max-w-3xl flex items-center justify-center space-x-3 text-xs text-slate-400">
            <FileText className="h-5 w-5 text-accent shrink-0" />
            <span>Approved vendor status with APSPDCL. We handle all approvals and net metering.</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}

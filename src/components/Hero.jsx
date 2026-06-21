import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, ArrowRight, MessageSquare, ShoppingBag } from 'lucide-react';

const heroHighlights = [
  "Government Subsidy Assistance",
  "Premium Solar Panels",
  "Professional Installation",
  "25-Year Warranty",
  "Net Metering Support"
];

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#030712] text-white">
      {/* Background Graphic Effects - Ambient Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.06),_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0 animate-orb-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none z-0 animate-orb-float" style={{ animationDelay: '-6s' }} />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-full w-max text-xs sm:text-sm font-semibold tracking-wide text-cyan-400 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>PM Surya Ghar Yojana Subsidies Available Now</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
            >
              Switch To Solar & Reduce Your Electricity Bill By <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 font-extrabold">Up To 90%</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-light"
            >
              Mirror Solar Vision helps homes, businesses, apartments, schools, industries, and farmers in Eluru & Andhra Pradesh save money through customized solar energy solutions and government subsidies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-cyan-500/10 transition-all duration-300"
              >
                <span>Get Free Site Survey</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a
                href="#services"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-extrabold rounded-xl transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5 text-cyan-400" />
                <span>Shop now</span>
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Mirror%20Solar%20Vision,%20I%20want%20to%20know%20more%20about%20rooftop%20solar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-xl font-bold transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5 fill-emerald-500/10" />
                <span>WhatsApp Now</span>
              </a>
            </motion.div>

            {/* Highlight Badges Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6 border-t border-white/5"
            >
              {heroHighlights.map((hl, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-300">{hl}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Right Media / Interactive Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient background glow inside the card container */}
            <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[9/10] bg-[#0b1528]/40 border border-white/5 rounded-2xl shadow-2xl p-6 backdrop-blur-md overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 left-0 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start z-10">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-cyan-400">Smart Power Grid</span>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold rounded-full border border-emerald-500/20">ACTIVE SAVINGS</span>
              </div>

              {/* Central Premium Graphic representing Solar panel & Energy Generation */}
              <div className="relative my-6 flex-1 flex flex-col items-center justify-center">
                {/* Outer Glowing Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-[240px] h-[240px] border border-dashed border-cyan-400/20 rounded-full flex items-center justify-center"
                />

                {/* Inner Pulsing Circle */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 flex items-center justify-center"
                />

                {/* The Floating Solar Icon */}
                <div className="relative p-6 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl shadow-xl shadow-cyan-500/25">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
                      <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.5" />
                      <line x1="12" y1="7" x2="12" y2="17" />
                      <line x1="7" y1="12" x2="17" y2="12" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Quick Mini Metric */}
              <div className="z-10 bg-white/5 border border-white/5 rounded-xl p-3 flex justify-between items-center text-left">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Average Eluru Solar Savings</p>
                  <p className="text-lg font-extrabold text-white">₹8,500+ <span className="text-xs font-light text-slate-400">/ Month</span></p>
                </div>
                <div className="px-2.5 py-1.5 bg-cyan-500/10 rounded-lg text-cyan-400 font-extrabold text-xs border border-cyan-500/25">
                  90% Off
                </div>
              </div>
            </motion.div>

            {/* Additional floating particles */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 45, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 p-3 bg-[#0b1528]/80 border border-white/5 rounded-xl hidden md:block text-slate-300 backdrop-blur-sm"
            >
              <Award className="h-6 w-6 text-cyan-400" />
            </motion.div>
            
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -30, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 p-3 bg-[#0b1528]/80 border border-white/5 rounded-xl hidden md:block text-slate-300 backdrop-blur-sm"
            >
              <Shield className="h-6 w-6 text-emerald-400" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

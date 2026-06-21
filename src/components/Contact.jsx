import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, PhoneCall, Calendar, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    monthlyBill: '3000-5000',
    propertyType: 'residential',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        location: '',
        monthlyBill: '3000-5000',
        propertyType: 'residential',
        message: ''
      });
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight mb-4">
            Request a Free Site Survey
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Ready to save money? Drop us your details, and our local Eluru team will get back to you within 24 hours to schedule an inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info & Map mockup */}
          <div className="lg:col-span-5 bg-gradient-to-br from-dark-bg via-[#0c2a3f] to-dark-bg text-white rounded-3xl p-8 flex flex-col justify-between border border-white/10 shadow-xl relative overflow-hidden">
            
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8 relative z-10 text-left">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-accent">
                  Mirror Solar Vision
                </h3>
                <p className="text-sm text-slate-350 mt-1.5 leading-relaxed">
                  The leading provider of high-efficiency solar panel installations and net metering services in Andhra Pradesh.
                </p>
              </div>

              {/* Contacts */}
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-accent rounded-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</h4>
                    <p className="text-sm text-white font-semibold mt-1">Eluru, Andhra Pradesh, India - 534001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-accent rounded-xl">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Directly</h4>
                    <p className="text-sm text-white font-semibold mt-1">
                      <a href="tel:+919999999999" className="hover:text-primary transition-colors">+91 99999 99999</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-accent rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                    <p className="text-sm text-white font-semibold mt-1">
                      <a href="mailto:info@mirrorsolar.in" className="hover:text-primary transition-colors">info@mirrorsolar.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions (Call/WhatsApp) */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-3 relative z-10">
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center space-x-2 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-xl text-xs font-bold transition-all"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Mirror%20Solar%20Vision,%20I%20am%20interested%20in%20solar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 bg-success/20 hover:bg-success/25 border border-success/30 text-success rounded-xl text-xs font-bold transition-all"
              >
                <MessageSquare className="h-4 w-4 fill-success/10" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right panel: Lead generation form */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-250 rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm">
            <h3 className="font-display font-extrabold text-xl text-deep-blue text-left border-b border-neutral-200 pb-4 mb-6">
              Enter Survey Details
            </h3>

            {formSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4">
                <div className="inline-flex p-4 bg-success/10 text-success rounded-full mb-2">
                  <Check className="h-10 w-10 stroke-[3]" />
                </div>
                <h4 className="font-display font-extrabold text-2xl text-deep-blue">Request Received!</h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Mirror Solar Vision. Our technical survey team will call you shortly to confirm the scheduled site inspection.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-deep-blue font-bold text-xs rounded-xl border border-neutral-300 transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  {/* Phone number field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit Mobile Number"
                      className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Location field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Location / City</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Eluru Town"
                      className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  {/* Property type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="residential">Residential Home</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Factory</option>
                      <option value="agricultural">Agricultural Farm</option>
                    </select>
                  </div>

                </div>

                {/* Monthly bill range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Average Monthly Electricity Bill</label>
                  <select
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none"
                  >
                    <option value="under-1500">Under ₹1,500</option>
                    <option value="1500-3000">₹1,500 - ₹3,000</option>
                    <option value="3000-5000">₹3,000 - ₹5,000</option>
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="over-10000">Over ₹10,000</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Additional Message (Optional)</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your roof space, shading issues, or specific objectives..."
                    className="w-full bg-white border border-neutral-250 rounded-xl px-4 py-3 text-sm text-deep-blue focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-primary to-accent hover:brightness-105 disabled:opacity-50 text-white font-extrabold rounded-xl text-sm transition-all duration-300 shadow-md shadow-primary/10"
                  >
                    {loading ? (
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Get Free Quote</span>
                      </>
                    )}
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, message: "Request for physical site audit: " + prev.message }));
                    }}
                    className="flex items-center justify-center space-x-2 py-4 bg-deep-blue hover:brightness-105 disabled:opacity-50 text-white font-extrabold rounded-xl text-sm transition-all duration-300 shadow-md shadow-deep-blue/10"
                  >
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>Book Site Visit</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

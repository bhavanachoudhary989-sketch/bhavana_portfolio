'use me';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#C8FF00]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-4">
            Feel free to reach out for career opportunities, technical discussions, research collaborations, or project queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group p-5 rounded-2xl bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#A1A1AA]">Email</span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </h3>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="group p-5 rounded-2xl bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#A1A1AA]">Phone</span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                    {PERSONAL_INFO.phone}
                  </h3>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#16161F] border border-[#23232F]">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#A1A1AA]">Location</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {PERSONAL_INFO.location}
                  </h3>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 flex items-center space-x-3 transition-all transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5 text-[#C8FF00]" />
                <span className="text-sm font-bold text-white group-hover:text-[#C8FF00]">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 flex items-center space-x-3 transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5 text-[#C8FF00]" />
                <span className="text-sm font-bold text-white group-hover:text-[#C8FF00]">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#16161F] border border-[#23232F] rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Send Me a Direct Message
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#0A0A0F] border border-[#C8FF00]/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#C8FF00] mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-sm text-[#A1A1AA]">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#C8FF00] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#C8FF00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#C8FF00] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message details..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#C8FF00] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C8FF00] text-black font-bold text-base hover:bg-[#B2E600] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

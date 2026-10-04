'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const HIGHLIGHT_CARDS = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'Building modular, maintainable, and user-centric software applications.',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    desc: 'Extracting key insights through data preprocessing and visual reporting.',
  },
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    desc: 'Exploring machine learning models for pattern discovery and automation.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'Simulating SOC workflows, risk scoring, and security event analysis.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-[#C8FF00]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-[#16161F] border border-[#23232F] rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.aboutText.map((paragraph, index) => (
                <p key={index} className="tracking-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#23232F]">
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-[#23232F]">
                <div className="text-2xl font-bold text-[#C8FF00]">2+</div>
                <div className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider mt-1">
                  Research Papers Published
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-[#23232F]">
                <div className="text-2xl font-bold text-[#C8FF00]">8+</div>
                <div className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider mt-1">
                  Technical Projects
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-[#23232F] col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-[#C8FF00]">Top 100</div>
                <div className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider mt-1">
                  SIH 2026 Precursor Team
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Areas Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {HIGHLIGHT_CARDS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

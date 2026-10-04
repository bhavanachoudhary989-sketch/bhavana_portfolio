'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, ArrowRight } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// RECOGNITION & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-[#C8FF00]">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
        </div>

        {/* Achievement Highlight Card */}
        <div className="max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden group shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-2xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-all duration-300 shrink-0">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-2">
                      <Users className="w-3.5 h-3.5" />
                      <span>{item.supportingText}</span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#C8FF00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#A1A1AA] mt-1">
                      {item.event}
                    </p>

                    <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                      "{item.description}"
                    </p>

                    {item.projectName && (
                      <div className="mt-4 inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#C8FF00] bg-[#0A0A0F] px-3 py-1.5 rounded-lg border border-[#23232F]">
                        <Star className="w-3.5 h-3.5" />
                        <span>{item.projectName}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

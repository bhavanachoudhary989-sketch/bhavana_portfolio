'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '@/data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// ACADEMIC TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-[#C8FF00]">& Academics</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-[#23232F] space-y-10">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#0A0A0F] border-2 border-[#C8FF00] group-hover:bg-[#C8FF00] transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
              </div>

              {/* Education Card */}
              <div className="bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,255,0,0.05)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#C8FF00] bg-[#0A0A0F] px-3 py-1 rounded-full border border-[#23232F]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>

                  {item.score && (
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-black bg-[#C8FF00] px-3 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.score}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                  {item.institution}
                </h3>
                <p className="text-base text-[#A1A1AA] font-medium mt-1">
                  {item.degree}
                </p>

                {item.details && (
                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                    {item.details}
                  </p>
                )}

                {item.highlight && (
                  <div className="mt-4 pt-3 border-t border-[#23232F] flex items-center space-x-2 text-xs font-mono text-[#C8FF00]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{item.highlight}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

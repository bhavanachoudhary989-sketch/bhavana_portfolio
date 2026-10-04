'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Code2, Cpu, Database, BarChart3, Wrench, Users, CheckCircle2 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Programming: Code2,
  'Core Computer Science': Cpu,
  Data: Database,
  'AI / ML': BarChart3,
  'Tools / Productivity': Wrench,
  'Soft Skills': Users,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-[#C8FF00]">Competencies</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-4">
            A comprehensive breakdown of programming languages, core computer science fundamentals, data analytics, and soft skills.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((categoryGroup, index) => {
            const IconComponent = CATEGORY_ICONS[categoryGroup.category] || Code2;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,255,0,0.05)] flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#23232F]">
                    <div className="p-2.5 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0F] border border-[#23232F] text-[#A1A1AA] text-sm font-medium hover:text-white hover:border-[#C8FF00]/50 hover:bg-[#1E1E2A] transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquare } from 'lucide-react';
import { LANGUAGES } from '@/data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// COMMUNICATION & FLUENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Languages <span className="text-[#C8FF00]">Spoken</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {LANGUAGES.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,255,0,0.05)] transform hover:-translate-y-1"
            >
              <div className="mx-auto w-10 h-10 rounded-xl bg-[#0A0A0F] border border-[#23232F] flex items-center justify-center text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                {lang.name}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-medium">
                {lang.level}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

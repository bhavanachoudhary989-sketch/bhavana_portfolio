'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Linkedin, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-[#C8FF00]">Courses</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,255,0,0.05)] transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA] bg-[#0A0A0F] px-2.5 py-1 rounded-md border border-[#23232F]">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {cert.details && (
                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                    {cert.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#23232F]">
                {(cert.credentialUrl || cert.linkedInUrl) && (
                  <a
                    href={cert.credentialUrl || cert.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#C8FF00] hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>View Certificate on LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

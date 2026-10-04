'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';
import { RESEARCH_PAPERS } from '@/data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// SCHOLARLY PUBLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research & <span className="text-[#C8FF00]">Publications</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-4">
            Peer-reviewed research papers published in international scientific journals, advancing domain knowledge in Computer Vision, AI, Machine Learning, and IoT.
          </p>
        </div>

        {/* Consistently Designed Research Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESEARCH_PAPERS.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.06)]"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0A0A0F] border border-[#C8FF00]/30 text-[#C8FF00] text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{paper.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    {paper.published}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#C8FF00] transition-colors leading-tight">
                  {paper.title}
                </h3>

                {/* Journal Title */}
                <p className="text-sm font-semibold text-[#A1A1AA] mt-2 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-[#C8FF00] shrink-0" />
                  <span>{paper.journal}</span>
                </p>

                {/* Publication Metadata Box */}
                <div className="mt-6 bg-[#0A0A0F] border border-[#23232F] rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#A1A1AA] block font-mono">ISSN:</span>
                    <span className="text-white font-bold">{paper.issn}</span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] block font-mono">Vol & Issue:</span>
                    <span className="text-white font-bold">Vol.{paper.volume}, Issue {paper.issue}</span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] block font-mono">Pages:</span>
                    <span className="text-white font-bold">{paper.pages}</span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] block font-mono">Paper ID:</span>
                    <span className="text-[#C8FF00] font-mono font-bold">{paper.paperId}</span>
                  </div>
                  {paper.registrationId && (
                    <div className="col-span-2 sm:col-span-4 pt-2 border-t border-[#23232F]">
                      <span className="text-[#A1A1AA] font-mono">Reg ID: </span>
                      <span className="text-white font-bold">{paper.registrationId}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mt-6">
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {paper.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#23232F]">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#0A0A0F] border border-[#23232F] text-xs font-mono text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Published Paper Button */}
                <a
                  href={paper.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-[#C8FF00] text-black font-bold text-sm hover:bg-[#B2E600] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Published Paper</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

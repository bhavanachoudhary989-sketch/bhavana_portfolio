'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Mail, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#0A0A0F] bg-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Intro Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16161F] border border-[#23232F] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] absolute" />
              <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider pl-3">
                Computer Science Engineering Student
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-[#C8FF00] drop-shadow-[0_0_25px_rgba(200,255,0,0.2)]">
                  Bhavana Choudhary
                </span>
              </h1>
              <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#A1A1AA] tracking-tight">
                Computer Science Engineer
              </h2>
            </div>

            {/* Subtitle / Quote */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl font-normal leading-relaxed border-l-2 border-[#C8FF00] pl-4 py-1">
              "{PERSONAL_INFO.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#C8FF00] text-black font-bold text-sm sm:text-base hover:bg-[#B2E600] hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#16161F] text-white font-semibold text-sm sm:text-base border border-[#23232F] hover:border-[#C8FF00]/50 hover:bg-[#1E1E2A] transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#C8FF00]" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#16161F] text-[#A1A1AA] font-semibold text-sm sm:text-base border border-[#23232F] hover:text-white hover:border-[#C8FF00]/50 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#C8FF00]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 flex items-center space-x-5 border-t border-[#23232F]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-[#16161F] text-[#A1A1AA] hover:text-[#C8FF00] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-[#16161F] text-[#A1A1AA] hover:text-[#C8FF00] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - COMPLETELY CLEAN Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative ambient glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#C8FF00]/30 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Clean Image Card Container */}
              <div className="relative rounded-2xl bg-[#16161F] border border-[#23232F] p-3 shadow-2xl transition-all duration-300 group-hover:border-[#C8FF00]/40">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0F]">
                  <Image
                    src={PERSONAL_INFO.photoUrl}
                    alt="Bhavana Choudhary"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center filter grayscale-[10%] contrast-[105%] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

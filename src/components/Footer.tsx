'use me';
'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-[#23232F] py-12 text-[#A1A1AA] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-white font-extrabold text-lg tracking-wider uppercase">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-xs font-mono text-[#C8FF00]">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-xs text-[#A1A1AA] mt-1">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>

        {/* Middle Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8FF00] transition-colors p-2 rounded-lg bg-[#16161F] border border-[#23232F]"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8FF00] transition-colors p-2 rounded-lg bg-[#16161F] border border-[#23232F]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#C8FF00] transition-colors p-2 rounded-lg bg-[#16161F] border border-[#23232F]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#16161F] border border-[#23232F] text-xs font-mono text-white hover:text-[#C8FF00] hover:border-[#C8FF00]/40 transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#C8FF00]" />
        </button>

      </div>
    </footer>
  );
};

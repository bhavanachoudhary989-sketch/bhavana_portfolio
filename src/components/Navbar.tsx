'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#23232F] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center space-x-2 text-lg sm:text-xl font-bold tracking-wider text-white hover:text-[#C8FF00] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] inline-block animate-pulse"></span>
          <span className="font-extrabold uppercase tracking-widest">{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#C8FF00] bg-[#16161F] border border-[#C8FF00]/30'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#16161F]/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Resume Button */}
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-[#C8FF00] text-black font-semibold text-sm hover:bg-[#B2E600] hover:shadow-[0_0_15px_rgba(200,255,0,0.4)] transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#C8FF00] text-black font-semibold text-xs hover:bg-[#B2E600]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-[#16161F] text-[#A1A1AA] hover:text-white border border-[#23232F] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C8FF00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#23232F] px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#A1A1AA] hover:text-white hover:bg-[#16161F] border border-transparent hover:border-[#23232F] transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-[#C8FF00] text-black font-bold text-base"
            >
              <FileText className="w-5 h-5" />
              <span>View & Download Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

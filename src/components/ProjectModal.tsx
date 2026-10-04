'use me';
'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, ExternalLink, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#16161F] border border-[#23232F] rounded-2xl shadow-2xl z-10 p-6 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 border-b border-[#23232F]">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-2">
                <span>PROJECT DETAILS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-base text-[#C8FF00] font-medium mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-[#0A0A0F] text-[#A1A1AA] hover:text-white border border-[#23232F] hover:border-[#C8FF00]/50 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="py-6 space-y-8 text-sm sm:text-base">
            
            {/* Overview */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                // Overview
              </h4>
              <p className="text-white leading-relaxed bg-[#0A0A0F] p-4 rounded-xl border border-[#23232F]">
                {project.overview}
              </p>
            </div>

            {/* Problem Addressed & What it does */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0F] p-5 rounded-xl border border-[#23232F]">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#C8FF00] mb-2 flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Problem Addressed</span>
                </h4>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {project.problemAddressed}
                </p>
              </div>

              <div className="bg-[#0A0A0F] p-5 rounded-xl border border-[#23232F]">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#C8FF00] mb-2 flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>What It Does</span>
                </h4>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {project.whatItDoes}
                </p>
              </div>
            </div>

            {/* AegisAI Specific Workflow Diagram */}
            {project.workflow && (
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                  // Workflow Sequence
                </h4>
                <div className="bg-[#0A0A0F] p-5 rounded-xl border border-[#23232F] flex flex-wrap items-center gap-2">
                  {project.workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-[#16161F] border border-[#23232F] text-xs sm:text-sm font-medium text-white">
                        {step}
                      </span>
                      {idx < project.workflow!.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#C8FF00] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                // Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2.5 p-3 rounded-lg bg-[#0A0A0F] border border-[#23232F]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                    <span className="text-[#A1A1AA] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                // Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#0A0A0F] border border-[#23232F] text-xs font-mono text-[#C8FF00]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role & Outcome (if available) */}
            {(project.role || project.outcome) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#23232F]">
                {project.role && (
                  <div>
                    <span className="text-xs font-mono text-[#A1A1AA] uppercase">Role:</span>
                    <p className="text-white font-medium mt-1">{project.role}</p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <span className="text-xs font-mono text-[#A1A1AA] uppercase">Outcome:</span>
                    <p className="text-white font-medium mt-1">{project.outcome}</p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Modal Footer Links */}
          <div className="pt-6 border-t border-[#23232F] flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#C8FF00] text-black font-bold text-sm hover:bg-[#B2E600] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {project.linkedInUrl && (
                <a
                  href={project.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#0A0A0F] text-white font-semibold text-sm border border-[#23232F] hover:border-[#C8FF00]/50 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#C8FF00]" />
                  <span>View on LinkedIn</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#0A0A0F] text-white font-semibold text-sm border border-[#23232F] hover:border-[#C8FF00]/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-[#C8FF00]" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#0A0A0F] text-[#A1A1AA] hover:text-white border border-[#23232F] text-sm font-medium transition-all"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

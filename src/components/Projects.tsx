'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Info, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0F] border-t border-[#23232F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#23232F] text-[#C8FF00] text-xs font-mono mb-3">
            <span>// FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#C8FF00]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8FF00] rounded-full mt-4" />
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-4">
            A showcase of software systems, AI simulators, data analytics tools, and cybersecurity solutions built from scratch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-[#16161F] border border-[#23232F] hover:border-[#C8FF00]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,255,0,0.06)] transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div>
                {/* Top Badge & Action Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0F] border border-[#23232F] text-[#C8FF00] group-hover:border-[#C8FF00]/40 transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="p-2 rounded-lg bg-[#0A0A0F] text-[#A1A1AA] group-hover:text-[#C8FF00] group-hover:bg-[#1E1E2A] border border-[#23232F] transition-all"
                    title="View Detailed Specs"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#C8FF00] transition-colors leading-snug">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs text-[#C8FF00] font-mono mt-1">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-[#A1A1AA] text-sm mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#23232F]">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#0A0A0F] border border-[#23232F] text-xs font-mono text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-[#0A0A0F] border border-[#23232F] text-xs font-mono text-[#A1A1AA]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-[#0A0A0F] text-white hover:text-[#C8FF00] border border-[#23232F] hover:border-[#C8FF00]/40 text-xs font-semibold transition-all"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C8FF00]" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-[#0A0A0F] text-[#A1A1AA] hover:text-[#C8FF00] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.linkedInUrl && (
                      <a
                        href={project.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-[#0A0A0F] text-[#A1A1AA] hover:text-[#C8FF00] border border-[#23232F] hover:border-[#C8FF00]/40 transition-all"
                        title="LinkedIn Post"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
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

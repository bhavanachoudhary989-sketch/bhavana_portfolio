'use me';
'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { ProjectModal } from '@/components/ProjectModal';
import { Research } from '@/components/Research';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Achievements } from '@/components/Achievements';
import { Languages } from '@/components/Languages';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#C8FF00] selection:text-black">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Me Section */}
      <About />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Projects Section */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 6. Research Section */}
      <Research />

      {/* 7. Education Section */}
      <Education />

      {/* 8. Certifications Section */}
      <Certifications />

      {/* 9. Achievements Section */}
      <Achievements />

      {/* 10. Languages Section */}
      <Languages />

      {/* 11. Contact Section */}
      <Contact />

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

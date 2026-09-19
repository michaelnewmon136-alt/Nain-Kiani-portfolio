/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickMetrics } from './components/QuickMetrics';
import { BioSection } from './components/BioSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { VideoMotionShowcase } from './components/VideoMotionShowcase';
import { BiotechLabSection } from './components/BiotechLabSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. Key Academic & Professional Metrics */}
        <QuickMetrics />

        {/* 3. Detailed Bio & Dual-Discipline Narrative */}
        <BioSection />

        {/* 4. Creative Portfolio & Design Materials Gallery */}
        <PortfolioGallery />

        {/* 5. Motion Video Campaigns & Interactive Storyboard Player */}
        <VideoMotionShowcase />

        {/* 6. Biotechnology Laboratory & Molecular Protocols */}
        <BiotechLabSection />

        {/* 7. Verified Coursera & Academic Certifications Locker */}
        <CertificationsSection />

        {/* 8. Education, Teaching & Volunteer Experience Timelines */}
        <ExperienceSection />

        {/* 9. Skills & Capabilities Matrix (Including MS Office Suite) */}
        <SkillsSection />

        {/* 10. Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Official 2-Page CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

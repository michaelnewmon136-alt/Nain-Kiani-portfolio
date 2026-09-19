import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Dna, Sparkles, BookOpen, HeartPulse, Check, Globe, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export const BioSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Nain Fatima
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Where Precision Life Sciences Meets Creative Digital Expression
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {PERSONAL_INFO.aboutBio}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Dna className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Molecular Biology & DNA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practical wet-lab DNA extraction, lysis protocols, purification, and molecular genetics coursework at IIUI with a stellar 3.92 CGPA.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-emerald-300 font-medium">
              EDUCBA & Coursera Certified
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Canva Magic Studio AI</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mastery of 13 professional design courses covering brand identity systems, typography, color palettes, marketing collateral, and AI tools.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-amber-300 font-medium">
              13-Course Specialization
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Pedagogy & Classroom</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on teaching experience at Read Foundation School and Hudaya Montessori, mentoring students and tailoring lesson plans.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-teal-300 font-medium">
              Bilingual English & Urdu
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Health & Community Service</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active volunteer coordination for community health screening drives with Al-Khidmat Foundation and Baseera Trust in Islamabad.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-sky-300 font-medium">
              Community Health Logistics
            </div>
          </div>
        </div>

        {/* Detailed Bio Banner & Seeking Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              Current Objective & Internship Goal
            </h4>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              "{PERSONAL_INFO.seekingStatement}"
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Based in Islamabad, Pakistan
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                International Islamic University (IIUI)
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-teal-400" />
                Bilingual: English & Urdu (Fluent)
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
            >
              Propose Internship or Role
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

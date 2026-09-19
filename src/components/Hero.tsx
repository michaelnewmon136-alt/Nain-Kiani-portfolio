import React from 'react';
import { PERSONAL_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';
import { Dna, Award, Sparkles, FileText, ArrowDown, CheckCircle, ExternalLink, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Biotechnology Internships & Creative Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-200 mb-3 flex flex-wrap items-center gap-2">
              <span>{PERSONAL_INFO.title}</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 text-sm font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30">
                GPA 3.92 / 4.0
              </span>
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-6">
              BS Biotechnology student at <strong>International Islamic University, Islamabad</strong> with hands-on laboratory experience in <strong>DNA extraction</strong>, genomics, and genetic disorders, combined with <strong>Coursera certified Canva Essentials (13 courses)</strong> and Generative AI design expertise.
            </p>

            {/* Key Strengths Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                <Dna className="w-3.5 h-3.5 text-emerald-400" />
                DNA Extraction & Genomics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Canva Magic Studio & Branding
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                <Award className="w-3.5 h-3.5 text-teal-400" />
                Research Ethics Certified (IIUI)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Islamabad, Pakistan
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#portfolio"
                id="hero-portfolio-btn"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md hover:shadow-emerald-500/20 transition-all text-center"
              >
                Explore Portfolio Works
              </a>
              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Full CV (2 Pages)</span>
              </button>
              <a
                href="#certifications"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>View 6+ Credentials</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/40 via-teal-500/20 to-amber-500/40 blur-md opacity-70"></div>
              
              <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-2xl backdrop-blur-sm">
                {/* Image Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800/80">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Nain Fatima - Biotechnology Researcher & Designer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-white font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      IIUI Student • BS Biotech
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/90 text-slate-950 font-bold flex items-center gap-1">
                      GPA 3.92 (90.5%)
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid under photo */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                    <span className="text-slate-400">Education</span>
                    <span className="font-medium text-white text-right">BS Biotechnology (2025–Pres)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                    <span className="text-slate-400">Canva Essentials</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      13 Courses Certified
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                    <span className="text-slate-400">Key Focus</span>
                    <span className="font-medium text-slate-200">Genomics + Brand Media</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

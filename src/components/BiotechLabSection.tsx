import React, { useState } from 'react';
import { BIOTECH_DNA_STEPS } from '../data/portfolioData';
import { Dna, TestTube, CheckCircle, ShieldCheck, Microscope, Award, ArrowRight, ExternalLink } from 'lucide-react';

export const BiotechLabSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="biotech-lab" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Microscope className="w-3.5 h-3.5" />
            Biotechnology & Genomic Sciences
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Laboratory Foundations & Molecular Research
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            BS Biotechnology undergraduate at International Islamic University, Islamabad (GPA 3.92 / 4.0), specializing in DNA extraction protocols, genomic sequencing principles, and scientific research ethics.
          </p>
        </div>

        {/* Top Grid: Academic Credibility & Ethics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: IIUI Academic Standing */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  GPA 3.92 / 4.0
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                International Islamic University (IIUI)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Department of Biological Sciences. Rigorous undergraduate curriculum covering Molecular Genetics, Biochemistry, Microbiology, and Bioethics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              Session 2025 – Present • Islamabad
            </div>
          </div>

          {/* Card 2: Genomics & Genetic Disorders */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Dna className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Coursera / EDUCBA
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                DNA, Genome & Genetic Disorders
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certified in structural DNA analysis, genomic organization, chromosomal mutations, single-gene hereditary disorders, and diagnostic pathways.
              </p>
            </div>
            <a
              href="https://coursera.org/verify/ONXIN661L5BV"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-teal-400 font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Verify Coursera ID: ONXIN661L5BV</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Research Ethics & IIUI Faculty */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
                  Webinar Certified
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Research Ethics & Integrity
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Webinar training on academic integrity and reproducibility led by <strong>Dr. Sadaf Anwar</strong> (Assistant Professor, DBS, IIUI) and <strong>Habiba Noor</strong> (CEO, Biotech Squad).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              Completed August 20, 2026 • IIUI Endorsed
            </div>
          </div>
        </div>

        {/* Interactive DNA Extraction Protocol Step-Through */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <TestTube className="w-4 h-4" />
                Laboratory Protocol Walkthrough
              </div>
              <h3 className="text-xl font-bold text-white">
                Hands-On Genomic DNA Extraction Standard Protocol
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Interactive step-by-step methodology practiced during biotechnology laboratory coursework.
              </p>
            </div>

            {/* Step Navigation Pills */}
            <div className="flex items-center gap-2">
              {BIOTECH_DNA_STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeStep === idx
                      ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Step {step.stepNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Phase {BIOTECH_DNA_STEPS[activeStep].stepNumber} of 04
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {BIOTECH_DNA_STEPS[activeStep].title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                {BIOTECH_DNA_STEPS[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold text-amber-400 block mb-1">
                  Key Reagents & Chemical Catalysts:
                </span>
                <span className="text-xs text-slate-200 font-mono">
                  {BIOTECH_DNA_STEPS[activeStep].keyReagents}
                </span>
              </div>
            </div>

            {/* Step Visual Indicator Card */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-4xl font-black text-slate-800">
                  {BIOTECH_DNA_STEPS[activeStep].stepNumber}
                </span>
                <h5 className="text-sm font-bold text-emerald-400 mt-2">
                  Quality Assurance Metric
                </h5>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Careful pipetting and temperature control prevent shearing of long high-molecular-weight genomic DNA strands.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-[11px] text-slate-400">Next stage:</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % BIOTECH_DNA_STEPS.length)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

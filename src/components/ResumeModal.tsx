import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyContact = () => {
    const text = `${PERSONAL_INFO.fullName}\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nLocation: ${PERSONAL_INFO.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Curriculum Vitae Document
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400">2 Pages (Official Record)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyContact}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Copy Contact Info"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Info'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 bg-slate-950/40">
          {/* Paper Sheet 1 (Page 1 of Resume) */}
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-lg border border-slate-200 font-sans text-xs leading-relaxed max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center pb-5 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mb-1">
                NAIN FATIMA
              </h1>
              <div className="text-xs text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>{PERSONAL_INFO.location}</span>
                <span>|</span>
                <span className="font-semibold text-slate-900">{PERSONAL_INFO.phone}</span>
                <span>|</span>
                <span className="font-semibold text-slate-900">{PERSONAL_INFO.email}</span>
                <span>|</span>
                <a
                  href={`https://${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {PERSONAL_INFO.linkedin}
                </a>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-800 mt-2">
                Biotechnology Undergraduate
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-slate-800 text-[11px] sm:text-xs leading-normal">
                BS Biotechnology student at International Islamic University, Islamabad, with hands-on experience in DNA extraction and coursework in genomics and genetic disorders. Certified in research ethics and academic integrity, with a working foundation in laboratory techniques, scientific communication, and digital content tools (MS Office, Canva). Seeking to apply laboratory skills and a strong academic record in a research or biotechnology-focused internship.
              </p>
            </div>

            {/* Section: Core Competencies */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                CORE COMPETENCIES
              </h2>
              <div className="space-y-1 text-[11px] sm:text-xs text-slate-800">
                <p>
                  <strong>Laboratory & Technical:</strong> DNA Extraction • Genomics Fundamentals • Genetic Disorders • Research Ethics & Academic Integrity
                </p>
                <p>
                  <strong>Tools & Software:</strong> Microsoft Office (Word, Excel, PowerPoint) • Canva • Generative AI Tools • Video Editing
                </p>
                <p>
                  <strong>Professional:</strong> Scientific Communication • Content Writing • Social Media Management • Cybersecurity Awareness • Bilingual (Urdu, English: fluent)
                </p>
              </div>
            </div>

            {/* Section: Education */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                EDUCATION
              </h2>
              <div className="space-y-3 text-[11px] sm:text-xs">
                <div>
                  <div className="flex items-center justify-between font-bold text-slate-950">
                    <span>BS in Biotechnology</span>
                    <span className="font-mono text-slate-700">2025 – Present</span>
                  </div>
                  <div className="text-slate-700 italic">
                    International Islamic University, Islamabad, Pakistan
                  </div>
                  <div className="font-semibold text-emerald-800 mt-0.5">
                    • Current GPA: 3.92 / 4.0 (90.5%)
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-slate-950">
                    <span>FSc Pre-Medical</span>
                    <span className="font-mono text-slate-700">2022 – 2024</span>
                  </div>
                  <div className="text-slate-700 italic">
                    Federal Board of Intermediate and Secondary Education (FBISE)
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-slate-950">
                    <span>Matriculation (Biology, Chemistry, Physics, Mathematics)</span>
                    <span className="font-mono text-slate-700">2020 – 2022</span>
                  </div>
                  <div className="text-slate-700 italic">
                    Federal Board of Intermediate and Secondary Education (FBISE)
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Certifications & Training */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                CERTIFICATIONS & TRAINING
              </h2>
              <ul className="space-y-1 text-[11px] sm:text-xs text-slate-800 list-disc list-inside">
                <li>
                  <strong>DNA, Genome and Genetic Disorders:</strong> EDUCBA, via Coursera (2026)
                </li>
                <li>
                  <strong>Research Ethics: Building Academic Integrity & Credibility in Scientific Research:</strong> Biotech Squad webinar (Aug 2026)
                </li>
                <li>
                  <strong>Generative AI:</strong> Workshop Certificate (Google Cloud / Coursera)
                </li>
                <li>
                  <strong>Cybersecurity Awareness:</strong> Workshop Certificate (2025)
                </li>
                <li>
                  <strong>MS Excel Basics:</strong> Workshop Certificate
                </li>
                <li>
                  <strong>Canva Essentials:</strong> Coursera Professional Certificate (13 Courses)
                </li>
              </ul>
            </div>

            {/* Section: Experience (Part 1 on Page 1) */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                EXPERIENCE
              </h2>
              <div>
                <div className="flex items-center justify-between font-bold text-slate-950">
                  <span>Teacher</span>
                  <span className="font-mono text-slate-700">Apr 2025 – Aug 2025</span>
                </div>
                <div className="text-slate-700 italic mb-1">
                  Read Foundation School, Bugna, Muzaffarabad
                </div>
                <ul className="space-y-1 text-[11px] text-slate-800 list-disc list-inside">
                  <li>Delivered daily lesson plans across core subjects to a full classroom, adapting instruction to a range of learning paces.</li>
                  <li>Assessed student progress and communicated performance updates to school administration.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center text-[10px] text-slate-400 pt-2 border-t border-slate-200">
              Page 1 of 2 • Nain Fatima CV
            </div>
          </div>

          {/* Paper Sheet 2 (Page 2 of Resume) */}
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-lg border border-slate-200 font-sans text-xs leading-relaxed max-w-3xl mx-auto">
            {/* Header continued */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-300 mb-4 text-[11px] text-slate-600">
              <span className="font-bold text-slate-900">NAIN FATIMA — CURRICULUM VITAE</span>
              <span>Page 2 of 2</span>
            </div>

            {/* Experience Continued */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                EXPERIENCE (CONTINUED)
              </h2>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-950">
                  <span>Teacher</span>
                  <span className="font-mono text-slate-700">Nov 2024 – Jan 2025</span>
                </div>
                <div className="text-slate-700 italic mb-1">
                  Hudaya Montessori, Bahria Phase VII, Islamabad
                </div>
                <ul className="space-y-1 text-[11px] text-slate-800 list-disc list-inside">
                  <li>Planned and led early-childhood learning activities, strengthening communication and classroom management skills.</li>
                </ul>
              </div>
            </div>

            {/* Section: Volunteer Experience */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-400 mb-2">
                VOLUNTEER EXPERIENCE
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-slate-950">Volunteer: School Community</div>
                  <div className="text-slate-700 italic">
                    Hudaya Montessori, Bahria Phase VII, Islamabad
                  </div>
                </div>

                <div>
                  <div className="font-bold text-slate-950">
                    Volunteer: Community Health Screening
                  </div>
                  <div className="text-slate-700 italic mb-1">
                    Al-Khidmat Foundation, in partnership with Baseera Trust, Alipur, Islamabad
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-800 list-disc list-inside">
                    <li>Supported logistics and participant coordination for a community health screening drive.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Verification Footer Note */}
            <div className="mt-12 p-4 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p>
                <strong>Academic Verification:</strong> Current BS Biotechnology enrollment verified at International Islamic University, Islamabad.
              </p>
              <p>
                <strong>Coursera Certificates:</strong> Verifiable online at coursera.org with unique learner hashes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

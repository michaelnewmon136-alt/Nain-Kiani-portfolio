import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, CheckCircle, ExternalLink, ChevronDown, ChevronUp, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [expandedCertId, setExpandedCertId] = useState<string | null>('canva-essentials');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCertId(expandedCertId === id ? null : id);
  };

  return (
    <section id="certifications" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials & Accreditations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications & Training
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Every certification is formally verified with official credential IDs, spanning the comprehensive 13-course Coursera Canva Essentials specialization, Google Cloud Generative AI, and genomic sciences.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isExpanded = expandedCertId === cert.id;
            return (
              <div
                key={cert.id}
                className={`rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                  cert.id === 'canva-essentials'
                    ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-amber-300 border border-amber-500/30">
                      {cert.accreditationBadge || 'Certified'}
                    </span>
                    <span className="text-xs text-slate-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Issued by: {cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Learned Badges */}
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Competencies Validated:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 13 Canva Courses Accordion (if applicable) */}
                  {cert.coursesIncluded && (
                    <div className="mt-4 pt-4 border-t border-slate-800">
                      <button
                        onClick={() => toggleExpand(cert.id)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-amber-300 hover:text-amber-200 py-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          View All 13 Curriculum Courses
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1 text-xs text-slate-300">
                          {cert.coursesIncluded.map((c, i) => (
                            <div
                              key={i}
                              className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-2"
                            >
                              <span className="text-[10px] font-mono text-amber-400 font-bold mt-0.5">
                                #{i + 1}
                              </span>
                              <span className="text-[11px] leading-tight">{c}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer with Verification Link */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  {cert.credentialId ? (
                    <div className="text-[11px] font-mono text-slate-400">
                      ID: <span className="text-slate-200 font-semibold">{cert.credentialId}</span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-400">
                      Academic Verification
                    </div>
                  )}

                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <span>Verify on Coursera</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Program
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

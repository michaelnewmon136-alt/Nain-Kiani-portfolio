import React, { useState } from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase, HeartHandshake, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const teachingExperience = EXPERIENCE_DATA.filter((e) => e.type === 'Teaching');
  const volunteerExperience = EXPERIENCE_DATA.filter((e) => e.type === 'Volunteer');

  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Journey & Professional Practice
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education, Teaching & Community
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From academic distinction at International Islamic University to hands-on classroom instruction and public health volunteer leadership.
            </p>
          </div>

          {/* Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education (IIUI & FBISE)</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Teaching & Volunteering</span>
            </button>
          </div>
        </div>

        {/* Education Timeline Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    {edu.scoreOrGpa && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {edu.scoreOrGpa}
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-medium text-emerald-400">
                    {edu.institution}
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience & Volunteer Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {/* Teaching Experience Sub-section */}
            <div>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Teaching & Instructional Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachingExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <div className="text-xs font-semibold text-amber-400 mb-3">
                        {exp.organization} • {exp.location}
                      </div>

                      <ul className="space-y-2 pt-2 border-t border-slate-800">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer & Community Service Sub-section */}
            <div>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-400" />
                Community Health & Civic Volunteering
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteerExperience.map((vol, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                          Volunteer Service
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {vol.period}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1">
                        {vol.role}
                      </h4>
                      <div className="text-xs font-semibold text-teal-300 mb-3">
                        {vol.organization} • {vol.location}
                      </div>

                      <ul className="space-y-2 pt-2 border-t border-slate-800">
                        {vol.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

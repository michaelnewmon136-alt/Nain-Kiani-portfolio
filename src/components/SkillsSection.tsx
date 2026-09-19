import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Dna, Palette, Laptop, MessageSquare, CheckCircle, Sparkles, Shield, Clock, Flame, Target } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Dna,
  Palette,
  Laptop,
  MessageSquare
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies & Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical, Design & Communication Matrix
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            A comprehensive matrix of verified capabilities spanning laboratory molecular extraction, Canva Magic Studio design systems, Microsoft Office automation, and pedagogical delivery.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                            {skill.level}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {skill.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MS Office Suite Professional Spotlight (echoing user's uploaded infographic) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Productivity Suite Standard
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              MS Office Professional Execution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Advanced document creation, data modeling formulas, and executive presentation engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Word */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 font-black text-xs flex items-center justify-center border border-blue-500/30">
                  W
                </span>
                <span className="text-sm font-bold text-white">Microsoft Word</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">• Document Creation & Layout</li>
                <li className="flex items-center gap-1.5">• Academic Report Formatting</li>
                <li className="flex items-center gap-1.5">• Scientific Citation Systems</li>
              </ul>
            </div>

            {/* Excel */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-md bg-emerald-600/20 text-emerald-400 font-black text-xs flex items-center justify-center border border-emerald-500/30">
                  X
                </span>
                <span className="text-sm font-bold text-white">Microsoft Excel</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">• Accurate Data Entry & Cleaning</li>
                <li className="flex items-center gap-1.5">• Calculations & Custom Formulas</li>
                <li className="flex items-center gap-1.5">• Dynamic Charts & Visual Graphs</li>
              </ul>
            </div>

            {/* PowerPoint */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-md bg-amber-600/20 text-amber-400 font-black text-xs flex items-center justify-center border border-amber-500/30">
                  P
                </span>
                <span className="text-sm font-bold text-white">Microsoft PowerPoint</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">• Executive Business Presentations</li>
                <li className="flex items-center gap-1.5">• Custom Slide Design Systems</li>
                <li className="flex items-center gap-1.5">• Visual Transitions & Timing</li>
              </ul>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-center">
            <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
              <Target className="w-4 h-4 text-sky-400 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-white">Accurate</div>
              <div className="text-[10px] text-slate-400">Delivers error-free work</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
              <Clock className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-white">Efficient</div>
              <div className="text-[10px] text-slate-400">Completes tasks on time</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
              <Flame className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-white">Creative</div>
              <div className="text-[10px] text-slate-400">Impactful design visuals</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
              <Shield className="w-4 h-4 text-teal-400 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-white">Reliable</div>
              <div className="text-[10px] text-slate-400">Consistent quality trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

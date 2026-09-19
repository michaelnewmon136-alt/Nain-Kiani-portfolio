import React from 'react';
import { QUICK_METRICS } from '../data/portfolioData';
import { GraduationCap, Award, Dna, Users } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Award,
  Dna,
  Users
};

export const QuickMetrics: React.FC = () => {
  return (
    <section className="py-8 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_METRICS.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Award;
            return (
              <div
                key={idx}
                className="relative p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/60 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {metric.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-tight">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

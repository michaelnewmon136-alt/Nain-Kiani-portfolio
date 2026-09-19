import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Dna, ArrowUp, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Dna className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              BS Biotechnology student at International Islamic University Islamabad (GPA 3.92/4.0). Integrating molecular life sciences with professional Canva Magic Studio visual design.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>All certificates & materials verified with official hashes</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              Portfolio Navigation
            </div>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About & Bio</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Design Showcase</a></li>
              <li><a href="#motion-videos" className="hover:text-emerald-400 transition-colors">Motion Video Campaigns</a></li>
              <li><a href="#biotech-lab" className="hover:text-emerald-400 transition-colors">Biotech Lab & DNA</a></li>
              <li><a href="#certifications" className="hover:text-emerald-400 transition-colors">Coursera Credentials</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Experience & Teaching</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              Contact & Links
            </div>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="text-slate-500">Email: </span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-white">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500">Phone: </span>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-500">LinkedIn: </span>
                <a
                  href={`https://${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>{PERSONAL_INFO.linkedin}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 hover:bg-slate-800 transition-colors text-xs font-semibold"
              >
                Inspect Official 2-Page CV
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & built for professional presentation.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

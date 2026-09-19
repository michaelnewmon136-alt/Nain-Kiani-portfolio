import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { X, Calendar, User, Tag, CheckCircle2, Wrench, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>
          <button
            onClick={onClose}
            id="close-modal-btn"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Main Visual Image */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[480px] object-contain mx-auto"
            />
          </div>

          {/* Title & Client Context */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-400 font-medium flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              Client / Application Context: {project.clientOrContext}
            </p>
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-300 leading-relaxed">
            {project.description}
          </div>

          {/* Highlights & Design Execution */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Design & Technical Highlights
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metadata Grid (if any) */}
          {project.metadataDetails && project.metadataDetails.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-400" />
                Project Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metadataDetails.map((meta, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60"
                  >
                    <div className="text-[11px] text-slate-400">{meta.label}</div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {meta.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Skills Utilized */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-amber-400" />
              Competencies & Software Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-5 py-3.5 border-t border-slate-800/80 bg-slate-950/80 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Nain Fatima Portfolio • Verified Material
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

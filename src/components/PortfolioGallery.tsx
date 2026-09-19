import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, Layers, Sparkles, Filter, ArrowUpRight } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'branding', label: 'Brand Identity & Infographics' },
    { id: 'certificates', label: 'Graduation & Credentials' },
    { id: 'print', label: 'Stationery & Invitations' },
    { id: 'social', label: 'Social Media & YouTube' },
    { id: 'biotech', label: 'Biotech & Research' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Design & Brand Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Design Works & Materials
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From corporate brand identity systems and formal certificates to high-CTR YouTube thumbnails and luxury event stationery.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="text-emerald-400 font-bold">{filteredProjects.length}</span> verified showcase pieces
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1 pl-1 pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900/80 text-slate-300 backdrop-blur-md">
                    {project.date}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-950 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-amber-400 mb-1">
                    {project.clientOrContext}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsUsed.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/70 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.toolsUsed.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400">
                        +{project.toolsUsed.length - 2}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-emerald-400 flex items-center gap-0.5 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

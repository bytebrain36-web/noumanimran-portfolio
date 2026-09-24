import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { 
  FolderGit2, ExternalLink, ArrowRight, 
  Layers, ShieldAlert, Radio, Bot 
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'BUILDING', 'EXPERIMENTAL'];

  const filteredProjects = projects.filter(p => {
    if (filter === 'ALL') return true;
    return p.status === filter;
  });

  const getProjectIcon = (name?: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert size={24} className="text-cyber-green" />;
      case 'Radio':
        return <Radio size={24} className="text-cyber-cyan" />;
      case 'Layers':
        return <Layers size={24} className="text-emerald-400" />;
      case 'Bot':
      default:
        return <Bot size={24} className="text-cyber-green" />;
    }
  };

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
            <FolderGit2 size={14} />
            <span>[ 04 // APPLIED PROTOTYPES ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-sm font-mono text-slate-400">
            PRACTICAL CIVIC, ENTERPRISE & AI EXPERIMENTS IN ACTIVE DEVELOPMENT.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filter === cat
                  ? 'bg-cyber-green text-black font-bold shadow-cyber-sm'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl glass-panel border border-white/10 hover:border-cyber-green/40 hover:shadow-cyber-md transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
          >
            {/* Top Interactive Banner / Visual Representation */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-b from-white/[0.04] to-transparent border-b border-white/10">
              
              {/* Scanline Grid Pattern */}
              <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />

              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                {/* Project Icon Frame */}
                <div className="w-14 h-14 rounded-2xl bg-black/60 border border-cyber-green/30 group-hover:border-cyber-green flex items-center justify-center shadow-cyber-sm transition-all group-hover:scale-105">
                  {getProjectIcon(project.iconName)}
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold border tracking-wider ${
                    project.status === 'BUILDING'
                      ? 'bg-cyber-green/15 text-cyber-green border-cyber-green/40 shadow-[0_0_8px_rgba(0,255,102,0.2)]'
                      : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                  }`}>
                    {project.status === 'BUILDING' ? '🟢 BUILDING' : '⚡ EXPERIMENTAL'}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="relative z-10 space-y-1.5">
                <span className="text-[11px] font-mono text-cyber-cyan tracking-widest uppercase block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-cyber-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Middle: Description & Tech Stack */}
            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">
                  SYSTEM COMPONENTS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-black/30 flex items-center justify-between gap-3 text-xs font-mono">
              <button
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 text-cyber-green hover:underline font-bold"
              >
                <span>SYSTEM BLUEPRINT</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <GithubIcon size={15} />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyber-green/15 text-cyber-green hover:bg-cyber-green hover:text-black border border-cyber-green/30 font-bold transition-all"
                  >
                    <span>LIVE</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

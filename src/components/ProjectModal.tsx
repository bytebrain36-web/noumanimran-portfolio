import { useEffect } from 'react';
import type { ProjectItem } from '../types/portfolio';
import { 
  X, ExternalLink, CheckCircle2, AlertCircle, 
  Layers, Terminal, ArrowRight, Sparkles, Shield
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
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
      className="fixed inset-0 z-[9980] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Blueprint`}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] my-auto bg-cyber-surface/95 rounded-2xl border border-cyber-green/40 shadow-cyber-lg overflow-y-auto font-sans text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Top HUD Header bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-cyber-surface/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
            <span className="font-mono text-xs text-cyber-green font-bold tracking-wider uppercase">
              PROJECT ARCHIVE // {project.id}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
              STATUS: {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Hero Banner inside modal */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-cyber-cyan">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-slate-400">ARCHITECT: NOUMAN IMRAN</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base md:text-lg text-slate-300 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-green text-black font-semibold text-sm hover:bg-cyber-green-hover transition-all shadow-cyber-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
              >
                <GithubIcon size={16} />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div className="p-4 rounded-xl glass-panel space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal size={14} className="text-cyber-green" /> Technology Stack
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyber-green/10 text-cyber-green border border-cyber-green/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Abstract Cyber UI Preview Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-slate-300">system://preview/{project.id}</span>
              </div>
              <span className="text-cyber-green flex items-center gap-1">
                <Sparkles size={12} /> PROTOTYPE_SIMULATION
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs md:text-sm text-slate-300 leading-relaxed">
              <p className="text-slate-200">
                <span className="text-cyber-cyan font-bold">&gt; SYSTEM OVERVIEW:</span> {project.overview}
              </p>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl glass-panel border-l-4 border-l-amber-500/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <AlertCircle size={16} />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border-l-4 border-l-cyber-green space-y-2">
              <div className="flex items-center gap-2 text-cyber-green font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Checklist */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Layers size={16} className="text-cyber-cyan" /> Core Architectural Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <CheckCircle2 size={16} className="text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Progress & Future Roadmap */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl glass-panel space-y-2">
              <span className="text-xs font-mono text-cyber-green uppercase tracking-wider flex items-center gap-1.5">
                <Shield size={14} /> Current Implementation Status
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.currentProgress}
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel space-y-2">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
                <ArrowRight size={14} /> Future Roadmap & Targets
              </span>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {project.futurePlans.map((plan, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-cyber-cyan font-bold">•</span>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>NOUMAN.OS // ARCHIVE VERIFIED</span>
          <button
            onClick={onClose}
            className="text-xs text-cyber-green hover:underline font-mono"
          >
            [Close Window]
          </button>
        </div>
      </div>
    </div>
  );
};

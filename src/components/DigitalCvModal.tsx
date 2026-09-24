import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  X, Printer, Mail, MapPin, GraduationCap, 
  CheckCircle2, Award, Terminal, Phone
} from 'lucide-react';

interface DigitalCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalCvModal: React.FC<DigitalCvModalProps> = ({ isOpen, onClose }) => {
  const { personalInfo, skills, projects, achievements, aboutTimeline } = portfolioData;

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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-[9985] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Nouman Imran Digital Curriculum Vitae"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] my-auto bg-slate-950 dark:bg-[#070a11] text-slate-100 rounded-2xl border border-cyber-green/40 shadow-cyber-lg overflow-y-auto font-sans print-cv-container"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Floating Control Bar (Hidden during print) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green" />
            <span className="font-mono text-xs text-cyber-green font-bold tracking-widest uppercase">
              NOUMAN IMRAN // VERIFIED DIGITAL CV
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyber-green text-black font-semibold text-xs hover:bg-cyber-green-hover transition-all shadow-cyber-sm"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">DOWNLOAD / PRINT CV</span>
              <span className="sm:hidden">PRINT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
              aria-label="Close CV"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Document Layout */}
        <div className="p-6 md:p-12 space-y-8 bg-slate-950/60 print:bg-white print:text-black print:p-0">
          {/* Header Section */}
          <div className="border-b border-white/15 print:border-black/20 pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="mt-1 text-base md:text-lg font-medium text-cyber-green print:text-emerald-700">
                  AI Enthusiast • Software Developer • Cybersecurity Learner
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs md:text-sm text-slate-300 print:text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-cyber-cyan print:text-sky-600" />
                    {personalInfo.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-cyber-green print:text-emerald-600" />
                    {personalInfo.education}
                  </span>
                  <span>•</span>
                  <a 
                    href={`mailto:${portfolioData.socialLinks.email}`}
                    className="flex items-center gap-1.5 hover:text-cyber-green transition-colors"
                  >
                    <Mail size={14} className="text-slate-400 print:text-slate-600" />
                    {portfolioData.socialLinks.email}
                  </a>
                  {portfolioData.socialLinks.whatsappDisplay && (
                    <>
                      <span>•</span>
                      <a 
                        href={portfolioData.socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-cyber-green transition-colors"
                      >
                        <Phone size={14} className="text-cyber-green print:text-emerald-600" />
                        {portfolioData.socialLinks.whatsappDisplay}
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Monogram Badge */}
              <div className="w-16 h-16 rounded-2xl bg-cyber-green/10 print:border print:border-black/20 border border-cyber-green/30 flex items-center justify-center font-mono font-bold text-lg text-cyber-green print:text-black shrink-0">
                {personalInfo.monogram}
              </div>
            </div>

            {/* Profile Statement */}
            <p className="mt-4 text-xs md:text-sm text-slate-300 print:text-slate-800 leading-relaxed font-normal">
              {personalInfo.shortIntro} Dedicated to building practical civic and business software platforms while deeply exploring Python automation, React full-stack web development, and defensive cybersecurity practices.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-green print:text-emerald-800 font-bold flex items-center gap-2">
              <GraduationCap size={15} /> Academic Background
            </h2>
            <div className="grid gap-3">
              {aboutTimeline.slice(0, 2).map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 print:border-black/10 print:bg-transparent"
                >
                  <div className="flex items-baseline justify-between text-xs md:text-sm font-semibold">
                    <span className="text-white print:text-black">{item.title}</span>
                    <span className="font-mono text-cyber-cyan print:text-sky-700 text-xs">{item.year}</span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                    {item.subtitle} — {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-green print:text-emerald-800 font-bold flex items-center gap-2">
              <Terminal size={15} /> Technical Skills & Competencies
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {(['programming', 'development', 'ai', 'cybersecurity', 'creative'] as const).map(category => {
                const categorySkills = skills.filter(s => s.category === category);
                return (
                  <div 
                    key={category}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 print:border-black/10 print:bg-transparent"
                  >
                    <span className="text-[11px] font-mono uppercase text-cyber-cyan print:text-sky-700 font-bold block mb-1.5">
                      {category}
                    </span>
                    <ul className="space-y-1">
                      {categorySkills.map(skill => (
                        <li key={skill.name} className="flex items-center justify-between text-xs text-slate-300 print:text-slate-800">
                          <span>{skill.name}</span>
                          <span className="text-[10px] font-mono text-slate-400 print:text-slate-600">
                            {skill.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-green print:text-emerald-800 font-bold flex items-center gap-2">
              <CheckCircle2 size={15} /> Highlighted Projects
            </h2>
            <div className="space-y-3">
              {projects.map(proj => (
                <div 
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 print:border-black/10 print:bg-transparent"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-white print:text-black">{proj.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 print:border-black/20 text-cyber-green print:text-emerald-700">
                      STATUS: {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.techStack.map(t => (
                      <span key={t} className="text-[10px] font-mono text-slate-400 print:text-slate-600 bg-white/5 px-1.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Milestones & Honors */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-green print:text-emerald-800 font-bold flex items-center gap-2">
              <Award size={15} /> Honors & Milestones
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {achievements.map(ach => (
                <div 
                  key={ach.id}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 print:border-black/10 print:bg-transparent"
                >
                  <Award size={16} className="text-cyber-green print:text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white print:text-black block">{ach.title}</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600">{ach.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="no-print px-6 py-4 border-t border-white/10 bg-slate-950/80 text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>NOUMAN IMRAN • LAHORE, PAKISTAN</span>
          <button onClick={onClose} className="text-cyber-green hover:underline">
            Close CV [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, GraduationCap, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personalInfo, aboutTimeline } = portfolioData;

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
          <User size={14} />
          <span>[ 02 // PERSONAL ORIGIN ]</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          WHO IS NOUMAN?
        </h2>
        <p className="text-sm font-mono text-slate-400">
          AN AUTHENTIC SNAPSHOT OF CURRENT FOCUS, STUDIES & TECHNICAL OBJECTIVES.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Personal Narrative & Philosophy (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-accent border border-cyber-green/20 space-y-4 text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
            {personalInfo.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Key Focus Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-cyber-green tracking-wider font-bold block">
                ACTIVE DOMAINS OF EXPLORATION
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.currentFocus.map(focus => (
                  <span
                    key={focus}
                    className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200 hover:border-cyber-green/40 hover:text-cyber-green transition-colors"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Identity HUD Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">CURRENT ENROLLMENT</span>
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <GraduationCap size={16} className="text-cyber-green" />
                <span>ICS (1st Year)</span>
              </div>
              <span className="text-xs text-slate-400">Computer Science</span>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">LOCATION BASE</span>
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <Compass size={16} className="text-cyber-cyan" />
                <span>Lahore, PK</span>
              </div>
              <span className="text-xs text-slate-400">Punjab Province</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Education & Evolution Timeline (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold flex items-center gap-2">
              <Sparkles size={14} /> CHRONOLOGICAL PROGRESSION
            </span>
            <span className="text-[11px] font-mono text-slate-500">2025 → BEYOND</span>
          </div>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyber-green before:via-cyber-cyan before:to-emerald-600">
            {aboutTimeline.map((item, idx) => {
              const isFuture = item.year === 'FUTURE';
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    isFuture
                      ? 'bg-cyber-cyan/30 border-cyber-cyan shadow-[0_0_10px_#00f0ff]'
                      : 'bg-cyber-green/40 border-cyber-green shadow-[0_0_10px_#00ff66]'
                  }`} />

                  {/* Card */}
                  <div className="p-5 rounded-2xl glass-panel border border-white/10 group-hover:border-cyber-green/40 transition-all space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isFuture
                          ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                          : 'bg-cyber-green/15 text-cyber-green border border-cyber-green/30'
                      }`}>
                        {item.year}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyber-green transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-cyber-cyan font-mono">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

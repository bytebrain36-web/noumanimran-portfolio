import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const { journeyTimeline } = portfolioData;

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'education':
        return { text: 'EDUCATION', color: 'text-cyber-green bg-cyber-green/10 border-cyber-green/30' };
      case 'milestone':
        return { text: 'MILESTONE', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' };
      case 'future':
        return { text: 'FUTURE TARGET', color: 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30' };
      case 'learning':
      default:
        return { text: 'EXPERIMENT', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' };
    }
  };

  return (
    <section id="journey" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
          <Compass size={14} />
          <span>[ 05 // TRAJECTORY & EXPERIENCE ]</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          MY JOURNEY
        </h2>
        <p className="text-sm font-mono text-slate-400">
          A TRANSPARENT TIMELINE OF EDUCATION, DISCOVERY, BUILDS & FUTURE HORIZONS.
        </p>
      </div>

      {/* Timeline Tree */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {journeyTimeline.map((item, idx) => {
          const badge = getTypeBadge(item.type);
          const isTarget = item.type === 'future';

          return (
            <div key={idx} className="relative group">
              {/* Pulsing Node on timeline */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                isTarget 
                  ? 'bg-cyber-cyan/30 border-cyber-cyan shadow-[0_0_12px_#00f0ff]' 
                  : 'bg-cyber-green/30 border-cyber-green shadow-[0_0_12px_#00ff66]'
              }`} />

              {/* Content Card */}
              <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 group-hover:border-cyber-green/40 group-hover:shadow-cyber-sm transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded">
                      {item.year}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${badge.color}`}>
                      {badge.text}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyber-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyber-cyan mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

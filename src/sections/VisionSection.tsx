import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Rocket, Cpu, Shield, Terminal, 
  Sparkles, Video, ChevronDown, ChevronUp 
} from 'lucide-react';

export const VisionSection: React.FC = () => {
  const { visionGoals } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu size={24} className="text-cyber-green" />;
      case 'Shield':
        return <Shield size={24} className="text-cyber-cyan" />;
      case 'Terminal':
        return <Terminal size={24} className="text-emerald-400" />;
      case 'Rocket':
        return <Rocket size={24} className="text-amber-400" />;
      case 'Sparkles':
        return <Sparkles size={24} className="text-sky-400" />;
      case 'Video':
      default:
        return <Video size={24} className="text-cyber-green" />;
    }
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-4 mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase bg-cyber-cyan/10 border border-cyber-cyan/30 px-3.5 py-1.5 rounded-full">
          <Rocket size={14} />
          <span>[ 08 // FUTURE HORIZONS ]</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          WHERE I'M GOING
        </h2>

        <p className="text-lg sm:text-xl font-display font-semibold text-cyber-green">
          "I don't want to only learn technology. I want to build with it."
        </p>

        <p className="text-xs sm:text-sm font-mono text-slate-400">
          CLEAR ASPIRATIONAL TRAJECTORIES BEING LAID TODAY THROUGH DISCIPLINE AND CREATIVE EXPERIMENTATION.
        </p>
      </div>

      {/* Expandable Goals Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visionGoals.map((goal, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={goal.title}
              onClick={() => toggleExpand(idx)}
              className={`p-6 rounded-3xl glass-panel border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                isExpanded 
                  ? 'border-cyber-green/50 bg-cyber-surface/90 shadow-cyber-md' 
                  : 'border-white/10 hover:border-white/25 hover:bg-white/[0.03]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(goal.iconName)}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    GOAL 0{idx + 1}
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyber-green transition-colors">
                    {goal.title}
                  </h3>
                  <span className="text-xs font-mono text-cyber-cyan block mt-0.5">
                    {goal.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {goal.description}
                </p>

                {/* Expandable Detail Panel */}
                {isExpanded && (
                  <div className="pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
                    <span className="text-[10px] font-mono uppercase text-cyber-green font-bold block">
                      HORIZON FOCUS AREAS
                    </span>
                    <p className="text-xs font-mono text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      {goal.futureFocus}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-500">TYPE: ASPIRATION</span>
                <span className="text-cyber-green group-hover:underline">
                  {isExpanded ? 'Collapse' : 'Inspect Path'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

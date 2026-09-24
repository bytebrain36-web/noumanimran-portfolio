import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Target, Radio, ArrowRight, Activity } from 'lucide-react';

export const LearningSection: React.FC = () => {
  const { missions } = portfolioData;

  return (
    <section id="learning" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
            <Radio size={14} className="animate-pulse" />
            <span>[ 07 // CONTINUOUS UPGRADE PROTOCOL ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            CURRENT MISSION
          </h2>
          <p className="text-sm font-mono text-slate-400">
            ACTIVE LEARNING SPRINT: PRESENT CAPABILITIES VS NEXT TECHNICAL MILESTONES.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
          <span>8 CONCURRENT STREAMS ACTIVE</span>
        </div>
      </div>

      {/* Mission Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {missions.map((mission, idx) => (
          <div
            key={mission.title}
            className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyber-cyan/40 hover:shadow-cyan-sm transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Corner Decorative HUD line */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-cyan/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyber-cyan font-bold tracking-widest uppercase bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
                  {mission.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  STREAM // 0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyber-cyan transition-colors">
                {mission.title}
              </h3>

              {/* CURRENT STATUS */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyber-green font-semibold uppercase">
                  <Activity size={12} />
                  <span>CURRENT STATUS</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {mission.currentStatus}
                </p>
              </div>

              {/* NEXT TARGET */}
              <div className="p-3 rounded-xl bg-cyber-cyan/[0.03] border border-cyber-cyan/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyber-cyan font-semibold uppercase">
                  <Target size={12} />
                  <span>NEXT TARGET</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {mission.nextTarget}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>STATUS: IN PROGRESS</span>
              <span className="text-cyber-cyan flex items-center gap-1">
                ADVANCING <ArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

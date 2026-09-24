import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, GraduationCap, Code2, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Trophy':
        return <Trophy size={26} className="text-amber-400" />;
      case 'Award':
        return <Award size={26} className="text-cyber-green" />;
      case 'GraduationCap':
        return <GraduationCap size={26} className="text-cyber-cyan" />;
      case 'Code2':
        return <Code2 size={26} className="text-emerald-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={26} className="text-cyber-green" />;
    }
  };

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-10 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
          <Trophy size={14} />
          <span>[ 06 // RECOGNITIONS & MILESTONES ]</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          HONORS & MILESTONES
        </h2>
        <p className="text-sm font-mono text-slate-400">
          VERIFIED ACADEMIC AND PRACTICAL BUILDER DISTINCTIONS.
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {achievements.map((item, idx) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyber-green/40 hover:shadow-cyber-sm transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  #0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-cyber-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20 uppercase tracking-widest font-semibold block text-center">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

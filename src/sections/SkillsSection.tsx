import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory, SkillLevel } from '../types/portfolio';
import { 
  Code, Terminal, Cpu, Shield, Palette, 
  Search, Sparkles, Filter 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: SkillCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'ALL SKILLS', icon: <Filter size={14} /> },
    { id: 'programming', label: 'PROGRAMMING', icon: <Code size={14} /> },
    { id: 'web', label: 'DEVELOPMENT', icon: <Terminal size={14} /> },
    { id: 'ai', label: 'AI', icon: <Cpu size={14} /> },
    { id: 'cybersecurity', label: 'CYBERSECURITY', icon: <Shield size={14} /> },
    { id: 'creative', label: 'CREATIVE', icon: <Palette size={14} /> },
  ];

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'BUILDING':
        return {
          bg: 'bg-cyber-green/15 text-cyber-green border-cyber-green/40 shadow-[0_0_8px_rgba(0,255,102,0.2)]',
          dot: 'bg-cyber-green'
        };
      case 'WORKING KNOWLEDGE':
        return {
          bg: 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40 shadow-[0_0_8px_rgba(0,240,255,0.2)]',
          dot: 'bg-cyber-cyan'
        };
      case 'FAMILIAR':
        return {
          bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400'
        };
      case 'LEARNING':
      default:
        return {
          bg: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
          dot: 'bg-sky-400'
        };
    }
  };

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
            <Code size={14} />
            <span>[ 03 // COMPETENCY MATRIX ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="text-sm font-mono text-slate-400">
            REALISTIC EVALUATIONS (LEARNING, FAMILIAR, WORKING KNOWLEDGE, BUILDING) — NO FALSE PERCENTAGES.
          </p>
        </div>

        {/* Search filter input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search skills or keywords..."
            className="w-full pl-10 pr-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyber-green/50 transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                isActive
                  ? 'bg-cyber-green text-black font-bold shadow-cyber-sm'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-cyber-green/30'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSkills.map(skill => {
          const badge = getLevelBadge(skill.level);
          return (
            <div
              key={skill.name}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyber-green/40 hover:shadow-cyber-sm transition-all group relative overflow-hidden"
            >
              {/* Subtle category watermark */}
              <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                {skill.category}
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-green/60 group-hover:bg-cyber-green group-hover:shadow-[0_0_8px_#00ff66] transition-all" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyber-green transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {skill.note && (
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {skill.note}
                  </p>
                )}

                {/* Honest Level Pill */}
                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">TIER</span>
                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border flex items-center gap-1.5 ${badge.bg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                    <span>{skill.level}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="py-12 text-center text-sm font-mono text-slate-400 glass-panel rounded-2xl">
          No skills match your search query "{searchQuery}".
        </div>
      )}

      {/* Level Legend HUD */}
      <div className="mt-8 p-4 rounded-2xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <span className="text-cyber-green font-bold flex items-center gap-1.5">
          <Sparkles size={14} /> LEVEL ARCHITECTURE:
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <strong className="text-slate-300">LEARNING:</strong> Active foundational study
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <strong className="text-slate-300">FAMILIAR:</strong> Conceptual understanding & syntax
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
            <strong className="text-slate-300">WORKING KNOWLEDGE:</strong> Independent implementation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-green" />
            <strong className="text-slate-300">BUILDING:</strong> Active project creation
          </span>
        </div>
      </div>

    </section>
  );
};

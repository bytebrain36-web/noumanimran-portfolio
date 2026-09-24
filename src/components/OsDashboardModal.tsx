import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  X, Activity, Cpu, HardDrive, Terminal,
  User, FolderGit2, Code, Compass,
  Mail, ExternalLink
} from 'lucide-react';
import { DigitalIdCard } from './DigitalIdCard';

interface OsDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

type TabType = 'SYSTEM' | 'PROFILE' | 'PROJECTS' | 'SKILLS' | 'JOURNEY' | 'CONTACT';

export const OsDashboardModal: React.FC<OsDashboardModalProps> = ({ isOpen, onClose }) => {
  const { systemMetrics, personalInfo, projects, skills, journeyTimeline, socialLinks } = portfolioData;
  const [activeTab, setActiveTab] = useState<TabType>('SYSTEM');
  const [cpuUsage, setCpuUsage] = useState(16);
  const [ramUsage, setRamUsage] = useState(42);

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

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(14 + Math.random() * 9));
      setRamUsage(Math.floor(40 + Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'SYSTEM', label: 'SYSTEM', icon: <Activity size={14} /> },
    { id: 'PROFILE', label: 'PROFILE', icon: <User size={14} /> },
    { id: 'PROJECTS', label: 'PROJECTS', icon: <FolderGit2 size={14} /> },
    { id: 'SKILLS', label: 'SKILLS', icon: <Code size={14} /> },
    { id: 'JOURNEY', label: 'JOURNEY', icon: <Compass size={14} /> },
    { id: 'CONTACT', label: 'CONTACT', icon: <Mail size={14} /> },
  ];

  return (
    <div 
      className="fixed inset-0 z-[9985] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="NOUMAN.OS Interactive Mini Operating System"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] my-auto bg-slate-950/95 rounded-3xl border-2 border-cyber-green/50 shadow-[0_0_60px_rgba(0,255,102,0.25)] flex flex-col overflow-hidden font-sans text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* OS Window Chrome Titlebar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-black/60 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} title="Close window" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-cyber-green" />
            <span className="ml-3 font-bold text-cyber-green tracking-wider flex items-center gap-1.5">
              <Terminal size={14} /> NOUMAN.OS // INTERACTIVE DESKTOP ENVIRONMENT
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden sm:inline text-[11px] text-cyber-cyan font-semibold">
              KERNEL: {systemMetrics.kernel}
            </span>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close OS Dashboard"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 border-b border-white/10 bg-white/[0.02] overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-cyber-green text-black font-bold shadow-cyber-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* TAB 1: SYSTEM */}
          {activeTab === 'SYSTEM' && (
            <div className="space-y-6 animate-fadeIn font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-display font-extrabold text-white">
                    SYSTEM STATUS & TELEMETRY
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Live runtime metrics and configuration parameters.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyber-green/10 text-cyber-green text-xs font-bold border border-cyber-green/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                  CORE OPERATIONAL
                </span>
              </div>

              {/* Required 6 Spec Tiles */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">SYSTEM STATUS</span>
                  <div className="text-lg font-bold text-cyber-green flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-green" />
                    {systemMetrics.status}
                  </div>
                  <span className="text-[10px] text-slate-500">Zero critical exceptions</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">CURRENT MODE</span>
                  <div className="text-lg font-bold text-cyber-cyan">
                    {systemMetrics.mode}
                  </div>
                  <span className="text-[10px] text-slate-500">Continuous active development</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">FOCUS</span>
                  <div className="text-base font-bold text-white">
                    {systemMetrics.focus}
                  </div>
                  <span className="text-[10px] text-slate-500">Specialized technical sprint</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">EDUCATION</span>
                  <div className="text-lg font-bold text-white">
                    {systemMetrics.education}
                  </div>
                  <span className="text-[10px] text-slate-500">1st Year, Intermediate CS</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">LOCATION</span>
                  <div className="text-lg font-bold text-white">
                    {systemMetrics.location}
                  </div>
                  <span className="text-[10px] text-slate-500">Punjab, Pakistan (UTC+5)</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] text-slate-400">CURRENT YEAR</span>
                  <div className="text-lg font-bold text-cyber-green">
                    {systemMetrics.currentYear || '2026'}
                  </div>
                  <span className="text-[10px] text-slate-500">Release v{systemMetrics.osVersion}</span>
                </div>
              </div>

              {/* Animated Live Meters */}
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl glass-panel space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Cpu size={14} className="text-cyber-green" /> COMPUTATIONAL LOAD
                    </span>
                    <span className="text-cyber-green font-bold">{cpuUsage}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-green to-emerald-400 transition-all duration-700 ease-out"
                      style={{ width: `${cpuUsage * 2}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>CORES: 8 LOGICAL</span>
                    <span>TEMP: NOMINAL</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-panel space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <HardDrive size={14} className="text-cyber-cyan" /> MEMORY BUFFER ALLOCATION
                    </span>
                    <span className="text-cyber-cyan font-bold">{ramUsage}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-cyan to-sky-400 transition-all duration-700 ease-out"
                      style={{ width: `${ramUsage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>SWAP: ZERO FAULTS</span>
                    <span>ENCRYPTED_RAM</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE */}
          {activeTab === 'PROFILE' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="md:col-span-5 flex justify-center">
                <DigitalIdCard />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-mono text-cyber-green uppercase tracking-wider font-bold">
                  BIOGRAPHICAL SYNTHESIS
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white">
                  Nouman Imran
                </h3>
                <p className="text-sm font-mono text-cyber-cyan">
                  Student, Developer, AI Enthusiast & Cybersecurity Learner
                </p>
                <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                  {personalInfo.shortIntro}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {personalInfo.currentFocus.map(f => (
                    <span key={f} className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'PROJECTS' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  ACTIVE APPLICATION PROTOTYPES ({projects.length})
                </span>
                <span className="text-xs font-mono text-cyber-green">STATUS FILTER ACTIVE</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map(proj => (
                  <div 
                    key={proj.id}
                    className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyber-green/40 transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-white group-hover:text-cyber-green transition-colors text-base">
                        {proj.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyber-green">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
                      <span className="text-[11px] text-cyber-cyan">{proj.progressPercentage}% COMPLETE</span>
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyber-green flex items-center gap-1">
                          Open <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'SKILLS' && (
            <div className="space-y-4 animate-fadeIn font-mono">
              <span className="text-xs text-slate-400 uppercase tracking-wider block pb-2 border-b border-white/10">
                ACTIVE COMPETENCY MATRIX
              </span>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.map(s => (
                  <div key={s.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-white block">{s.name}</span>
                      <span className="text-[10px] text-slate-500 uppercase">{s.category}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: JOURNEY */}
          {activeTab === 'JOURNEY' && (
            <div className="space-y-4 animate-fadeIn font-mono">
              <span className="text-xs text-slate-400 uppercase tracking-wider block pb-2 border-b border-white/10">
                CHRONOLOGICAL MILESTONE CHECKPOINTS
              </span>
              <div className="space-y-3">
                {journeyTimeline.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
                    <span className="px-2.5 py-1 rounded text-xs font-bold bg-white/10 text-cyber-green shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{item.title}</span>
                        {item.isGoal && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                            GOAL
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {item.subtitle} — {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT */}
          {activeTab === 'CONTACT' && (
            <div className="space-y-6 animate-fadeIn font-mono">
              <span className="text-xs text-slate-400 uppercase tracking-wider block pb-2 border-b border-white/10">
                DIRECT COMMUNICATIVE CHANNELS
              </span>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-panel space-y-2">
                  <span className="text-xs text-slate-400 block uppercase">PRIMARY EMAIL</span>
                  <a href={`mailto:${socialLinks.email}`} className="text-sm font-bold text-cyber-green hover:underline break-all">
                    {socialLinks.email}
                  </a>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Guaranteed response within 24 hours.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel space-y-2">
                  <span className="text-xs text-slate-400 block uppercase">WHATSAPP CHANNEL</span>
                  <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-cyber-green hover:underline">
                    {socialLinks.whatsappDisplay || '+92 304 4923000'}
                  </a>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Fast messaging for collaborative ideas and commissions.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* OS Footer Bar */}
        <div className="px-6 py-3 border-t border-white/10 bg-black/60 font-mono text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>USER: NOUMAN</span>
            <span>•</span>
            <span className="text-cyber-green">STATUS: ROOT_VERIFIED</span>
          </div>

          <button 
            onClick={onClose}
            className="text-xs text-cyber-green hover:underline"
          >
            [Close Overlay - ESC]
          </button>
        </div>

      </div>
    </div>
  );
};

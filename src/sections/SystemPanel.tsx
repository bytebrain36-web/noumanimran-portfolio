import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Activity, Cpu, ShieldCheck, HardDrive, Terminal, 
  Wifi, Zap, Lock, Gauge 
} from 'lucide-react';

export const SystemPanel: React.FC = () => {
  const { systemMetrics } = portfolioData;
  const [uptimeSeconds, setUptimeSeconds] = useState(14820);
  const [cpuLoad, setCpuLoad] = useState(14);
  const [memoryLoad, setMemoryLoad] = useState(38);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
      // Subtle simulated telemetry fluctuations
      setCpuLoad(Math.floor(12 + Math.random() * 8));
      setMemoryLoad(Math.floor(36 + Math.random() * 4));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hours}h ${mins}m ${s}s`;
  };

  return (
    <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl glass-panel-accent border border-cyber-green/30 p-6 md:p-8 shadow-cyber-md overflow-hidden relative font-mono">
        
        {/* Decorative Grid & Accent lines */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/10 rounded-full blur-2xl pointer-events-none" />

        {/* HUD Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse shadow-[0_0_10px_#00ff66]" />
            <div>
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-white tracking-wider flex items-center gap-2">
                <span>{systemMetrics.osName}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyber-green/15 text-cyber-green border border-cyber-green/30">
                  v{systemMetrics.osVersion}
                </span>
              </h2>
              <span className="text-[11px] text-slate-400">
                PERSONAL IDENTITY RUNTIME ENGINE // {systemMetrics.kernel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-cyber-green">
              <Wifi size={14} />
              <span>SYNCED: PK_LAHORE_01</span>
            </div>
            <div className="text-slate-500">•</div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Zap size={14} className="text-amber-400" />
              <span>UPTIME: {formatUptime(uptimeSeconds)}</span>
            </div>
          </div>
        </div>

        {/* Main 6 Metric Tiles Required by Spec */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Tile 1: SYSTEM STATUS */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-green/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>SYSTEM STATUS</span>
              <Activity size={14} className="text-cyber-green group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg font-bold text-cyber-green tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyber-green" />
              {systemMetrics.status}
            </div>
            <span className="text-[10px] text-slate-500">Zero Critical Faults</span>
          </div>

          {/* Tile 2: CURRENT MODE */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-cyan/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>CURRENT MODE</span>
              <Cpu size={14} className="text-cyber-cyan group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg font-bold text-cyber-cyan tracking-wider">
              {systemMetrics.mode}
            </div>
            <span className="text-[10px] text-slate-500">Active Prototyping</span>
          </div>

          {/* Tile 3: FOCUS */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-green/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>FOCUS</span>
              <ShieldCheck size={14} className="text-cyber-green group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wider line-clamp-1">
              {systemMetrics.focus}
            </div>
            <span className="text-[10px] text-slate-500">Applied Specialization</span>
          </div>

          {/* Tile 4: EDUCATION */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-green/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>EDUCATION</span>
              <Terminal size={14} className="text-cyber-green group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base font-bold text-white tracking-wider">
              {systemMetrics.education}
            </div>
            <span className="text-[10px] text-slate-500">Intermediate CS</span>
          </div>

          {/* Tile 5: LOCATION */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-cyan/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>LOCATION</span>
              <HardDrive size={14} className="text-cyber-cyan group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg font-bold text-white tracking-wider">
              {systemMetrics.location}
            </div>
            <span className="text-[10px] text-slate-500">Punjab, Pakistan</span>
          </div>

          {/* Tile 6: VERSION */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-green/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>VERSION</span>
              <Gauge size={14} className="text-cyber-green group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg font-bold text-cyber-green tracking-wider">
              {systemMetrics.osVersion}
            </div>
            <span className="text-[10px] text-slate-500">LTS Architecture</span>
          </div>

        </div>

        {/* Bottom Real-time Telemetry Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>CPU LOAD:</span>
              <span className="text-cyber-green font-bold">{cpuLoad}%</span>
              <div className="w-16 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-cyber-green h-full transition-all duration-500" 
                  style={{ width: `${cpuLoad * 2}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>MEM ALLOC:</span>
              <span className="text-cyber-cyan font-bold">{memoryLoad}%</span>
              <div className="w-16 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-cyber-cyan h-full transition-all duration-500" 
                  style={{ width: `${memoryLoad}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Lock size={12} className="text-cyber-green" />
            <span>SECURITY PROTOCOL: {systemMetrics.securityProtocol}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

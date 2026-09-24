import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Wifi, MapPin, CheckCircle2, Copy } from 'lucide-react';

export const DigitalIdCard: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const idHash = "NOUMAN-ID-2026-PK-01244";

  const handleCopyId = () => {
    navigator.clipboard.writeText(idHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group perspective-1000 max-w-sm mx-auto sm:mx-0">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green via-cyber-cyan to-emerald-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

      {/* Main Holographic Pass Surface */}
      <div 
        onClick={handleCopyId}
        className="relative rounded-3xl bg-gradient-to-b from-[#0e1626] to-[#070b14] border border-cyber-green/40 p-6 text-slate-100 shadow-2xl transition-all duration-300 group-hover:border-cyber-green cursor-pointer overflow-hidden font-mono"
        title="Click to copy Identity Hash"
      >
        {/* Holographic Watermark / Circuit lines */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            {/* NI Logo */}
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-cyber-green/60 flex items-center justify-center font-mono font-black text-sm text-cyber-green shadow-[0_0_12px_rgba(0,255,102,0.3)]">
              N//I
            </div>
            <div>
              <span className="text-xs font-display font-extrabold text-white tracking-widest block">
                NOUMAN.OS PASS
              </span>
              <span className="text-[10px] text-cyber-cyan tracking-wider block">
                DIGITAL IDENTITY VERIFIED
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-[10px] text-cyber-green font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Holographic Smart Chip & Wireless Sensor */}
        <div className="relative z-10 my-4 flex items-center justify-between">
          <div className="w-11 h-8 rounded-lg bg-gradient-to-br from-amber-400/80 via-yellow-500/70 to-amber-700/80 border border-yellow-300/60 p-1 flex flex-col justify-between shadow-inner">
            <div className="w-full h-0.5 bg-black/30" />
            <div className="w-full h-0.5 bg-black/30" />
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <Wifi size={14} className="text-cyber-green animate-pulse" />
            <span>NFC // ACTIVE</span>
          </div>
        </div>

        {/* Identity Details */}
        <div className="relative z-10 space-y-1.5 my-3">
          <span className="text-[10px] uppercase text-slate-400 tracking-wider">HOLDER NAME</span>
          <h4 className="text-xl font-display font-extrabold text-white tracking-wide">
            {personalInfo.name}
          </h4>

          <div className="text-xs text-cyber-green font-semibold tracking-wider pt-0.5">
            AI • SOFTWARE • CYBERSECURITY
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <div>
              <span className="text-[9px] text-slate-500 block uppercase">ROLE</span>
              <span className="text-white font-bold">Student Developer</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 block uppercase">LOCATION</span>
              <span className="text-white font-bold flex items-center gap-1">
                <MapPin size={11} className="text-cyber-cyan" />
                Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Barcode & Hash Footer */}
        <div className="relative z-10 pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
          {/* Stylized Barcode */}
          <div className="flex items-center gap-[3px] h-7">
            <div className="w-1 h-full bg-white/70" />
            <div className="w-0.5 h-full bg-white/40" />
            <div className="w-1.5 h-full bg-white/90" />
            <div className="w-0.5 h-full bg-white/50" />
            <div className="w-2 h-full bg-cyber-green/90" />
            <div className="w-0.5 h-full bg-white/40" />
            <div className="w-1 h-full bg-white/80" />
            <div className="w-1.5 h-full bg-cyber-cyan/80" />
            <div className="w-0.5 h-full bg-white/40" />
            <div className="w-1 h-full bg-white/60" />
          </div>

          <div className="text-right">
            <span className="text-[9px] text-slate-500 block">SERIAL HASH</span>
            <div className="text-[10px] text-cyber-green flex items-center gap-1 font-bold">
              {copied ? (
                <>
                  <CheckCircle2 size={10} />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={10} className="text-slate-400 group-hover:text-cyber-green" />
                  <span>{idHash}</span>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

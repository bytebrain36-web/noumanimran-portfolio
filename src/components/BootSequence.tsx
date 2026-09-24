import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    // Step 0: Initializing (0ms)
    // Step 1: System Online (500ms)
    // Step 2: Identity & Statement (1000ms)
    // Step 3: Complete & fade out (1800ms)
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1050);
    const timer3 = setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 400);
    }, 1800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        skip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const skip = () => {
    setIsFading(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      onClick={skip}
      role="status"
      aria-label="System Initializing"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#05070b] text-slate-100 font-mono transition-opacity duration-500 select-none cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Matrix/Grid scanline */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Terminal Box */}
      <div className="relative z-10 w-11/12 max-w-lg p-6 rounded-2xl glass-panel-accent border border-cyber-green/40 shadow-cyber-lg">
        {/* Header HUD */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green" />
            <span className="ml-2 tracking-widest text-cyber-green font-bold flex items-center gap-1.5">
              <Terminal size={13} /> NOUMAN.OS // BOOT
            </span>
          </div>
          <span className="text-[11px] text-slate-500 hover:text-cyber-green transition-colors">
            [ESC to skip]
          </span>
        </div>

        {/* Dynamic Telemetry Lines */}
        <div className="space-y-3 text-sm min-h-[140px]">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-cyber-green font-bold">&gt;</span>
            <span className="animate-pulse">INITIALIZING NOUMAN.OS...</span>
          </div>

          {step >= 1 && (
            <div className="flex items-center gap-2 text-cyber-green font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_8px_#00ff66]" />
              <Shield size={14} className="text-cyber-cyan" />
              <span>SYSTEM ONLINE</span>
              <span className="text-xs text-slate-500 ml-auto">[KERNEL 2026.1 READY]</span>
            </div>
          )}

          {step >= 2 && (
            <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
              <div className="text-lg font-display font-bold text-white tracking-wider flex items-center gap-2">
                <Zap size={16} className="text-cyber-green" />
                <span>NOUMAN IMRAN</span>
              </div>
              <p className="text-xs text-cyber-cyan tracking-wide font-sans">
                BUILDING THE FUTURE, ONE PROJECT AT A TIME.
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-5 w-full bg-white/5 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan transition-all duration-700 ease-out"
            style={{ width: step === 0 ? '30%' : step === 1 ? '70%' : '100%' }}
          />
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="mt-6 text-xs text-slate-500 hover:text-cyber-green border border-white/10 hover:border-cyber-green/40 px-3 py-1.5 rounded-full transition-all"
      >
        Skip sequence ⚡
      </button>
    </div>
  );
};

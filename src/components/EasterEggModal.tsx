import { useEffect } from 'react';
import { ShieldAlert, Terminal, X, Zap } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="System Override Terminal"
    >
      <div 
        className="relative w-full max-w-2xl bg-black border-2 border-cyber-green rounded-2xl p-6 md:p-8 text-slate-100 font-mono shadow-[0_0_50px_rgba(0,255,102,0.4)] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Scanline & Grid Effect */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-x-0 h-1 bg-cyber-green/40 blur-sm animate-scanline pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-cyber-green/40 mb-6">
          <div className="flex items-center gap-2.5 text-cyber-green">
            <ShieldAlert size={20} className="animate-bounce" />
            <span className="text-sm font-bold tracking-widest uppercase">
              SECURITY PROTOCOL OVERRIDE // 2077
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-cyber-green hover:bg-cyber-green/10 transition-colors"
            aria-label="Close Override"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Telemetry Box */}
        <div className="relative z-10 space-y-4 text-xs md:text-sm">
          <div className="p-4 rounded-xl bg-cyber-green/10 border border-cyber-green/30 space-y-2">
            <div className="text-xl md:text-2xl font-display font-black text-cyber-green tracking-wider">
              SYSTEM OVERRIDE
            </div>
            <div className="text-base text-white font-bold flex items-center gap-2">
              <Zap size={16} className="text-cyber-cyan" />
              Welcome, Nouman.
            </div>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Root privileges recognized. Digital operating system running in unconstrained developer mode. Lahore, Pakistan node synchronized.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="text-cyber-cyan font-bold flex items-center gap-2 text-xs">
              <Terminal size={14} /> ACTIVE KERNEL TELEMETRY
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div>• ARCHITECTURE: REACT + VITE + TS</div>
              <div>• ENCRYPTION: SHA-384 CYBERNET</div>
              <div>• LATENCY: 0.04ms LOCAL NODE</div>
              <div>• OPERATING MODE: BUILDING REALITY</div>
            </div>
          </div>

          <div className="text-center pt-2 text-xs text-slate-400 font-sans">
            <span className="text-cyber-green font-mono">"BUILD TODAY. THINK TOMORROW. BECOME MORE."</span>
          </div>
        </div>

        {/* Dismiss button */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-500">[Press ESC or click outside to return]</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyber-green text-black font-bold hover:bg-cyber-green-hover transition-all"
          >
            Acknowledge & Return
          </button>
        </div>
      </div>
    </div>
  );
};

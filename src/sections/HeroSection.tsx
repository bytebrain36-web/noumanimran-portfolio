import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, Mail, Terminal, MapPin, 
  Shield, Cpu 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCv: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCv }) => {
  const { personalInfo } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live Pakistan Local Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personalInfo.roles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Identity & Typography (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {/* Live System Online */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse shadow-[0_0_8px_#00ff66]" />
              <span className="font-semibold tracking-wider">SYSTEM ONLINE</span>
            </div>

            {/* Location & Real-time Clock */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-slate-300">
              <MapPin size={13} className="text-cyber-cyan" />
              <span>Lahore, Pakistan</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyber-cyan">{currentTime || '16:14:00'} PKT</span>
            </div>

            {/* Current Education */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-slate-400">
              <span>ICS — 1st Year</span>
            </div>
          </div>

          {/* Big Name Display */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-cyber-green uppercase font-semibold block">
              [ 01 // DIGITAL IDENTITY ]
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              NOUMAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-300 to-cyber-cyan">
                IMRAN
              </span>
            </h1>
          </div>

          {/* Subtitle Identity */}
          <p className="text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase">
            AI • CODE • CYBERSECURITY • CREATIVE TECHNOLOGY
          </p>

          {/* Animated Typing Role Box */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl glass-panel-accent border border-cyber-green/30 max-w-xl">
            <Terminal size={18} className="text-cyber-green shrink-0 animate-pulse" />
            <div className="font-mono text-sm sm:text-base text-slate-200">
              <span className="text-cyber-cyan font-bold">&gt;</span>{' '}
              <span className="font-semibold text-white">{displayedText}</span>
              <span className="w-2 h-4 inline-block ml-1 bg-cyber-green animate-ping align-middle" />
            </div>
          </div>

          {/* Main Statement */}
          <p className="text-base sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
            "{personalInfo.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            {personalInfo.shortIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-cyber-green text-black font-display font-bold text-sm hover:bg-cyber-green-hover transition-all shadow-cyber-md flex items-center gap-2 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl glass-panel hover:border-cyber-cyan/50 text-white font-display font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Mail size={16} className="text-cyber-cyan" />
              <span>LET'S CONNECT</span>
            </button>

            <button
              onClick={onOpenCv}
              className="px-4 py-3.5 rounded-xl border border-white/10 hover:border-white/30 text-slate-300 hover:text-white font-mono text-xs transition-all"
            >
              [ VIEW CV ]
            </button>
          </div>
        </div>

        {/* Right Column: Abstract Futuristic Hologram Avatar & Orbital Core (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyber-green/30 animate-[spin_25s_linear_infinite]" />
            
            {/* Secondary Cyan Counter-rotating Ring */}
            <div className="absolute inset-4 rounded-full border border-cyber-cyan/25 animate-[spin_18s_linear_infinite_reverse]" />
            
            {/* Third Fine Dashed Ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-white/15 animate-[spin_35s_linear_infinite]" />

            {/* Central Holographic Sphere with N//I Monogram */}
            <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl glass-panel-accent border border-cyber-green/40 shadow-cyber-lg flex flex-col items-center justify-center p-6 text-center group hover:scale-105 transition-transform duration-500 overflow-hidden">
              
              {/* Internal Scanline */}
              <div className="absolute inset-0 cyber-grid-pattern opacity-30" />
              <div className="absolute inset-x-0 h-1 bg-cyber-green/40 blur-sm animate-scanline pointer-events-none" />

              {/* Glowing N//I Core */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-black/60 border border-cyber-green/50 flex items-center justify-center text-cyber-green font-mono font-extrabold text-2xl shadow-[0_0_25px_rgba(0,255,102,0.3)]">
                N // I
              </div>

              <div className="relative z-10 mt-3">
                <span className="font-display font-bold text-sm text-white block tracking-wider">
                  NOUMAN.CORE
                </span>
                <span className="font-mono text-[10px] text-cyber-cyan block">
                  DIGITAL_AVATAR // ONLINE
                </span>
              </div>
            </div>

            {/* Floating Satellite HUD Badges */}
            <div className="absolute -top-3 right-0 px-3 py-1.5 rounded-xl glass-panel border border-cyber-green/30 text-[11px] font-mono text-cyber-green flex items-center gap-1.5 shadow-cyber-sm animate-float">
              <Shield size={12} />
              <span>DEFENSIVE MINDSET</span>
            </div>

            <div className="absolute -bottom-2 left-0 px-3 py-1.5 rounded-xl glass-panel border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan flex items-center gap-1.5 shadow-cyan-sm animate-float" style={{ animationDelay: '2s' }}>
              <Cpu size={12} />
              <span>AI INTEGRATIONS</span>
            </div>

            <div className="absolute top-1/2 -left-6 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-[10px] font-mono text-slate-400">
              COORD: 31.5204° N
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

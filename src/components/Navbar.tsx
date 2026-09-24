import React, { useState, useEffect } from 'react';
import { 
  Terminal, Sun, Moon, Menu, X, FileText 
} from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenPalette: () => void;
  onToggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCv,
  onOpenPalette,
  onToggleTheme,
  isDarkTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-cyber-bg/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left"
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 rounded-xl bg-cyber-surface/90 border border-cyber-green/30 group-hover:border-cyber-green flex items-center justify-center font-mono font-bold text-sm text-cyber-green shadow-cyber-sm transition-all group-hover:scale-105">
              N//I
            </div>
            <div>
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-cyber-green transition-colors block">
                NOUMAN.IMRAN
              </span>
              <span className="text-[10px] font-mono text-slate-400 block tracking-widest -mt-1">
                SYSTEM OS // 2026.1
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full glass-panel border border-white/10">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                    isActive
                      ? 'bg-cyber-green/15 text-cyber-green font-bold shadow-[0_0_12px_rgba(0,255,102,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions (Command palette, CV, Theme) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white text-xs font-mono transition-all group"
              title="Open Command Palette (Ctrl+K)"
            >
              <Terminal size={14} className="text-cyber-green group-hover:rotate-12 transition-transform" />
              <span className="hidden md:inline">Command</span>
              <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-slate-400 group-hover:text-white">
                ⌘K
              </kbd>
            </button>

            {/* View Digital CV */}
            <button
              onClick={onOpenCv}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyber-green/15 hover:bg-cyber-green text-cyber-green hover:text-black border border-cyber-green/40 font-semibold text-xs font-mono transition-all shadow-cyber-sm"
            >
              <FileText size={13} />
              <span>DIGITAL CV</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl glass-panel hover:border-cyber-cyan/50 text-slate-300 hover:text-white transition-all"
              aria-label={`Toggle ${isDarkTheme ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
            >
              {isDarkTheme ? (
                <Sun size={16} className="text-amber-400" />
              ) : (
                <Moon size={16} className="text-cyber-cyan" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Quick CV Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              className="p-2 rounded-xl bg-cyber-green/15 text-cyber-green border border-cyber-green/30 text-xs font-mono font-bold"
              aria-label="Digital CV"
            >
              <FileText size={15} />
            </button>

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl glass-panel text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkTheme ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-cyber-cyan" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-xl glass-panel text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Futuristic Fullscreen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 font-mono animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="text-[11px] text-cyber-green tracking-widest uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span>SYSTEM NAVIGATION</span>
              <span className="text-slate-500">NOUMAN.OS</span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-cyber-green/10 text-left border border-white/5 hover:border-cyber-green/30 text-slate-200 hover:text-cyber-green transition-all"
                >
                  <span className="font-display text-lg font-bold tracking-wide">
                    {link.label}
                  </span>
                  <span className="text-xs text-slate-500">0{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative z-10 space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="w-full py-3 rounded-xl glass-panel text-xs text-slate-300 flex items-center justify-center gap-2"
            >
              <Terminal size={14} className="text-cyber-green" />
              <span>Launch Command Center (⌘K)</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-3 rounded-xl bg-cyber-green text-black font-bold text-xs flex items-center justify-center gap-2 shadow-cyber-sm"
            >
              <FileText size={15} />
              <span>View Verified Digital CV</span>
            </button>

            <div className="text-center text-[10px] text-slate-500 pt-2">
              🟢 SYSTEM ONLINE • LAHORE, PK
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-cyber-bg/90 backdrop-blur-xl text-slate-400 font-sans mt-20">
      {/* Upper Grid pattern */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyber-surface border border-cyber-green/40 flex items-center justify-center font-mono font-bold text-xs text-cyber-green">
                N//I
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-wider">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs font-mono text-cyber-green tracking-widest uppercase">
              AI • CODE • CYBERSECURITY • CREATIVE TECHNOLOGY
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              "Building today's ideas with tomorrow's technology." A lifetime personal digital identity system engineered for continuous evolution.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1 text-cyber-green">
                <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                SYSTEM ONLINE
              </span>
              <span>•</span>
              <span>LAHORE, PAKISTAN</span>
              <span>•</span>
              <span>VERSION 2026.1</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold block">
              SYSTEM DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-cyber-green transition-colors">01 // HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyber-green transition-colors">02 // ABOUT</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyber-green transition-colors">03 // SKILLS</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyber-green transition-colors">04 // PROJECTS</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyber-green transition-colors">05 // JOURNEY</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyber-green transition-colors">06 // CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Connectivity */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold block">
              CHANNELS
            </span>
            <div className="flex flex-wrap gap-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white transition-all"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2.5 rounded-xl glass-panel hover:border-cyber-green/40 text-slate-300 hover:text-white transition-all"
                  aria-label="Send Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>

            <p className="text-[11px] text-slate-500 font-mono pt-2">
              Type <kbd className="px-1 py-0.5 rounded bg-white/10 text-cyber-green">nouman2077</kbd> for system override.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 Nouman Imran. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-cyber-green font-semibold">"Built with curiosity."</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel hover:border-cyber-green/50 text-slate-300 hover:text-cyber-green transition-all"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Home, User, Code, FolderGit2, Compass, 
  Mail, FileText, Sun, Moon, ShieldAlert, Sparkles, X, CornerDownLeft
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCv: () => void;
  onToggleTheme: () => void;
  isDarkTheme: boolean;
  onTriggerOverride: () => void;
}

interface CommandItem {
  id: string;
  command: string;
  label: string;
  description: string;
  category: 'NAVIGATION' | 'SYSTEM' | 'ACTIONS';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenCv,
  onToggleTheme,
  isDarkTheme,
  onTriggerOverride,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'home',
      command: '/home',
      label: 'Jump to Home / Hero',
      description: 'Navigate to hero section and system telemetry',
      category: 'NAVIGATION',
      icon: <Home size={16} />,
      action: () => scrollTo('hero')
    },
    {
      id: 'about',
      command: '/about',
      label: 'Jump to About Me',
      description: 'Who is Nouman? Story & education timeline',
      category: 'NAVIGATION',
      icon: <User size={16} />,
      action: () => scrollTo('about')
    },
    {
      id: 'skills',
      command: '/skills',
      label: 'Jump to Technical Skills',
      description: 'View programming, development, AI, cyber & creative matrix',
      category: 'NAVIGATION',
      icon: <Code size={16} />,
      action: () => scrollTo('skills')
    },
    {
      id: 'projects',
      command: '/projects',
      label: 'Jump to Projects Showcase',
      description: 'Explore AWAM, NEXORA, Embroidery System & Jarvis',
      category: 'NAVIGATION',
      icon: <FolderGit2 size={16} />,
      action: () => scrollTo('projects')
    },
    {
      id: 'journey',
      command: '/journey',
      label: 'Jump to My Journey',
      description: 'Chronological timeline of education and milestones',
      category: 'NAVIGATION',
      icon: <Compass size={16} />,
      action: () => scrollTo('journey')
    },
    {
      id: 'learning',
      command: '/mission',
      label: 'Jump to Current Mission',
      description: 'Live mission cards and current learning targets',
      category: 'NAVIGATION',
      icon: <Sparkles size={16} />,
      action: () => scrollTo('learning')
    },
    {
      id: 'contact',
      command: '/contact',
      label: 'Open a Connection',
      description: 'Contact form and social channels',
      category: 'NAVIGATION',
      icon: <Mail size={16} />,
      action: () => scrollTo('contact')
    },
    {
      id: 'cv',
      command: '/cv',
      label: 'View Digital CV',
      description: 'Open full executive resume view with print-to-PDF',
      category: 'ACTIONS',
      icon: <FileText size={16} />,
      action: () => {
        onClose();
        onOpenCv();
      }
    },
    {
      id: 'theme',
      command: '/theme',
      label: `Switch to ${isDarkTheme ? 'Light' : 'Dark'} Mode`,
      description: 'Toggle interface display theme',
      category: 'SYSTEM',
      icon: isDarkTheme ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        onToggleTheme();
        onClose();
      }
    },
    {
      id: 'override',
      command: '/override',
      label: 'System Override Protocol',
      description: 'Execute developer access telemetry screen',
      category: 'SYSTEM',
      icon: <ShieldAlert size={16} className="text-cyber-green" />,
      action: () => {
        onClose();
        onTriggerOverride();
      }
    }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.command.toLowerCase().includes(query.toLowerCase()) ||
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9990] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Center Palette"
    >
      <div 
        className="w-full max-w-xl rounded-2xl glass-panel-accent border border-cyber-green/40 shadow-2xl overflow-hidden font-sans text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal Command Input Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-black/40">
          <Terminal size={18} className="text-cyber-green shrink-0 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search (e.g. /projects, /cv, /about)..."
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-400 focus:outline-none font-mono"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Clear query"
            >
              <X size={14} />
            </button>
          )}
          <span className="text-[11px] font-mono text-slate-400 border border-white/10 px-1.5 py-0.5 rounded">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400 font-mono">
              <p>No matching commands found.</p>
              <p className="text-xs text-slate-500 mt-1">Try /home, /projects, /skills, or /cv</p>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                onClick={() => cmd.action()}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  idx === selectedIndex 
                    ? 'bg-cyber-green/15 text-white border-l-2 border-cyber-green' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-lg ${
                    idx === selectedIndex ? 'bg-cyber-green/20 text-cyber-green' : 'bg-white/5 text-slate-400'
                  }`}>
                    {cmd.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{cmd.label}</span>
                      <span className="text-[11px] font-mono text-cyber-green bg-cyber-green/10 px-1.5 py-0.2 rounded">
                        {cmd.command}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1">{cmd.description}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center text-xs text-slate-500 font-mono gap-1">
                  <span>Enter</span>
                  <CornerDownLeft size={12} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 border-t border-white/10 bg-black/40 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyber-green">NOUMAN.OS // COMMAND CENTER</span>
        </div>
      </div>
    </div>
  );
};

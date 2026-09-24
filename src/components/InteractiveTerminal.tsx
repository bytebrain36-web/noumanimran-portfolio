import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'system --version',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyber-green font-bold">NOUMAN.OS [Version 2026.1 - LTS]</p>
          <p className="text-xs text-slate-400">
            Welcome to Nouman Imran's personal developer terminal. Type <span className="text-cyber-green font-bold">help</span> to view available system commands.
          </p>
        </div>
      )
    }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setHistory(prev => [...prev, cmdStr]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-cyber-cyan font-bold">help</span> — Display this command index</p>
            <p><span className="text-cyber-cyan font-bold">about</span> — Print developer bio & identity info</p>
            <p><span className="text-cyber-cyan font-bold">skills</span> — List technical competencies by category</p>
            <p><span className="text-cyber-cyan font-bold">projects</span> — Display active prototypes & repositories</p>
            <p><span className="text-cyber-cyan font-bold">journey</span> — Chronological education & milestones</p>
            <p><span className="text-cyber-cyan font-bold">radar</span> — Current active learning missions</p>
            <p><span className="text-cyber-cyan font-bold">contact</span> — Verified email & WhatsApp channels</p>
            <p><span className="text-cyber-cyan font-bold">theme</span> — Toggle dark/light interface mode</p>
            <p><span className="text-cyber-cyan font-bold">date</span> — Pakistan Standard Time & date</p>
            <p><span className="text-cyber-cyan font-bold">whoami</span> — Current terminal clearance session</p>
            <p><span className="text-cyber-cyan font-bold">clear</span> — Flush console screen buffer</p>
            <p><span className="text-cyber-cyan font-bold">exit</span> — Close terminal window</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">{portfolioData.personalInfo.name} // IDENTITY</p>
            <p>{portfolioData.personalInfo.shortIntro}</p>
            <p className="text-slate-400">Education: {portfolioData.personalInfo.education} • Location: {portfolioData.personalInfo.location}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">TECHNICAL SKILL MATRIX:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {portfolioData.skills.slice(0, 9).map(s => (
                <div key={s.name} className="p-1.5 rounded bg-white/5 border border-white/5">
                  <span className="text-white font-bold block">{s.name}</span>
                  <span className="text-[10px] text-cyber-cyan">{s.level}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">...and more in the Skills section.</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">ACTIVE PROTOTYPES:</p>
            {portfolioData.projects.map(p => (
              <div key={p.id} className="border-l-2 border-cyber-green pl-2 space-y-0.5">
                <span className="text-white font-bold">{p.title}</span>
                <span className="text-[10px] text-cyber-cyan ml-2">[{p.status}]</span>
                <p className="text-slate-400 text-[11px]">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'journey':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">STUDENT JOURNEY ROADMAP:</p>
            {portfolioData.journeyTimeline.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-cyber-cyan font-bold">[{item.year}]</span>
                <span className="text-white">{item.title}</span>
                {item.isGoal && <span className="text-[9px] text-amber-400">[GOAL]</span>}
              </div>
            ))}
          </div>
        );
        break;

      case 'radar':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">CURRENT LEARNING SPRINT:</p>
            {portfolioData.missions.map(m => (
              <div key={m.title} className="flex items-center justify-between py-0.5 border-b border-white/5 text-[11px]">
                <span className="text-white font-semibold">{m.title}</span>
                <span className="text-cyber-cyan">{m.currentStatus}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyber-green font-bold">DIRECT TRANSMISSION CHANNELS:</p>
            <p>• Email: <span className="text-white font-bold">{portfolioData.socialLinks.email}</span></p>
            <p>• WhatsApp: <span className="text-white font-bold">{portfolioData.socialLinks.whatsappDisplay || '+92 304 4923000'}</span></p>
            <p>• Location: Lahore, Pakistan</p>
          </div>
        );
        break;

      case 'theme':
        onToggleTheme();
        output = <p className="text-xs text-cyber-green">✓ Interface theme toggled.</p>;
        break;

      case 'date':
        const now = new Date();
        const fullDate = now.toLocaleString('en-US', {
          timeZone: 'Asia/Karachi',
          dateStyle: 'full',
          timeStyle: 'medium'
        });
        output = <p className="text-xs text-cyber-green font-bold">{fullDate} (PKT / UTC+5)</p>;
        break;

      case 'whoami':
        output = (
          <p className="text-xs text-cyber-cyan">
            Guest User // Session ID: SEC-OBSERVER-PK // Clearance: LEVEL-1
          </p>
        );
        break;

      case 'sudo':
        output = (
          <p className="text-xs text-red-400">
            Permission denied: User is not in sudoers file. This incident will be reported to Nouman.
          </p>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            Command not recognized: '{trimmed}'. Type <span className="text-cyber-green underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
          </p>
        );
        break;
    }

    setLogs(prev => [...prev, { id: `${Date.now()}`, command: cmdStr, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9985] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Nouman Developer Terminal"
    >
      <div 
        className="relative w-full max-w-3xl h-[600px] max-h-[90vh] bg-black/95 rounded-3xl border-2 border-cyber-green/50 shadow-cyber-lg flex flex-col overflow-hidden font-mono text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-bold text-cyber-green flex items-center gap-1.5 ml-2">
              <TerminalIcon size={14} /> NOUMAN TERMINAL // BASH 5.2
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="hidden sm:inline text-[11px]">Type 'exit' to close</span>
            <button onClick={onClose} className="hover:text-white p-1">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-2 px-5 py-2 border-b border-white/5 bg-white/[0.01] overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0">Suggestions:</span>
          {['help', 'about', 'skills', 'projects', 'journey', 'radar', 'contact', 'date', 'clear'].map(chip => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyber-green/15 text-slate-300 hover:text-cyber-green transition-colors border border-white/5 shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
          {logs.map(log => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <span className="text-cyber-green">nouman@os:~$</span>
                <span className="text-white">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-white/10">{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Prompt Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 flex items-center gap-2.5">
          <span className="text-cyber-green font-bold text-sm shrink-0">nouman@os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. help, projects, contact)..."
            className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder-slate-600"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="text-slate-400 hover:text-cyber-green p-1"
            title="Execute"
          >
            <CornerDownLeft size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

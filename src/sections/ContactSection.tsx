import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, MessageSquare, Send, CheckCircle2, Copy, 
  ExternalLink, Radio, Terminal 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/SocialIcons';

export const ContactSection: React.FC = () => {
  const { socialLinks } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous encrypted message dispatch
    setIsSent(true);
    setTimeout(() => {
      // Open default mail client with prefilled values
      const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
      window.open(mailtoUrl, '_blank');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase bg-cyber-green/10 border border-cyber-green/30 px-3.5 py-1.5 rounded-full">
          <Radio size={14} className="animate-pulse" />
          <span>[ 10 // DIRECT TRANSMISSION ]</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          OPEN A CONNECTION
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal">
          Have an idea, project, opportunity or simply want to connect?
        </p>

        <p className="text-xs font-mono text-slate-400">
          CHANNELS MONITORED FROM LAHORE, PAKISTAN (UTC+5). ALL MESSAGES REACH NOUMAN DIRECTLY.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Action Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Email Card */}
          <div className="p-6 rounded-3xl glass-panel border border-cyber-green/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyber-green font-bold uppercase tracking-wider flex items-center gap-2">
                <Mail size={16} /> PRIMARY INBOX
              </span>
              <span className="text-[11px] font-mono text-slate-500">ACTIVE RELAY</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between gap-3">
              <span className="font-mono text-xs sm:text-sm text-slate-200 select-all truncate">
                {socialLinks.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-cyber-green hover:text-black text-slate-300 transition-all shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {isCopied ? <CheckCircle2 size={16} className="text-cyber-green hover:text-black" /> : <Copy size={16} />}
              </button>
            </div>

            {isCopied && (
              <p className="text-xs font-mono text-cyber-green animate-fadeIn">
                ✓ Email copied to clipboard!
              </p>
            )}

            <div className="pt-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-full py-3 rounded-xl bg-cyber-green text-black font-display font-bold text-xs flex items-center justify-center gap-2 hover:bg-cyber-green-hover transition-all shadow-cyber-sm"
              >
                <Mail size={15} />
                <span>EMAIL ME DIRECTLY</span>
              </a>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block mb-2">
              NETWORKS & REPOSITORIES
            </span>

            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-cyber-green/10 border border-white/5 hover:border-cyber-green/30 text-slate-200 hover:text-cyber-green transition-all"
              >
                <div className="flex items-center gap-3 font-mono text-xs">
                  <MessageSquare size={16} className="text-cyber-green" />
                  <div>
                    <span className="font-bold block">WHATSAPP</span>
                    <span className="text-[11px] text-slate-400 font-mono">{socialLinks.whatsappDisplay || '923044923000'}</span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500" />
              </a>
            )}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-cyber-green/10 border border-white/5 hover:border-cyber-green/30 text-slate-200 hover:text-cyber-green transition-all"
              >
                <div className="flex items-center gap-3 font-mono text-xs">
                  <GithubIcon size={16} />
                  <span className="font-bold">GITHUB</span>
                </div>
                <ExternalLink size={14} className="text-slate-500" />
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-cyber-green/10 border border-white/5 hover:border-cyber-green/30 text-slate-200 hover:text-cyber-green transition-all"
              >
                <div className="flex items-center gap-3 font-mono text-xs">
                  <LinkedinIcon size={16} className="text-cyber-cyan" />
                  <span className="font-bold">LINKEDIN</span>
                </div>
                <ExternalLink size={14} className="text-slate-500" />
              </a>
            )}

            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-cyber-green/10 border border-white/5 hover:border-cyber-green/30 text-slate-200 hover:text-cyber-green transition-all"
              >
                <div className="flex items-center gap-3 font-mono text-xs">
                  <YoutubeIcon size={16} className="text-red-400" />
                  <span className="font-bold">YOUTUBE</span>
                </div>
                <ExternalLink size={14} className="text-slate-500" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Encrypted Message Transmission Terminal (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl glass-panel-accent border border-cyber-green/30 space-y-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-cyber-green font-bold flex items-center gap-2">
                <Terminal size={14} /> TRANSMISSION CONSOLE
              </span>
              <span className="text-slate-500">ENCRYPTED_ENDPOINT</span>
            </div>

            {isSent && (
              <div className="p-4 rounded-2xl bg-cyber-green/15 border border-cyber-green text-cyber-green text-xs font-mono space-y-1 animate-fadeIn">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 size={16} /> TRANSMISSION PREPARED!
                </div>
                <p className="text-slate-300">
                  Launching your email client to complete dispatch directly to Nouman.
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-green transition-colors font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-green transition-colors font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">Subject</label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Project Inquiry / Opportunity / Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-green transition-colors font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">Message</label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share project details, requirements, or what you'd like to collaborate on..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-green transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cyber-green text-black font-display font-bold text-sm hover:bg-cyber-green-hover transition-all shadow-cyber-md flex items-center justify-center gap-2 group"
            >
              <span>SEND TRANSMISSION</span>
              <Send size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

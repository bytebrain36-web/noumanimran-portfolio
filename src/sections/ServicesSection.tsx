import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Globe, Atom, Bot, ShieldAlert, Palette, 
  ShoppingBag, Cog, Film, Sparkles 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services } = portfolioData;

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={22} className="text-cyber-green" />;
      case 'Atom':
        return <Atom size={22} className="text-cyber-cyan" />;
      case 'Bot':
        return <Bot size={22} className="text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert size={22} className="text-amber-400" />;
      case 'Palette':
        return <Palette size={22} className="text-sky-400" />;
      case 'ShoppingBag':
        return <ShoppingBag size={22} className="text-teal-400" />;
      case 'Cog':
        return <Cog size={22} className="text-cyber-green" />;
      case 'Film':
      default:
        return <Film size={22} className="text-cyber-cyan" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase">
            <Sparkles size={14} />
            <span>[ 09 // FREELANCE & COLLABORATIVE SERVICES ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            WHAT I CAN BUILD
          </h2>
          <p className="text-sm font-mono text-slate-400">
            TECHNICAL FREELANCE DELIVERABLES & CUSTOM DIGITAL CREATION SERVICES.
          </p>
        </div>

        <button
          onClick={scrollToContact}
          className="px-5 py-2.5 rounded-xl bg-cyber-green text-black font-display font-bold text-xs hover:bg-cyber-green-hover transition-all shadow-cyber-sm shrink-0"
        >
          INITIATE COMMISSION / INQUIRY
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyber-green/40 hover:shadow-cyber-sm transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  SRV // 0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-green transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
              <span className="text-cyber-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                AVAILABLE
              </span>
              <button 
                onClick={scrollToContact}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Inquire →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

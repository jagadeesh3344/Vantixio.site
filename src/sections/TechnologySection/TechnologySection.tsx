import React from 'react';
import { TECH_CAPABILITY_BADGES, TECH_STACK_ITEMS } from '../../data/siteData';
import { Cloud, Code2, Database, Cpu, Layers, ShieldCheck, Atom, Smartphone, Server, Terminal, Flame, Box } from 'lucide-react';

const BADGE_ICONS: Record<string, any> = {
  Cloud,
  Code2,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
};

const STACK_ICONS: Record<string, any> = {
  Atom,
  Smartphone,
  Server,
  Terminal,
  Cloud,
  Flame,
  Box,
};

export const TechnologySection: React.FC = () => {
  return (
    <section
      id="section-7"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy & 6 Capability Badges */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                Our Technology
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
              Engineered with the{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                right technology.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              A modern, scalable tech stack that powers our products from idea to at scale.
            </p>
          </div>

          {/* 6 Capability Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TECH_CAPABILITY_BADGES.map((b, i) => {
              const Icon = BADGE_ICONS[b.icon] || Code2;
              return (
                <div
                  key={i}
                  className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-cyan-400/50 flex items-center gap-3 transition-colors group cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {b.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 3D Processor Stack Placeholder */}
        <div className="lg:col-span-6 h-[280px] lg:h-[450px]" />
      </div>

      {/* Bottom Horizontal Tech Stack Ticker */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-white/10 pointer-events-auto">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8">
          {TECH_STACK_ITEMS.map((tech) => {
            const Icon = STACK_ICONS[tech.icon] || Code2;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-white block">{tech.name}</span>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">{tech.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


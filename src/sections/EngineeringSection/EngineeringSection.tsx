import React, { useState } from 'react';
import { TECH_STACK_ITEMS, TECH_CAPABILITY_BADGES, AI_CAPABILITIES } from '../../data/siteData';
import { Cloud, Code2, Database, Cpu, Layers, ShieldCheck, Sparkles, BarChart2, Zap, Atom, Smartphone, Server, Terminal, Flame, Box } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Cloud,
  Code2,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  BarChart2,
  Zap,
  Atom,
  Smartphone,
  Server,
  Terminal,
  Flame,
  Box,
};

export const EngineeringSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai'>('architecture');

  return (
    <section
      id="section-6"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A1B6CF]" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
              Technology & AI Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
            Technology With{' '}
            <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
              Purpose.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D0DBE9]/85 leading-relaxed max-w-2xl">
            Full-stack scalability, resilient cloud infrastructures, and autonomous intelligence integrated directly into production workflows.
          </p>

          {/* Unified Architecture / AI Tab Switcher */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-[#A1B6CF]/25 border border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_15px_rgba(161,182,207,0.3)]'
                  : 'glass-panel text-[#D0DBE9]/70 hover:text-[#F4F7FC] border-[#A1B6CF]/20'
              }`}
            >
              Cloud & Full-Stack Architecture
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ai'
                  ? 'bg-[#A1B6CF]/25 border border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_15px_rgba(161,182,207,0.3)]'
                  : 'glass-panel text-[#D0DBE9]/70 hover:text-[#F4F7FC] border-[#A1B6CF]/20'
              }`}
            >
              Autonomous AI & Automation
            </button>
          </div>
        </div>

        {/* Content Body based on Active Tab */}
        <div className="pointer-events-auto">
          {activeTab === 'architecture' ? (
            <div className="space-y-8">
              {/* Core Architecture Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TECH_CAPABILITY_BADGES.map((b, i) => {
                  const Icon = ICON_MAP[b.icon] || Code2;
                  return (
                    <div
                      key={i}
                      className="glass-panel glass-panel-hover p-5 rounded-2xl border border-[#A1B6CF]/20 flex items-center gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#F4F7FC]">{b.title}</h4>
                        <span className="text-xs text-[#D0DBE9]/70 block mt-0.5">Enterprise Proven</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified Production Tech Stack Row */}
              <div className="glass-panel p-6 rounded-2xl border border-[#A1B6CF]/20">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A1B6CF] block mb-4">
                  Production Engineered Toolchain
                </span>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK_ITEMS.map((item, idx) => {
                    const Icon = ICON_MAP[item.icon] || Code2;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#253B54]/60 border border-[#A1B6CF]/25 text-xs text-[#D0DBE9]"
                      >
                        <Icon className="w-4 h-4 text-[#A1B6CF]" />
                        <span className="font-medium text-[#F4F7FC]">{item.name}</span>
                        <span className="text-[10px] text-[#A1B6CF]/60 font-mono">({item.category})</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AI_CAPABILITIES.map((ai, idx) => {
                const Icon = ICON_MAP[ai.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[#A1B6CF]/20 space-y-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-[#F4F7FC]">{ai.title}</h3>
                    <p className="text-xs text-[#D0DBE9]/75 leading-relaxed">{ai.subtitle}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


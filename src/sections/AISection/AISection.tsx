import React from 'react';
import { AI_CAPABILITIES } from '../../data/siteData';
import { Cpu, Sparkles, Layers, Code2, BarChart2, Zap, Target, TrendingUp, Infinity } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Cpu,
  Sparkles,
  Layers,
  Code2,
  BarChart2,
  Zap,
};

const ROI_METRICS = [
  { label: 'Higher Efficiency', icon: Infinity },
  { label: 'Lower Operational Cost', icon: Target },
  { label: 'Faster Execution', icon: TrendingUp },
  { label: 'Real Business Impact', icon: Layers },
];

export const AISection: React.FC = () => {
  return (
    <section
      id="section-8"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                AI & Automation
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
              Intelligence that{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                builds, automates and scales.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              We integrate AI and automation into real business workflows — making operations faster, smarter and more efficient.
            </p>
          </div>

          {/* 6 AI Capability Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {AI_CAPABILITIES.map((ai, i) => {
              const Icon = ICON_MAP[ai.icon] || Cpu;
              return (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 space-y-1.5 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {ai.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal pl-0.5">{ai.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 3D Neural Brain Placeholder */}
        <div className="lg:col-span-6 h-[300px] lg:h-[480px]" />
      </div>

      {/* Bottom 4 ROI Pillars */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-white/10 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {ROI_METRICS.map((roi, idx) => {
            const Icon = roi.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300">{roi.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


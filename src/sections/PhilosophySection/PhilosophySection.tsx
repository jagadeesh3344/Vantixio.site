import React from 'react';
import { Layers, Zap, Infinity } from 'lucide-react';

const PILLARS = [
  {
    title: 'Purpose Driven',
    desc: 'Aligning business fundamentals with user value and enduring utility.',
    icon: Layers,
  },
  {
    title: 'Execution Focused',
    desc: 'Rapid agile sprints with unrelenting engineering and architectural standards.',
    icon: Zap,
  },
  {
    title: 'Long-Term Impact',
    desc: 'Architectures engineered for scale, resilience, and multi-year growth.',
    icon: Infinity,
  },
];

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="section-2"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left space for flowing Aurora Ribbon */}
        <div className="hidden lg:block lg:col-span-5 h-[400px]" />

        {/* Right Content Column */}
        <div className="lg:col-span-7 space-y-8 pointer-events-auto">
          {/* Category Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A1B6CF]" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
              Our Philosophy
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
            Build What{' '}
            <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
              Matters.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-xl leading-relaxed">
            A clear mindset that drives everything we do — turning bold ideas into real, scalable, enduring impact.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-[#A1B6CF]/20 hover:border-[#D0DBE9]/50 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F4F7FC]">{p.title}</h3>
                  <p className="text-xs text-[#D0DBE9]/70 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

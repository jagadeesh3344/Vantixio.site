import React, { useState } from 'react';
import { MousePointer, Layers, PenTool, Smartphone, Monitor, Box, Sparkles } from 'lucide-react';

const FEATURE_PILLS = [
  { title: 'Product Design', icon: MousePointer, desc: 'User-centric wireframes and multi-screen interactive workflows.' },
  { title: 'UI/UX Systems', icon: Layers, desc: 'Scalable token architectures, component libraries, and states.' },
  { title: 'Brand & Creative', icon: PenTool, desc: 'Distinctive visual identities, logos, and digital brand guidelines.' },
  { title: 'Motion & 3D Spatial', icon: Smartphone, desc: 'Spatial ergonomics, kinetic physics, and micro-interactions.' },
];

const DISCIPLINES = [
  { name: 'Web Experiences', icon: Monitor },
  { name: 'Mobile UI/UX', icon: Smartphone },
  { name: 'Brand Identity', icon: Box },
  { name: 'Motion Design', icon: Layers },
  { name: '3D & Spatial Visuals', icon: Sparkles },
];

export const CreativeSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section
      id="section-7"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy & Feature Pills */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A1B6CF]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
                UI/UX & Creative Studio
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
              Where Technology Meets{' '}
              <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
                Creativity.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-lg leading-relaxed">
              We craft intuitive, high-performing and visually powerful digital experiences that people love to use and trust.
            </p>
          </div>

          {/* 2x2 Feature Pills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {FEATURE_PILLS.map((pill, idx) => {
              const Icon = pill.icon;
              const isActive = activeFeature === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-[#A1B6CF]/25 border-[#D0DBE9] shadow-[0_0_20px_rgba(161,182,207,0.25)]'
                      : 'glass-panel border-[#A1B6CF]/20 hover:border-[#D0DBE9]/45'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#D0DBE9] text-[#253B54]'
                          : 'bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 text-[#D0DBE9]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#F4F7FC]">{pill.title}</span>
                  </div>
                  <p className="text-[11px] text-[#D0DBE9]/70 leading-normal">{pill.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 3D Design Artboards Placeholder */}
        <div className="lg:col-span-6 h-[300px] lg:h-[480px]" />
      </div>

      {/* Bottom 5-Discipline Icons Strip */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-[#A1B6CF]/15 pointer-events-auto">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6">
          {DISCIPLINES.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.name} className="flex items-center gap-2 text-[#D0DBE9]/70 hover:text-[#F4F7FC] transition-colors">
                <Icon className="w-4 h-4 text-[#A1B6CF]" />
                <span className="text-xs font-medium text-[#F4F7FC]">{d.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

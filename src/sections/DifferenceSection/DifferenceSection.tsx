import React from 'react';
import { VANTIXIO_DIFFERENCE_PILLARS } from '../../data/siteData';
import { Zap, ShieldCheck, Rocket, Layers, Users, Cpu, Handshake } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Zap,
  ShieldCheck,
  Rocket,
  Layers,
  Users,
  Cpu,
  Handshake,
};

export const DifferenceSection: React.FC = () => {
  return (
    <section
      id="section-11"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy & 7 Value Badges */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                The Vantixio Difference
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
              More than a tech partner,{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                a growth partner.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              We combine product thinking, design, engineering and business strategy to build solutions that create lasting impact.
            </p>
          </div>

          {/* 7 Partnership Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {VANTIXIO_DIFFERENCE_PILLARS.map((p, i) => {
              const Icon = ICON_MAP[p.icon] || Rocket;
              return (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 space-y-1 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal pl-0.5">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 3D Glass 'V' Monolith Placeholder */}
        <div className="lg:col-span-6 h-[300px] lg:h-[500px]" />
      </div>
    </section>
  );
};


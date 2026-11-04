import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/siteData';
import { Code2, Smartphone, Sparkles, Cloud, PenTool, TrendingUp, Check } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Code2,
  Smartphone,
  Sparkles,
  Cloud,
  PenTool,
  TrendingUp,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('ai-and-automation');

  return (
    <section
      id="section-3"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A1B6CF]" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
              Capabilities & Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
            End-to-End{' '}
            <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
              Digital Solutions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D0DBE9]/85 leading-relaxed max-w-2xl">
            From strategy and design to development and scale — we build complete digital ecosystems.
          </p>
        </div>

        {/* 6 Interactive Service Monolith Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pointer-events-auto">
          {SERVICES_DATA.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Code2;
            const isSelected = selectedService === srv.id;

            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  isSelected
                    ? 'glass-panel border-[#D0DBE9]/70 bg-[#314A66]/75 shadow-[0_0_30px_rgba(161,182,207,0.22)] -translate-y-1'
                    : 'glass-panel glass-panel-hover border-[#A1B6CF]/20 hover:border-[#D0DBE9]/45'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#D0DBE9] text-[#253B54] shadow-[0_0_20px_rgba(208,219,233,0.5)]'
                        : 'bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 text-[#D0DBE9]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  {srv.isHero && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D0DBE9] px-2 py-0.5 rounded-full bg-[#A1B6CF]/15 border border-[#A1B6CF]/30">
                      CORE CAPABILITY
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-semibold text-[#F4F7FC] mb-2">{srv.title}</h3>
                <p className="text-xs text-[#D0DBE9]/75 leading-relaxed mb-4">{srv.description}</p>

                {/* Sub-capabilities list */}
                <ul className="space-y-1.5 border-t border-[#A1B6CF]/15 pt-3">
                  {srv.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#D0DBE9]/70">
                      <Check className="w-3.5 h-3.5 text-[#A1B6CF] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

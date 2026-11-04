import React from 'react';
import { ABOUT_CARDS } from '../../data/siteData';
import { Target, Eye, Diamond, Users, Code2, Layers, Infinity, ArrowUpRight } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const ICON_MAP: Record<string, any> = {
  Target,
  Eye,
  Diamond,
  Users,
};

const BOTTOM_METRICS = [
  { label: 'Products & Platforms', icon: Code2 },
  { label: 'Multiple Industries', icon: Layers },
  { label: 'A Growing Team', icon: Users },
  { label: 'Long-Term Impact', icon: Infinity },
];

export const AboutSection: React.FC = () => {
  const { openProjectModal } = useModal();

  return (
    <section
      id="section-9"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy & 4 Value Cards */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A1B6CF]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
                The Studio
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
              The People Behind the{' '}
              <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
                Possibilities.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-lg leading-relaxed">
              Vantixio is a technology and product studio helping businesses build, scale and create real impact from our global engineering lab.
            </p>

            {/* Quick Action Pillars */}
            <div className="flex items-center gap-3 pt-1">
              {['Build', 'Scale', 'Grow'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full text-xs font-mono font-medium text-[#D0DBE9] bg-[#A1B6CF]/15 border border-[#A1B6CF]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 4 Company Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ABOUT_CARDS.map((card, i) => {
              const Icon = ICON_MAP[card.icon] || Target;
              return (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-xl border border-[#A1B6CF]/20 hover:border-[#D0DBE9]/50 space-y-1.5 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9] group-hover:bg-[#D0DBE9] group-hover:text-[#253B54] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#F4F7FC] group-hover:text-[#D0DBE9] transition-colors">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D0DBE9]/70 leading-normal pl-0.5">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Architectural Headquarters Card Preview */}
        <div className="lg:col-span-6 pointer-events-auto">
          <div className="relative rounded-2xl overflow-hidden glass-panel border border-[#A1B6CF]/30 p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(37,59,84,0.35)]">
            <div className="flex items-center justify-between border-b border-[#A1B6CF]/15 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1B6CF] block">
                  Studio Headquarters
                </span>
                <h3 className="text-2xl font-display font-bold text-[#F4F7FC] mt-1">Hyderabad, India</h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 text-xs font-mono text-[#D0DBE9]">
                GLOBAL LAB
              </div>
            </div>

            {/* Architectural Studio Facade Mockup Graphic */}
            <div className="h-48 sm:h-56 rounded-xl bg-gradient-to-br from-[#314A66] to-[#253B54] border border-[#A1B6CF]/20 p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-lg font-display font-bold text-[#F4F7FC] tracking-widest block">
                    VANTIXIO®
                  </span>
                  <span className="text-[10px] font-mono text-[#A1B6CF] tracking-wider">
                    TECHNOLOGY & PRODUCT STUDIO
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#D0DBE9] animate-pulse shadow-[0_0_10px_#D0DBE9]" />
              </div>

              {/* Architectural Glass Grid Pattern */}
              <div className="grid grid-cols-4 gap-2 opacity-60">
                <div className="h-16 rounded bg-[#A1B6CF]/10 border border-[#A1B6CF]/20" />
                <div className="h-16 rounded bg-[#A1B6CF]/15 border border-[#A1B6CF]/30" />
                <div className="h-16 rounded bg-[#A1B6CF]/10 border border-[#A1B6CF]/20" />
                <div className="h-16 rounded bg-[#A1B6CF]/20 border border-[#A1B6CF]/40" />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-[#D0DBE9]/60 uppercase flex items-center justify-between">
                <span>PRODUCTS / TECH / DESIGN / AI</span>
                <span className="text-[#A1B6CF]">EST. 2026</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#D0DBE9]/80">Multidisciplinary team of engineers & designers</span>
              <button
                onClick={openProjectModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0DBE9] hover:text-[#F4F7FC] transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4 Institutional Anchors */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-[#A1B6CF]/15 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {BOTTOM_METRICS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="flex items-center justify-center gap-2.5 text-[#D0DBE9]/80">
                <Icon className="w-4 h-4 text-[#A1B6CF]" />
                <span className="text-xs sm:text-sm font-medium text-[#F4F7FC]">{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { ArrowUpRight, Calendar, Rocket, Layers, Zap, Infinity } from 'lucide-react';

const SUMMIT_PILLARS = [
  { label: 'From Idea to Product', icon: Rocket },
  { label: 'End-to-End Execution', icon: Layers },
  { label: 'Fast, Reliable & Scalable', icon: Zap },
  { label: 'Built for Long-Term Growth', icon: Infinity },
];

export const FinalCTASection: React.FC = () => {
  const { openProjectModal, openScheduleModal } = useModal();

  return (
    <section
      id="section-14"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy & Conversion Actions */}
        <div className="lg:col-span-7 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                The Next Step
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light text-white leading-tight">
              Ready to build{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                what's next?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              Let's turn your idea into a real product, platform or business at scale.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={openProjectModal}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-[#010409] bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={openScheduleModal}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full text-sm sm:text-base font-medium text-white glass-panel hover:border-cyan-400/60 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>

        {/* Right Space for Cosmic Stargate 'V' Portal and Earth in 3D Canvas */}
        <div className="lg:col-span-5 h-[300px] lg:h-[500px]" />
      </div>

      {/* Bottom 4 Pillars Bar */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-white/10 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {SUMMIT_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 text-slate-300">
                <div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


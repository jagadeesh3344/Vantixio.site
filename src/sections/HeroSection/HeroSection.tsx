import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { useScroll } from '../../contexts/ScrollContext';
import { ArrowUpRight, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openProjectModal } = useModal();
  const { scrollToSection } = useScroll();

  return (
    <section
      id="section-1"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 pointer-events-auto">
          {/* Category Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A1B6CF]" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
              A Digital Creation Studio
            </span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light tracking-tight text-[#F4F7FC] leading-[1.08]">
            We turn ambitious ideas into{' '}
            <span className="italic font-normal text-[#D0DBE9] text-glow-glacier block sm:inline">
              digital reality.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D0DBE9]/85 max-w-xl leading-relaxed font-normal">
            Designing, building and scaling digital products, experiences and intelligent systems for a more connected world.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={openProjectModal}
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base btn-glacier-primary"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection(4)}
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#F4F7FC] glass-pill hover:border-[#D0DBE9]/60 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-[#A1B6CF]/20 border border-[#A1B6CF]/40 flex items-center justify-center text-[#F4F7FC]">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Explore Our Work</span>
            </button>
          </div>
        </div>

        {/* Right 3D Volume Placeholder (Three.js Glass Torus renders behind in canvas) */}
        <div className="lg:col-span-5 h-[300px] lg:h-[500px]" />
      </div>
    </section>
  );
};

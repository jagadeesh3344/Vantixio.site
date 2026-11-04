import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/siteData';
import { useModal } from '../../contexts/ModalContext';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const { openProjectModal } = useModal();
  const [activeIdx, setActiveIdx] = useState(0);

  const prevProduct = () => {
    setActiveIdx((prev) => (prev === 0 ? PRODUCTS_DATA.length - 1 : prev - 1));
  };
  const nextProduct = () => {
    setActiveIdx((prev) => (prev >= PRODUCTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = PRODUCTS_DATA[activeIdx];

  return (
    <section
      id="section-4"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A1B6CF]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
                Proprietary Platforms
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
              Products That Create{' '}
              <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
                Impact.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-lg leading-relaxed">
              In-house platforms engineered for real-world operations — from laundry and garment care logistics to omnichannel retail automation.
            </p>
          </div>

          {/* Product Category Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {PRODUCTS_DATA.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeIdx === idx
                    ? 'bg-[#A1B6CF]/25 border border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_15px_rgba(161,182,207,0.3)]'
                    : 'glass-panel text-[#D0DBE9]/70 hover:text-[#F4F7FC] border-[#A1B6CF]/20'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Active Product Highlight Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#A1B6CF]/30 space-y-4 shadow-[0_0_30px_rgba(37,59,84,0.3)]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#A1B6CF] uppercase tracking-widest block">
                  {current.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-[#F4F7FC] mt-1">{current.name}</h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#A1B6CF]/15 border border-[#A1B6CF]/35 text-xs font-mono text-[#D0DBE9]">
                LIVE PRODUCTION
              </div>
            </div>

            <p className="text-sm text-[#D0DBE9]/85 leading-relaxed">{current.description}</p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#A1B6CF]/15">
              {Object.entries(current.metrics).map(([key, val]) => (
                <div key={key}>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1B6CF] block">
                    {key}
                  </span>
                  <span className="text-xl font-display font-bold text-[#F4F7FC]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={openProjectModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold btn-glacier-primary"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#A1B6CF]">
                0{activeIdx + 1} / 0{PRODUCTS_DATA.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevProduct}
                  className="w-8 h-8 rounded-full glass-panel hover:border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9] hover:text-[#F4F7FC] transition-colors"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextProduct}
                  className="w-8 h-8 rounded-full glass-panel hover:border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9] hover:text-[#F4F7FC] transition-colors"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D Hardware/Interface Volume Placeholder */}
        <div className="lg:col-span-6 h-[300px] lg:h-[500px]" />
      </div>
    </section>
  );
};

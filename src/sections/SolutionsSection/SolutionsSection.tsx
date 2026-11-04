import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/siteData';
import { Shirt, BarChart3, Layers, Sparkle, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Shirt,
  BarChart3,
  Layers,
  Sparkle,
};

const CATEGORIES = ['SaaS', 'Mobile Apps', 'Platforms', 'Automation'];

export const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SaaS');

  return (
    <section
      id="section-4"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Top Header & Filter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pointer-events-auto">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                What We Build
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
              Digital products for{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                real-world impact.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              From SaaS platforms and mobile apps to enterprise systems — we build products that solve real problems and create value.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === cat
                    ? 'bg-cyan-400/20 border border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'glass-panel text-slate-400 hover:text-white border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Hardware Canvas Placeholder area */}
        <div className="h-[200px] lg:h-[260px]" />

        {/* Bottom Featured Products Carousel Strip */}
        <div className="space-y-4 pointer-events-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              Featured Products
            </span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full glass-panel hover:border-cyan-400 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full glass-panel hover:border-cyan-400 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS_DATA.map((prod) => {
              const Icon = ICON_MAP[prod.icon] || Layers;
              return (
                <div
                  key={prod.id}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{prod.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                    <span className="text-[11px] font-mono text-cyan-400">View Platform</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


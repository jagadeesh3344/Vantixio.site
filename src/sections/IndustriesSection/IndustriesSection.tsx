import React, { useState } from 'react';
import { CASE_STUDIES, ENTERPRISE_METRICS } from '../../data/siteData';
import { useModal } from '../../contexts/ModalContext';
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Users, Rocket, Zap, Globe, ShoppingBag, Shirt, HeartPulse, UtensilsCrossed, Truck, GraduationCap, Building2 } from 'lucide-react';

const METRIC_ICONS: Record<string, any> = {
  Layers,
  Users,
  Rocket,
  Zap,
  Globe,
};

const INDUSTRY_DOMAINS = [
  { name: 'Retail & Omnichannel', icon: ShoppingBag, desc: 'Real-time multi-store POS, inventory sync and vendor reconciliation.' },
  { name: 'Laundry & Garment Care', icon: Shirt, desc: 'On-demand routing, automated billing, and commercial plant processing.' },
  { name: 'Healthcare Systems', icon: HeartPulse, desc: 'Secure patient portals, telemetry integrations, and operational workflows.' },
  { name: 'Food & Beverage', icon: UtensilsCrossed, desc: 'Supply chain visibility, kitchen display tech, and store fleet analytics.' },
  { name: 'Logistics & Supply Chain', icon: Truck, desc: 'Autonomous dispatch, route optimization, and driver telemetry.' },
  { name: 'Education Platforms', icon: GraduationCap, desc: 'Scalable LMS, collaborative student environments, and assessment APIs.' },
  { name: 'Enterprise Operations', icon: Building2, desc: 'Internal ERPs, automated compliance monitoring, and financial settlement.' },
];

export const IndustriesSection: React.FC = () => {
  const { openProjectModal } = useModal();
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  const prevIndustry = () => {
    setActiveIndustryIdx((prev) => (prev === 0 ? INDUSTRY_DOMAINS.length - 1 : prev - 1));
  };
  const nextIndustry = () => {
    setActiveIndustryIdx((prev) => (prev >= INDUSTRY_DOMAINS.length - 1 ? 0 : prev + 1));
  };

  const current = INDUSTRY_DOMAINS[activeIndustryIdx];

  return (
    <section
      id="section-8"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto space-y-10 my-auto">
        {/* Top Header Row */}
        <div className="max-w-3xl space-y-3 pointer-events-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A1B6CF]" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
              Industry Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
            Built for Different Industries.{' '}
            <span className="italic font-normal text-[#D0DBE9] text-glow-glacier block sm:inline">
              Designed for Impact.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D0DBE9]/85 max-w-xl leading-relaxed">
            Cross-industry digital platforms and operational systems engineered for real-world reliability, enterprise compliance, and measurable business growth.
          </p>
        </div>

        {/* Industry Sector Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
          {/* Left Industry List */}
          <div className="lg:col-span-5 space-y-2">
            {INDUSTRY_DOMAINS.map((domain, idx) => {
              const Icon = domain.icon;
              const isSelected = activeIndustryIdx === idx;
              return (
                <button
                  key={domain.name}
                  onClick={() => setActiveIndustryIdx(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl border flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-[#A1B6CF]/25 border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_20px_rgba(161,182,207,0.2)]'
                      : 'glass-panel text-[#D0DBE9]/70 hover:text-[#F4F7FC] border-[#A1B6CF]/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F4F7FC]' : 'text-[#A1B6CF]'}`} />
                    <span className="text-xs sm:text-sm font-medium">{domain.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A1B6CF]/60">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Right Active Industry Featured Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#A1B6CF]/30 shadow-[0_0_35px_rgba(37,59,84,0.35)] space-y-6">
              <div className="flex items-center justify-between border-b border-[#A1B6CF]/15 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#A1B6CF] block">
                    TARGET DOMAIN 0{activeIndustryIdx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#F4F7FC] mt-1">{current.name}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 text-xs font-mono text-[#D0DBE9]">
                  PROVEN ARCHITECTURE
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#D0DBE9]/85 leading-relaxed">
                {current.desc}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1B6CF] block">
                  Enterprise Operational Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D0DBE9]/80">
                  <div className="p-3 rounded-lg bg-[#253B54]/40 border border-[#A1B6CF]/20">
                    High-Volume Transaction Processing
                  </div>
                  <div className="p-3 rounded-lg bg-[#253B54]/40 border border-[#A1B6CF]/20">
                    Role-Based Access & Audit Logging
                  </div>
                  <div className="p-3 rounded-lg bg-[#253B54]/40 border border-[#A1B6CF]/20">
                    Real-Time Telemetry & Alarms
                  </div>
                  <div className="p-3 rounded-lg bg-[#253B54]/40 border border-[#A1B6CF]/20">
                    Autonomous Dispatch & Reconciliation
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#A1B6CF]/15">
                <button
                  onClick={openProjectModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold btn-glacier-primary"
                >
                  <span>Build For {current.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevIndustry}
                    className="w-8 h-8 rounded-full glass-panel hover:border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9]"
                    aria-label="Previous industry"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextIndustry}
                    className="w-8 h-8 rounded-full glass-panel hover:border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9]"
                    aria-label="Next industry"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 5-Column Enterprise Impact Metrics Bar */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-[#A1B6CF]/15 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {ENTERPRISE_METRICS.map((metric, i) => {
            const Icon = METRIC_ICONS[metric.icon] || Layers;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-display font-bold text-[#F4F7FC] block">
                    {metric.value}
                    {metric.suffix}
                  </span>
                  <span className="text-xs text-[#D0DBE9]/70 block">{metric.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

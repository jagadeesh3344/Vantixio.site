import React, { useState } from 'react';
import { Lightbulb, Compass, Layers, Code2, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react';

const PROCESS_STAGES = [
  {
    id: 'discover',
    step: '01',
    name: 'Discover',
    icon: Lightbulb,
    title: 'Strategic Exploration & Systems Discovery',
    desc: 'Deep discovery into business models, competitive dynamics, architecture requirements, and user mental models.',
    deliverables: ['Technical Architecture Blueprint', 'Product Roadmap', 'Risk & Feasibility Matrix'],
  },
  {
    id: 'strategize',
    step: '02',
    name: 'Strategize',
    icon: Compass,
    title: 'Product Strategy & Technology Mapping',
    desc: 'Defining core feature hierarchy, data flows, cloud infrastructure sizing, and API service boundaries.',
    deliverables: ['System Architecture Spec', 'Data Model Schema', 'Milestone Schedule'],
  },
  {
    id: 'design',
    step: '03',
    name: 'Design',
    icon: Layers,
    title: 'High-Fidelity Systems & Prototyping',
    desc: 'Translating product strategy into interactive design systems, responsive micro-interactions, and spatial ergonomics.',
    deliverables: ['Figma Design Tokens', 'Interactive High-Fidelity Prototype', 'Design QA Matrix'],
  },
  {
    id: 'engineer',
    step: '04',
    name: 'Engineer',
    icon: Code2,
    title: 'Full-Stack Agile Engineering',
    desc: 'Rigorous test-driven development using modern TypeScript, distributed cloud backends, and modular frontends.',
    deliverables: ['Production Codebase', 'Automated CI/CD Pipelines', 'Security & Load Testing'],
  },
  {
    id: 'launch',
    step: '05',
    name: 'Launch',
    icon: Rocket,
    title: 'Orchestrated Zero-Downtime Deployment',
    desc: 'Staged multi-region cloud deployment, mobile app store validation, monitoring alarms, and telemetry setup.',
    deliverables: ['Store & Cloud Release', 'Telemetry & APM Dashboards', 'Failover Runbooks'],
  },
  {
    id: 'evolve',
    step: '06',
    name: 'Evolve',
    icon: RefreshCw,
    title: 'Continuous Optimization & Growth',
    desc: 'Iterative feature sprints, latency tuning, AI workflow automation, and infrastructure autoscaling.',
    deliverables: ['Performance Analytics', 'Feature Sprints', '24/7 SRE Support'],
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState('discover');
  const activeStage = PROCESS_STAGES.find((s) => s.id === activeStageId) || PROCESS_STAGES[0];

  return (
    <section
      id="section-5"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Interactive Process Controls */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A1B6CF]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
                Execution Methodology
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#F4F7FC] leading-tight">
              From Idea to{' '}
              <span className="italic font-normal text-[#D0DBE9] text-glow-glacier">
                Impact.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-lg leading-relaxed">
              A proven, end-to-end architectural pathway that turns ambitious ideas into scalable products: Discover → Strategize → Design → Engineer → Launch → Evolve.
            </p>
          </div>

          {/* Continuous Sequence Step Bar */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {PROCESS_STAGES.map((stg) => {
              const isActive = activeStageId === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStageId(stg.id)}
                  className={`p-2.5 rounded-xl text-center transition-all ${
                    isActive
                      ? 'bg-[#A1B6CF]/25 border border-[#D0DBE9] text-[#F4F7FC] shadow-[0_0_15px_rgba(161,182,207,0.3)]'
                      : 'glass-panel text-[#D0DBE9]/70 hover:text-[#F4F7FC] border-[#A1B6CF]/20'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#A1B6CF] block">{stg.step}</span>
                  <span className="text-xs font-semibold block truncate mt-0.5">{stg.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#A1B6CF]/30 shadow-[0_0_30px_rgba(37,59,84,0.3)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display font-bold text-[#F4F7FC]">{activeStage.title}</h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#A1B6CF]/15 text-[#D0DBE9] border border-[#A1B6CF]/30">
                PHASE {activeStage.step}
              </span>
            </div>
            <p className="text-sm text-[#D0DBE9]/85 leading-relaxed">{activeStage.desc}</p>
            <div className="space-y-2 pt-2 border-t border-[#A1B6CF]/15">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1B6CF] block">
                Deliverables & Outcomes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeStage.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#D0DBE9]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A1B6CF] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D Infinity Loop Placeholder */}
        <div className="lg:col-span-6 h-[300px] lg:h-[500px]" />
      </div>
    </section>
  );
};

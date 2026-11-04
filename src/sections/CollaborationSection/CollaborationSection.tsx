import React from 'react';
import { COLLABORATION_MODES, COLLABORATION_STEPS } from '../../data/siteData';
import { useModal } from '../../contexts/ModalContext';
import { MessageSquare, Layers, Code2, TrendingUp, ArrowUpRight, Calendar, Users, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  MessageSquare,
  Layers,
  Code2,
  TrendingUp,
};

export const CollaborationSection: React.FC = () => {
  const { openProjectModal, openScheduleModal } = useModal();

  return (
    <section
      id="section-13"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-24 select-none pointer-events-none"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy, Modes & Dual CTAs */}
        <div className="lg:col-span-6 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                Let's Create Together
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
              Have an idea?{' '}
              <span className="italic font-normal text-cyan-400 text-glow-cyan">
                Let's build it together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              Whether you're a startup, a growing business or an enterprise, we're here to turn your ideas into scalable, real-world products.
            </p>
          </div>

          {/* 4 Collaboration Mode Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {COLLABORATION_MODES.map((mode, i) => {
              const Icon = ICON_MAP[mode.icon] || Code2;
              return (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 space-y-1.5 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {mode.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal pl-0.5">{mode.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={openProjectModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-sky-500 text-[#010409] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={openScheduleModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white glass-panel hover:border-cyan-400/60 transition-all"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>

        {/* Right Studio Collaborative Scene Preview */}
        <div className="lg:col-span-6 pointer-events-auto">
          <div className="rounded-2xl glass-panel border border-cyan-400/30 p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Vantixio Product Studio</h3>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                ACTIVE CO-CREATION
              </span>
            </div>

            {/* Collaborative Studio Room Illustration Card */}
            <div className="h-52 sm:h-64 rounded-xl bg-gradient-to-br from-[#071933] to-[#020712] border border-cyan-400/20 p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">Sprint 14 in Progress</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">HYDERABAD LAB</span>
              </div>

              {/* Agile Whiteboard Sprint Checklist Graphic */}
              <div className="space-y-2 max-w-xs p-3 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                  Agile Kanban Deliverables
                </span>
                {['✓ Discovery & Systems Architecture', '✓ High-Fidelity Interactive Design', '✓ Full-Stack Engineering & QA', '● Automated Multi-Region Deploy'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2">
                <span>Dedicated Product Managers & Engineers</span>
                <span className="text-cyan-400 font-semibold">Real-Time Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4-Step Collaboration Timeline Rail */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-white/10 pointer-events-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLABORATION_STEPS.map((s, idx) => (
            <div key={s.step} className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#010409] transition-all shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


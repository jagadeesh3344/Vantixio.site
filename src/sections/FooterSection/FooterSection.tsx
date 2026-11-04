import React from 'react';
import { VantixioLogo } from '../../components/navigation/VantixioLogo';
import { useModal } from '../../contexts/ModalContext';
import { useScroll } from '../../contexts/ScrollContext';
import { FOOTER_COLUMNS } from '../../data/siteData';
import { ArrowUpRight, Calendar, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const SOCIAL_ICONS: Record<string, any> = {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
};

export const FooterSection: React.FC = () => {
  const { openProjectModal, openScheduleModal } = useModal();
  const { scrollToSection } = useScroll();

  return (
    <footer
      id="section-15"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-20 select-none pointer-events-auto"
    >
      {/* Top Grand Brand Portal Climax */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-12 pb-16">
        <div className="inline-flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Let's Build Together
          </span>
          <span className="w-8 h-[1px] bg-cyan-400" />
        </div>

        {/* Hero Centered Logo Emblem */}
        <div className="flex flex-col items-center justify-center gap-2">
          <VantixioLogo size="xl" showWordmark={true} />
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-cyan-400 uppercase mt-2">
            Product. Technology. Design. AI.
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          A technology and product studio helping businesses build, scale and create real impact.
        </p>

        {/* Dual Conversion Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
          <button
            onClick={openProjectModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-[#010409] bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={openScheduleModal}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm sm:text-base font-medium text-white glass-panel hover:border-cyan-400/60 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Schedule a Call</span>
          </button>
        </div>
      </div>

      {/* Electric Blue Horizon Fissure Line */}
      <div className="relative w-full max-w-7xl mx-auto my-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_20px_#00f0ff]" />
      </div>

      {/* Main Master Footer Columns */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-8 border-b border-white/10 text-sm">
        {/* Brand Summary Column */}
        <div className="lg:col-span-4 space-y-4">
          <VantixioLogo size="sm" />
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
            A technology and product studio building digital products, scalable platforms and intelligent solutions for real-world businesses.
          </p>
          <span className="text-[11px] font-mono text-cyan-400 block">
            Ideas into Impact.
          </span>
        </div>

        {/* Explore Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {FOOTER_COLUMNS.explore.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-cyan-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Services</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {FOOTER_COLUMNS.services.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-cyan-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Contact</h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <a
              href={`mailto:${FOOTER_COLUMNS.contact.email}`}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{FOOTER_COLUMNS.contact.email}</span>
            </a>
            <a
              href={`tel:${FOOTER_COLUMNS.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{FOOTER_COLUMNS.contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{FOOTER_COLUMNS.contact.location}</span>
            </div>
          </div>
        </div>

        {/* Stay Connected (Social Pills) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Stay Connected</h4>
          <div className="flex items-center gap-2.5">
            {FOOTER_COLUMNS.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon] || Linkedin;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl glass-panel hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Sub-Footer */}
      <div className="max-w-7xl w-full mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>© 2026 Vantixio®. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </a>
          <span className="text-slate-700">•</span>
          <a href="#terms" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </a>
          <span className="text-slate-700">•</span>
          <a href="#cookies" className="hover:text-slate-300 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};


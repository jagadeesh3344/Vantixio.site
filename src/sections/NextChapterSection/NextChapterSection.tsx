import React from 'react';
import { VantixioLogo } from '../../components/navigation/VantixioLogo';
import { useModal } from '../../contexts/ModalContext';
import { FOOTER_COLUMNS } from '../../data/siteData';
import { ArrowUpRight, Calendar, Rocket, Layers, Zap, Infinity, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const SOCIAL_ICONS: Record<string, any> = {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
};

const SUMMIT_PILLARS = [
  { label: 'From Idea to Product', icon: Rocket },
  { label: 'End-to-End Execution', icon: Layers },
  { label: 'Fast, Reliable & Scalable', icon: Zap },
  { label: 'Built for Long-Term Growth', icon: Infinity },
];

export const NextChapterSection: React.FC = () => {
  const { openProjectModal, openScheduleModal } = useModal();

  return (
    <footer
      id="section-10"
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-24 pb-12 select-none pointer-events-auto"
    >
      {/* Top Climax Block */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Copy & Conversion Actions */}
        <div className="lg:col-span-7 space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A1B6CF]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#A1B6CF] font-semibold">
                The Next Chapter
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light text-[#F4F7FC] leading-tight">
              Ready to build{' '}
              <span className="italic font-normal text-[#D0DBE9] text-glow-glacier block sm:inline">
                what's next?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0DBE9]/85 max-w-lg leading-relaxed">
              Turn your ambitious vision into a scalable product, intelligent system or global platform with our dedicated engineering studio.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={openProjectModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base btn-glacier-primary"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={openScheduleModal}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm sm:text-base font-medium text-[#F4F7FC] glass-pill hover:border-[#D0DBE9]/60 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-[#A1B6CF]" />
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>

        {/* Right Space for Cosmic Summit Ribbon Portal & Earth in 3D Canvas */}
        <div className="lg:col-span-5 h-[300px] lg:h-[480px]" />
      </div>

      {/* 4 Pillars Bar */}
      <div className="max-w-7xl w-full mx-auto py-8 border-t border-[#A1B6CF]/15 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {SUMMIT_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 text-[#D0DBE9]/80">
                <div className="w-9 h-9 rounded-full bg-[#A1B6CF]/15 border border-[#A1B6CF]/30 flex items-center justify-center text-[#D0DBE9]">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F4F7FC]">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Master Footer Navigation Grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-10 border-t border-b border-[#A1B6CF]/15 text-sm pointer-events-auto">
        {/* Brand Summary Column */}
        <div className="lg:col-span-4 space-y-4">
          <VantixioLogo size="sm" />
          <p className="text-xs sm:text-sm text-[#D0DBE9]/75 max-w-sm leading-relaxed">
            A technology and product studio building digital products, scalable platforms and intelligent solutions for real-world businesses.
          </p>
          <span className="text-[11px] font-mono text-[#A1B6CF] block">
            Ideas into Impact.
          </span>
        </div>

        {/* Explore Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-[#F4F7FC] uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2 text-xs text-[#D0DBE9]/70">
            {FOOTER_COLUMNS.explore.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-[#F4F7FC] transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-[#F4F7FC] uppercase tracking-widest">Services</h4>
          <ul className="space-y-2 text-xs text-[#D0DBE9]/70">
            {FOOTER_COLUMNS.services.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-[#F4F7FC] transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-[#F4F7FC] uppercase tracking-widest">Contact</h4>
          <div className="space-y-2.5 text-xs text-[#D0DBE9]/70">
            <a
              href={`mailto:${FOOTER_COLUMNS.contact.email}`}
              className="flex items-center gap-2 hover:text-[#F4F7FC] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#A1B6CF] shrink-0" />
              <span className="truncate">{FOOTER_COLUMNS.contact.email}</span>
            </a>
            <a
              href={`tel:${FOOTER_COLUMNS.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-[#F4F7FC] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A1B6CF] shrink-0" />
              <span>{FOOTER_COLUMNS.contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-[#D0DBE9]/70">
              <MapPin className="w-3.5 h-3.5 text-[#A1B6CF] shrink-0" />
              <span>{FOOTER_COLUMNS.contact.location}</span>
            </div>
          </div>
        </div>

        {/* Stay Connected (Social Pills) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-mono font-bold text-[#F4F7FC] uppercase tracking-widest">Stay Connected</h4>
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
                  className="w-9 h-9 rounded-xl glass-panel hover:border-[#D0DBE9] flex items-center justify-center text-[#D0DBE9] hover:text-[#F4F7FC] transition-all hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Sub-Footer */}
      <div className="max-w-7xl w-full mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D0DBE9]/50 gap-4 pointer-events-auto">
        <span>© 2026 Vantixio®. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-[#D0DBE9] transition-colors">
            Privacy Policy
          </a>
          <span className="text-[#A1B6CF]/40">•</span>
          <a href="#terms" className="hover:text-[#D0DBE9] transition-colors">
            Terms of Service
          </a>
          <span className="text-[#A1B6CF]/40">•</span>
          <a href="#cookies" className="hover:text-[#D0DBE9] transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};


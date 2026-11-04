import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../contexts/ModalContext';
import { useScroll } from '../../contexts/ScrollContext';
import { VantixioLogo } from './VantixioLogo';
import { X, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const MENU_ITEMS = [
  { name: 'The Beginning', section: 1, tag: 'Hero' },
  { name: 'Our Philosophy', section: 2, tag: 'Ethos' },
  { name: 'What We Do', section: 3, tag: 'Capabilities' },
  { name: 'What We Build', section: 4, tag: 'Platforms' },
  { name: 'Our Approach', section: 5, tag: 'Process' },
  { name: 'Engineering Intelligence', section: 6, tag: 'Architecture & AI' },
  { name: 'Creative Studio', section: 7, tag: 'Design & Motion' },
  { name: 'A World of Possibilities', section: 8, tag: 'Industries' },
  { name: 'About Vantixio', section: 9, tag: 'The Studio' },
  { name: 'The Next Chapter', section: 10, tag: 'Contact & Scale' },
];

export const FullScreenMenu: React.FC = () => {
  const { isMenuOpen, closeMenu, openProjectModal } = useModal();
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#253B54]/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-[#A1B6CF]/15">
            <VantixioLogo size="md" />
            <button
              onClick={closeMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full glass-panel hover:border-[#D0DBE9] text-[#F4F7FC] transition-all focus:outline-none focus:ring-2 focus:ring-[#A1B6CF]"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-[#A1B6CF]" />
            </button>
          </div>

          {/* Menu Content Grid */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
            {/* Left Primary Section Navigation */}
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A1B6CF] font-mono mb-4 block">
                Spatial Experience Sitemap (10 Primary Scenes)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => {
                      closeMenu();
                      scrollToSection(item.section);
                    }}
                    className="group flex items-center justify-between text-left py-2.5 px-3 rounded-lg hover:bg-[#506A89]/20 border border-transparent hover:border-[#A1B6CF]/20 transition-all"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#819AB8] group-hover:text-[#D0DBE9] transition-colors">
                        {String(item.section).padStart(2, '0')}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-[#D0DBE9] group-hover:text-[#F4F7FC] group-hover:translate-x-1 transition-all">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#819AB8] group-hover:text-[#A1B6CF] transition-colors">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Contact & CTA Column */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#A1B6CF]/15 pt-8 lg:pt-0 lg:pl-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A1B6CF] font-mono mb-4 block">
                  Connect With Studio
                </span>
                <p className="text-sm text-[#A1B6CF] mb-6 leading-relaxed">
                  Ready to turn an ambitious idea into digital reality? Connect directly with our engineering and design leads.
                </p>
                <div className="space-y-4 text-sm text-[#D0DBE9]">
                  <a
                    href="mailto:hello@vantixio.com"
                    className="flex items-center gap-3 hover:text-[#F4F7FC] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#A1B6CF]" />
                    <span>hello@vantixio.com</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 hover:text-[#F4F7FC] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#A1B6CF]" />
                    <span>+91 98765 43210</span>
                  </a>
                  <div className="flex items-center gap-3 text-[#819AB8]">
                    <MapPin className="w-4 h-4 text-[#A1B6CF]" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#A1B6CF]/15">
                <button
                  onClick={() => {
                    closeMenu();
                    openProjectModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm btn-glacier-primary"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#819AB8] border-t border-[#A1B6CF]/15">
            <span>© 2026 Vantixio®. Ideas into Impact.</span>
            <span className="font-mono">Arctic Blue • 10 Scenes Spatial Mode</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { VantixioLogo } from './VantixioLogo';
import { useModal } from '../../contexts/ModalContext';
import { useScroll } from '../../contexts/ScrollContext';
import { ArrowUpRight, Menu, X, Volume2, VolumeX } from 'lucide-react';

export const Header: React.FC = () => {
  const { openProjectModal, toggleMenu, isMenuOpen } = useModal();
  const { scrollToSection } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#253B54]/85 backdrop-blur-md border-b border-[#A1B6CF]/20 shadow-2xl'
          : 'py-5 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection(1)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0DBE9] rounded-lg p-1 -m-1"
          aria-label="Vantixio Home"
        >
          <VantixioLogo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#D0DBE9]/85">
          <button
            onClick={() => scrollToSection(3)}
            className="hover:text-[#F4F7FC] transition-colors focus:outline-none focus-visible:text-[#F4F7FC]"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection(4)}
            className="hover:text-[#F4F7FC] transition-colors focus:outline-none focus-visible:text-[#F4F7FC]"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection(5)}
            className="hover:text-[#F4F7FC] transition-colors focus:outline-none focus-visible:text-[#F4F7FC]"
          >
            Approach
          </button>
          <button
            onClick={() => scrollToSection(9)}
            className="hover:text-[#F4F7FC] transition-colors focus:outline-none focus-visible:text-[#F4F7FC]"
          >
            About
          </button>
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full glass-panel hover:border-[#D0DBE9]/50 text-[#D0DBE9] hover:text-[#F4F7FC] transition-all"
            title={soundEnabled ? 'Mute ambient sound' : 'Enable ambient sound'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D0DBE9] animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Primary Action Pill */}
          <button
            onClick={openProjectModal}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-[#F4F7FC] glass-pill hover:glass-pill-active transition-all duration-300 border-[#A1B6CF]/40 hover:border-[#D0DBE9] shadow-[0_0_15px_rgba(161,182,207,0.2)] hover:shadow-[0_0_25px_rgba(208,219,233,0.35)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D0DBE9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 rounded-full glass-panel hover:border-[#D0DBE9] text-[#F4F7FC] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0DBE9]"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-[#D0DBE9]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

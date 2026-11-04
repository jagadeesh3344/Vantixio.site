import React from 'react';
import { useScroll } from '../../contexts/ScrollContext';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  const { activeSection, scrollToSection } = useScroll();

  if (activeSection > 3) return null;

  return (
    <div
      onClick={() => scrollToSection(activeSection + 1)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer select-none opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Scroll to explore"
    >
      {/* Mouse Icon with Animated Wheel in Glacier Silver */}
      <div className="w-5 h-8 rounded-full border border-[#A1B6CF]/50 flex items-start justify-center p-1 bg-[#253B54]/40 backdrop-blur-md">
        <div className="w-1 h-2 bg-[#D0DBE9] rounded-full animate-bounce shadow-[0_0_8px_rgba(208,219,233,0.8)]" />
      </div>

      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#A1B6CF] text-center">
        Scroll to Explore
      </span>

      <ChevronDown className="w-3.5 h-3.5 text-[#D0DBE9] animate-pulse -mt-1" />
    </div>
  );
};

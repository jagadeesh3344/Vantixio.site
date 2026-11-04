import React from 'react';

interface VantixioLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const VantixioLogo: React.FC<VantixioLogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-base sm:text-lg tracking-[0.2em]',
    lg: 'text-2xl tracking-[0.25em]',
    xl: 'text-4xl sm:text-5xl tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Faceted Vantixio 'V' Glyph in Glacier Silver / Arctic Navy */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_0_14px_rgba(161,182,207,0.4)]`}
      >
        <defs>
          <linearGradient id="vWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D0DBE9" />
            <stop offset="100%" stopColor="#506A89" />
          </linearGradient>
          <linearGradient id="vWingRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A1B6CF" />
            <stop offset="100%" stopColor="#314A66" />
          </linearGradient>
          <linearGradient id="vCenterFacet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4F7FC" />
            <stop offset="100%" stopColor="#A1B6CF" />
          </linearGradient>
        </defs>
        {/* Left Wing */}
        <path d="M18 20 L38 20 L50 72 L32 72 Z" fill="url(#vWingLeft)" />
        {/* Right Wing */}
        <path d="M82 20 L62 20 L50 72 L68 72 Z" fill="url(#vWingRight)" />
        {/* Luminous Center Crease */}
        <polygon points="50,72 42,50 58,50" fill="url(#vCenterFacet)" opacity="0.95" />
      </svg>

      {/* Vantixio Logotype */}
      {showWordmark && (
        <span className={`font-display font-bold uppercase text-[#F4F7FC] ${textSizes[size]}`}>
          VANTIXIO<span className="text-[0.6em] text-[#A1B6CF] font-normal align-super ml-0.5">®</span>
        </span>
      )}
    </div>
  );
};

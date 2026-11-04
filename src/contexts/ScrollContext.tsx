import React, { createContext, useContext, useState, useEffect } from 'react';
import Lenis from 'lenis';

interface ScrollContextType {
  activeSection: number;
  setActiveSection: (index: number) => void;
  continuousSection: number;
  setContinuousSection: (section: number) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  lenis: Lenis | null;
  setLenis: (lenis: Lenis | null) => void;
  scrollToSection: (index: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(1);
  const [continuousSection, setContinuousSection] = useState(1.0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  const scrollToSection = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: 0, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        setActiveSection,
        continuousSection,
        setContinuousSection,
        scrollProgress,
        setScrollProgress,
        lenis,
        setLenis,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};


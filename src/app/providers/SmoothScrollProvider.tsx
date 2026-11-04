import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll } from '../../contexts/ScrollContext';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setLenis, setActiveSection, setContinuousSection, setScrollProgress } = useScroll();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    setLenis(lenis);

    const computeContinuousSection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const vh = window.innerHeight;
      const scrollCenter = scrollY + vh * 0.5;

      const centers: number[] = [];
      const totalScenes = 10;
      for (let i = 1; i <= totalScenes; i++) {
        const el = document.getElementById(`section-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          centers.push(top + el.offsetHeight * 0.5);
        } else {
          centers.push(vh * (i - 0.5));
        }
      }

      if (centers.length === 0) return 1.0;
      if (scrollCenter <= centers[0]) return 1.0;
      if (scrollCenter >= centers[centers.length - 1]) return 10.0;

      for (let i = 0; i < centers.length - 1; i++) {
        if (scrollCenter >= centers[i] && scrollCenter <= centers[i + 1]) {
          const t = (scrollCenter - centers[i]) / (centers[i + 1] - centers[i]);
          return (i + 1) + t;
        }
      }
      return 1.0;
    };

    // Synchronize Lenis with GSAP ScrollTrigger and continuous spatial tracking
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      if (e.progress !== undefined) {
        setScrollProgress(e.progress);
      }
      const cs = computeContinuousSection();
      setContinuousSection(cs);
      const rounded = Math.min(10, Math.max(1, Math.round(cs)));
      setActiveSection(rounded);
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      const cs = computeContinuousSection();
      setContinuousSection(cs);
      setActiveSection(Math.min(10, Math.max(1, Math.round(cs))));
    };
    window.addEventListener('resize', handleResize);

    // Initial evaluation after layout settles
    const timer = setTimeout(() => {
      handleResize();
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setLenis, setActiveSection, setContinuousSection, setScrollProgress]);

  return <>{children}</>;
};


import { useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari = /safari/.test(userAgent) && !/chrome|edge|firefox/.test(userAgent);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    
    // Keep native scrolling on touch devices and Safari for predictable input.
    if (isMobile || isSafari) {
      root.style.scrollBehavior = 'smooth';
      return () => { root.style.scrollBehavior = previousScrollBehavior; };
    }

    try {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });
      lenisRef.current = lenis;
      root.style.scrollBehavior = 'auto';

      let frameId: number;
      function raf(time: number) {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      }

      frameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frameId);
        lenisRef.current = null;
        lenis.destroy();
        root.style.scrollBehavior = previousScrollBehavior;
      };
    } catch (error) {
      console.warn('Lenis initialization failed, falling back to native scroll', error);
      root.style.scrollBehavior = 'smooth';
      return () => { root.style.scrollBehavior = previousScrollBehavior; };
    }
  }, []);

  return useCallback((target: string | HTMLElement) => {
    const element = typeof target === 'string' ? document.getElementById(target) : target;
    if (!element) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -100 });
    } else {
      window.scrollTo({
        top: window.scrollY + element.getBoundingClientRect().top - 100,
        behavior: 'smooth',
      });
    }
  }, []);
};

export default useSmoothScroll;

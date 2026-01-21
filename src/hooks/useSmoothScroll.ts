import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari = /safari/.test(userAgent) && !/chrome|edge|firefox/.test(userAgent);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Disable Lenis on Safari (causes repeated crashes) and mobile
    if (isMobile || isSafari) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      let frameId: number;
      function raf(time: number) {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      }

      frameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frameId);
        lenis.destroy();
      };
    } catch (error) {
      console.warn('Lenis initialization failed, falling back to native scroll', error);
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);
};

export default useSmoothScroll;

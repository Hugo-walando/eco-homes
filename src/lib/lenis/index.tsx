'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // Cleanup pour éviter les fuites mémoire
      lenis.destroy();
    };
  }, []);
};

'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

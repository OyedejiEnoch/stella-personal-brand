'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollProgress() {
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          transformOrigin: 'left center',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-brand-accent"
      />
    </div>
  );
}

'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const OUTCOMES = [
  {
    num: '01',
    title: 'Global Visibility',
    description: 'Get discovered by recruiters, founders and clients across continents — not just your local network.',
  },
  {
    num: '02',
    title: 'High-Paying Clients',
    description: 'Position yourself so premium opportunities and inbound leads start finding you instead of the other way round.',
  },
  {
    num: '03',
    title: 'Authority Positioning',
    description: 'Become the go-to name in your niche with a brand that signals expertise in the first five seconds.',
  },
  {
    num: '04',
    title: 'Content That Converts',
    description: 'Turn posts into conversations, and conversations into revenue, using a repeatable AI-assisted system.',
  },
  {
    num: '05',
    title: 'The 9-Figure Playbook',
    description: 'Learn the exact mechanics behind brands that have generated real, measurable results worldwide.',
  },
];

export default function Outcomes() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const flierRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Flier centerpiece — pop in on enter, then breathe gently
      if (flierRef.current) {
        // Entrance handles opacity + scale; the float owns `y` so they don't fight
        gsap.from(flierRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        });

        gsap.to(flierRef.current, {
          y: -14,
          duration: 3.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      const mm = gsap.matchMedia();

      // Pinned horizontal scroll — desktop / tablet only
      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current;
        if (!track) return;

        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="outcomes"
      className="relative bg-brand-dark text-white md:h-screen md:overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row md:h-screen md:flex-nowrap md:w-max"
      >
        {/* Intro panel — the flier is the centerpiece */}
        <div className="flex shrink-0 items-center justify-center px-6 py-20 sm:px-10 md:h-screen md:w-screen lg:px-16">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">

            {/* Flier */}
            <div className="relative shrink-0">
              {/* soft glow behind the flier */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-brand-accent/25 blur-3xl"
              />
              {/* decorative accents */}
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-brand-accent/40"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-brand-accent/30 blur-xl"
              />

              <div
                ref={flierRef}
                className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform"
              >
                <Image
                  src="/estelleFlier.jpeg"
                  alt="Personal Brand Masterclass — 3-day virtual training flier"
                  width={464}
                  height={580}
                  priority
                  className="h-auto w-[17rem] sm:w-[21rem] lg:w-[25rem]"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-md text-center lg:text-left">
              <div className="text-brand-accent font-bold text-xs tracking-[0.2em] uppercase mb-4">
                What Changes For You
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Five shifts that<br />reposition your brand.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-medium">
                This isn&apos;t theory. Each day moves you from invisible to in-demand.
                <span className="hidden md:inline"> Keep scrolling →</span>
              </p>
            </div>

          </div>
        </div>

        {/* Outcome panels */}
        {OUTCOMES.map((item) => (
          <div
            key={item.num}
            className="group flex shrink-0 flex-col justify-center border-t border-white/10 px-6 py-16 sm:px-10 md:h-screen md:w-[80vw] md:max-w-[34rem] md:border-t-0 md:border-l"
          >
            <div className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white/10 mb-6">
              {item.num}
            </div>
            <div className="w-10 h-1 bg-brand-accent mb-8 transition-all duration-500 group-hover:w-20" />
            <h3 className="text-3xl md:text-4xl font-bold mb-5">{item.title}</h3>
            <p className="text-md text-white/60 max-w-sm leading-relaxed font-medium tracking-wider">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

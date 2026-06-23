'use client';

import * as React from 'react';
import { BadgeCheck } from 'lucide-react';
import ImageCarousel, { CarouselImage } from '@/components/ui/image-carousel';

/**
 * Proof screenshots showing Stella's results and credibility.
 *
 * Images live in `public/testimonials/` (the `stellaTest*` files). Add or
 * remove entries freely — the carousel adapts to the count automatically.
 */
const STELLA_PROOF: CarouselImage[] = [
  { src: '/testimonials/stellaTest2.jpeg', alt: 'Proof of Stella’s results 1' },
  { src: '/testimonials/stellaTest3.jpeg', alt: 'Proof of Stella’s results 2' },
  { src: '/testimonials/stellaTest4.jpeg', alt: 'Proof of Stella’s results 3' },
  { src: '/testimonials/stellaTest5.jpeg', alt: 'Proof of Stella’s results 4' },
  { src: '/testimonials/stellaTest6.jpeg', alt: 'Proof of Stella’s results 5' },
];

export default function StellaProof() {
  return (
    <section id="stella-proof" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary ring-1 ring-inset ring-brand-accent/30">
            <BadgeCheck size={13} />
            The Receipts
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-primary md:text-5xl">
            Why Stella is the best person to teach you personal branding
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brand-primary/60 md:text-base">
            She&apos;s not just teaching it — she&apos;s living it. Swipe through the proof.
          </p>
        </div>

        <ImageCarousel images={STELLA_PROOF} />
      </div>
    </section>
  );
}

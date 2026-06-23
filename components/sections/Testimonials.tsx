'use client';

import * as React from 'react';
import { Quote } from 'lucide-react';
import ImageCarousel, { CarouselImage } from '@/components/ui/image-carousel';

/**
 * Testimonial screenshots.
 *
 * Drop the owner's screenshot images into `public/testimonials/` and list them
 * here (portrait/tall images look best). Add or remove entries freely — the
 * carousel adapts to the count automatically.
 */
const TESTIMONIALS: CarouselImage[] = [
  { src: '/testimonials/test1.jpeg', alt: 'Attendee testimonial 1' },
  { src: '/testimonials/test11.jpeg', alt: 'Attendee testimonial 2' },
  { src: '/testimonials/test9.jpeg', alt: 'Attendee testimonial 3' },
  { src: '/testimonials/test6.jpeg', alt: 'Attendee testimonial 4' },
  { src: '/testimonials/test5.jpeg', alt: 'Attendee testimonial 5' },
  { src: '/testimonials/test7.jpeg', alt: 'Attendee testimonial 6' },
  { src: '/testimonials/test8.jpeg', alt: 'Attendee testimonial 7' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary ring-1 ring-inset ring-brand-accent/30">
            <Quote size={13} />
            Real Words, Real People
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-primary md:text-5xl">
            What past attendees are saying
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brand-primary/60 md:text-base">
            Swipe through a few of the messages we&apos;ve received.
          </p>
        </div>

        <ImageCarousel images={TESTIMONIALS} />
      </div>
    </section>
  );
}

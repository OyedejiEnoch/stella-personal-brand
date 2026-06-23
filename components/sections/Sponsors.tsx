'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

/**
 * Brand sponsor.
 *
 * Logo lives in `public/logos/`. Update the copy below to match what the
 * sponsor would like said about them.
 */
const SPONSOR = {
  name: 'African Tech Journal',
  logo: '/logos/logo1.svg',
  tagline: 'Media Partner',
  description:
    'African Tech Journal is a media platform spotlighting the founders, stories and innovations shaping technology across Africa — championing the next generation of global talent.',
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-brand-light py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary ring-1 ring-inset ring-brand-accent/30"
          >
            <Handshake size={13} />
            Proudly Sponsored
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-brand-primary md:text-4xl"
          >
            Brands believe this is a{' '}
            <span className="underline decoration-brand-accent decoration-4 underline-offset-4">
              transformational
            </span>{' '}
            masterclass
          </motion.h2>
        </div>

        {/* Sponsor card — logo left, details right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-brand-primary/10 bg-white p-8 shadow-sm md:flex-row md:items-center md:gap-10 md:p-10"
        >
          {/* Logo */}
          <div className="flex shrink-0 items-center justify-center md:border-r md:border-brand-primary/10 md:pr-10">
            <img
              src={SPONSOR.logo}
              alt={SPONSOR.name}
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>

          {/* Details */}
          <div className="text-center md:text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-accent">
              {SPONSOR.tagline}
            </div>
            <h3 className="mt-1 text-xl font-bold text-brand-primary md:text-2xl">
              {SPONSOR.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-primary/70 md:text-base">
              {SPONSOR.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

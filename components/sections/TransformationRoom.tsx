'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Globe, Laptop } from 'lucide-react';

const AUDIENCE = [
  { icon: Users, label: 'Founders' },
  { icon: Sparkles, label: 'Creators' },
  { icon: Laptop, label: 'Remote Workers' },
  { icon: Globe, label: '10+ Countries' },
];

export default function TransformationRoom() {
  return (
    <section
      id="transformation-room"
      className="relative overflow-hidden bg-black py-24 text-white md:py-36"
    >
      {/* Spotlight glow — evokes stepping into a room */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-accent/10 blur-[140px]"
      />
      {/* Faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent ring-1 ring-inset ring-white/15"
        >
          <Sparkles size={13} />
          Read This Carefully
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight md:text-5xl"
        >
          This is not a regular{' '}
          <span className="relative whitespace-nowrap text-white/45 line-through decoration-brand-accent/70 decoration-2">
            &lsquo;Come&nbsp;and&nbsp;Learn&rsquo;
          </span>{' '}
          Masterclass
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          You already have the Skill. It&apos;s time to land a{' '}
          <span className="font-semibold text-yellow-300">7&ndash;9 figure client</span> by
          pitching your skills &amp; service in a room with{' '}
          <span className="font-semibold text-white">founders, creators &amp; remote workers</span>{' '}
          across <span className="font-semibold text-yellow-300">10+ countries.</span>
        </motion.p>

        {/* Audience chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {AUDIENCE.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              <Icon size={15} className="text-brand-accent" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* The payoff */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="relative mt-14"
        >
          <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            This is a
          </span>
          <h3 className="relative mt-3 bg-gradient-to-r from-brand-accent via-white to-brand-accent bg-clip-text text-4xl font-extrabold uppercase leading-none tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Transformation
            <br className="sm:hidden" /> Room
          </h3>
          {/* Glow under the payoff */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-32 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

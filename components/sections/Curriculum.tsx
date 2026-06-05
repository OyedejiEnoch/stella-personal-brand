'use client';

import * as React from 'react';
import { motion } from 'motion/react';

const LEARNING_POINTS = [
  {
    num: '01',
    title: 'LinkedIn & Positioning',
    description: 'Secrets to understanding LinkedIn & Positioning your Personal brand.',
    dark: false,
  },
  {
    num: '02',
    title: '7-Figure Brand Building',
    description: 'How to build a 7 figure Personal brand as a Creator, Remote worker & Founder.',
    dark: true,
  },
  {
    num: '03',
    title: 'Storytelling Strategies',
    description: 'Storytelling strategies to build your Personal brand & business.',
    dark: false,
  },
  {
    num: '04',
    title: 'International Opportunities',
    description: 'How to attract International opportunities & get into companies like TikTok, Google & LinkedIn.',
    dark: false,
  },
  {
    num: '05',
    title: 'AI Content Systems',
    description: 'Leveraging AI to create your content system efficiently.',
    dark: false,
  },
  {
    num: '06',
    title: 'Acquisition & Sales',
    description: 'Strategies to attract high ticket clients, close sales & increase revenue on LinkedIn.',
    dark: true,
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-brand-primary mb-6"
          >
            What You&apos;ll Learn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-md md:text-lg text-brand-primary/70 tracking-wider"
          >
            A deep dive into the exact systems and strategies used to build 
            global authority and predictable income.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
          {LEARNING_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-10 border-b border-r border-gray-100 transition-colors ${
                point.dark ? 'bg-brand-dark text-white' : 'bg-white text-brand-primary hover:bg-gray-50'
              }`}
            >
              <div 
                className={`text-5xl font-extrabold mb-4 opacity-20 tracking-tighter ${
                  point.dark ? 'text-white' : 'text-brand-primary'
                }`}
              >
                {point.num}
              </div>
              
              <div className="w-8 h-1 bg-brand-accent mb-6"></div>
              
              <h3 className="text-lg font-bold mb-4">
                {point.title}
              </h3>
              
              <p className={`text-[13px] tracking-wider leading-relaxed ${point.dark ? 'text-white/70' : 'text-brand-primary/70'}`}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';
import { motion } from 'motion/react';

const SPEAKERS = [
  {
    name: 'Mystery Speaker 1',
    countryCode: 'US',
    flag: '🇺🇸',
    role: 'US FOUNDER & LINKEDIN TOP CREATOR',
    description: 'A powerhouse in building global audiences and attracting high-ticket clients through personal branding.',
  },
  {
    name: 'Mystery Speaker 2',
    countryCode: 'NG',
    flag: '🇳🇬',
    role: 'AWARD WINNING LINKEDIN CREATOR',
    description: 'Nigerian-based global advocate empowering changemakers and building communities that span continents.',
  },
  {
    name: 'Mystery Speaker 3',
    countryCode: 'NG',
    flag: '🇳🇬',
    role: 'TIKTOK EMPLOYEE',
    description: 'Expert in navigating the global tech landscape, sharing insights on securing roles in top companies like TikTok.',
  },
  {
    name: 'Mystery Speaker 4',
    countryCode: 'IE',
    flag: '🇮🇪',
    role: 'FOUNDER OF ESTER BARE',
    description: 'Dublin-based founder sharing the exact strategies to position your business for international visibility.',
  },
  {
    name: 'Mystery Speaker 5',
    countryCode: 'IE',
    flag: '🇮🇪',
    role: 'LINKEDIN EMPLOYEE',
    description: 'Insider secrets from a LinkedIn professional on how to optimize your profile to attract the right opportunities globally.',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-white text-brand-primary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            Real Insights From<br />Industry Leaders.
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {SPEAKERS.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[22rem]"
            >
              {/* Graphic Card */}
              <div className="w-full aspect-[3/4] rounded-xl bg-gray-900 mb-6 relative overflow-hidden flex flex-col justify-between p-5 border shadow-sm group-hover:shadow-md transition-shadow">
                {/* Background Image / Blur */}
                <img 
                  src={`https://picsum.photos/seed/${index + 40}/400/600`} 
                  alt="Speaker Silhouette" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 blur-xl group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                
                {/* Top content */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-sm">
                    <span className="text-white text-xs font-bold font-serif italic">E</span>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">Day {index + 1}</div>
                    <div className="text-[8px] text-white/50">Masterclass</div>
                  </div>
                </div>

                {/* Main vertical text */}
                <div className="absolute inset-y-0 right-4 flex flex-col justify-center pointer-events-none overflow-hidden mix-blend-overlay opacity-60">
                  <span className="text-white font-extrabold uppercase tracking-widest text-4xl -rotate-90 origin-right whitespace-nowrap opacity-40 translate-x-1/2">
                    Mystery
                  </span>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 text-white mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-accent text-xs">▶</span>
                    <span className="font-bold text-sm">Speaker Reveal</span>
                  </div>
                  <p className="text-[10px] text-white/70 border-b border-white/20 pb-3 mb-3 leading-relaxed">
                    Unlocking strategies for global opportunities and authority positioning.
                  </p>
                  <div className="flex justify-between items-end text-[8px] tracking-wider text-white/60">
                    <div>
                      Register On:<br/>
                      <strong className="text-white">estelle.com</strong>
                    </div>
                    <div className="text-right">
                      June 2025
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Info */}
              <div className="w-full text-left">
                <h3 className="text-xl font-bold mb-1 flex items-center flex-wrap gap-2 text-brand-primary">
                  {speaker.name} 
                  <span className="text-xs font-semibold text-brand-primary/50 tracking-wider pt-1">{speaker.countryCode}</span>
                  <span className="text-lg pt-0.5">{speaker.flag}</span>
                </h3>
                <div className="text-brand-accent font-bold text-[10px] mb-3 uppercase tracking-wider">
                  {speaker.role}
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed font-medium">
                  {speaker.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

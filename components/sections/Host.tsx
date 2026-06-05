'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Host() {
  return (
    <section id="host" className="py-24 bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Host Card Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-md aspect-[3/4] rounded-xl bg-gray-900 relative overflow-hidden flex flex-col justify-between p-6 border border-white/10 shadow-2xl">
              {/* Background Image Image */}
              <img 
                src="/stella2.jpeg" 
                alt="Stella Nwosu" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/organizer/800/1000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
              
              {/* Top content */}
              <div className="relative z-10 flex justify-end items-start w-full">
                <div className="text-right text-white">
                  <div className="text-xs text-white/70 uppercase tracking-widest font-semibold mb-1">
                    Masterclass Host
                  </div>
                </div>
              </div>

              {/* Main vertical text */}
              <div className="absolute inset-y-0 right-6 flex flex-col justify-center pointer-events-none overflow-hidden mix-blend-overlay opacity-60">
                <span className="text-white font-extrabold uppercase tracking-widest text-6xl -rotate-90 origin-right whitespace-nowrap opacity-20 translate-x-[20%]">
                  Authoritative
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative z-10 text-white mt-auto">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 mb-2">
                  <span className="text-sm font-bold tracking-wide">Stella Nwosu</span>
                </div>
                <p className="text-sm text-white/80 border-b border-white/20 pb-4 mb-4 leading-relaxed font-medium">
                  Learn the proven systems that work to attract global opportunities.
                </p>
                <div className="flex justify-between items-end text-[10px] tracking-wider text-white/60 font-semibold uppercase">
                  <div>
                    Host &<br/>
                    <strong className="text-white">Strategist</strong>
                  </div>
                  <div className="text-right">
                    Estelle
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-12 h-12 rounded-sm bg-brand-primary border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-sm bg-brand-primary border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Host Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="text-brand-accent font-bold text-sm tracking-[0.2em] uppercase mb-4">
              The Host
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 text-white flex items-baseline gap-3">
              Stella Nwosu <span className="text-2xl font-bold text-white/50">NG</span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
              <p>
                Stella is a Personal Brand Strategist and Growth Marketer with over 5 years of experience leading marketing campaigns for companies across Africa, North America, Europe, and Asia.
              </p>
              
              <p>
                Her expertise goes beyond building audiences; it's about building highly profitable businesses. She has successfully helped her clients' personal brands generate <span className="text-white font-bold">9 figures in revenue</span>, secure international job relocation offers, and land premium speaking opportunities and brand deals.
              </p>

              <p>
                With a track record of driving massive engagement—such as generating 50,000 impressions in 7 days for targeted social media strategies—Stella understands the exact mechanics of data-driven growth, authentic brand positioning, and converting visibility into tangible monetization.
              </p>

              <p>
                By joining this masterclass, you are learning directly from a practitioner who is actively shaping the digital footprints of professionals, founders, and creators, turning their ideas into global opportunities.
              </p>
            </div>
            
            <div className="mt-10 h-1 w-16 bg-white/20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle parallax: image drifts up as the hero scrolls away
      gsap.to(imageRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-light">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/20 text-brand-primary text-sm font-semibold mb-6">
              <Calendar size={16} />
              <span>June 22–26, 2025 • Virtual Intensive</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-primary mb-6 leading-[1.1]">
              Personal Brand <br className="hidden md:block" />
              <span className="text-brand-accent">Masterclass</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-primary/80 mb-8 leading-relaxed font-medium">
              Positioning your Personal Brand & Business for Global Opportunities, Attract High Paying Clients & Global Visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="#pricing"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-sm bg-brand-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-primary/90 hover:-translate-y-1"
              >
                Claim Your Spot
                <ArrowRight size={18} />
              </Link>
              <span className="text-sm text-brand-primary/60 font-medium">
                Hosted by Personal Branding Lab x Estelle
              </span>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://picsum.photos/seed/${i * 10}/100/100`}
                    alt="Attendee"
                  />
                ))}
              </div>
              <div className="text-sm font-medium text-brand-primary/80">
                Join <span className="font-bold text-brand-primary">500+</span> professionals worldwide
              </div>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-brand-accent/20 rounded-t-full rounded-b-[2rem] transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-brand-primary/5 rounded-t-full rounded-b-[2rem] transform -translate-x-2 -translate-y-2"></div>
            
            {/* The organizer photo */}
            <div className="relative h-full w-full rounded-t-full rounded-b-[2rem] overflow-hidden border-8 border-white shadow-xl bg-gray-200">
              <img
                ref={imageRef}
                src="/stella.jpeg"
                alt="Estelle"
                className="w-full h-full object-cover scale-110 will-change-transform"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/organizer/800/1000";
                }}
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary font-bold text-xl">
                ★
              </div>
              <div>
                <p className="text-sm font-bold text-brand-primary">Estelle</p>
                <p className="text-xs text-brand-primary/60">Host & Branding Expert</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

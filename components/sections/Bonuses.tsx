'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Award, Users } from 'lucide-react';

export default function Bonuses() {
  return (
    <section className="py-12 bg-brand-primary text-white border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-4 md:pr-8"
          >
            <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
              <Award size={32} className="text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Free Certificate of Completion</h3>
              <p className="text-white/70 text-sm">Provided for all attendees successfully finishing the Masterclass.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-4 md:pl-8 pt-8 md:pt-4"
          >
            <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
              <Users size={32} className="text-brand-accent" />
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 bg-brand-accent text-brand-primary text-xs font-bold rounded uppercase tracking-wider mb-2">Fast Action Bonus</div>
              <h3 className="text-xl font-bold mb-1">1-on-1 Private Consultation</h3>
              <p className="text-white/70 text-sm">Exclusive for the first 20 VIP Members to register.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

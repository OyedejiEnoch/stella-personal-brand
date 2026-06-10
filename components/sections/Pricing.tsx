'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'Standard Access',
    price: '10K/$10',
    tagline: '“Get Visible”',
    description: 'Perfect for you to gain clarity trying to stop being invisible.',
    features: [
      'Day 1 Speaker: US Founder & LinkedIn Top Creator',
      'Day 2 Speaker: LinkedIn Top Creator (120k + Linkedin Community)',
      'Full Access 3-Day virtual masterclass',
      'Access to Recordings & materials for Day 1-3',
      'Free LinkedIn Profile & Content Optimization guide',
      'Free Content Audit for First 20 people',
    ],
    transformations: [
      'Position your personal brand professionally',
      'Build a LinkedIn profile that attracts attention',
      'Understand what to post and why',
      'Gain clarity on your niche and audience'
    ],
    catchPhrase: '“If people can’t understand your value in 5 seconds, they’ll ignore you.”',
    buttonText: 'Get Standard Access',
    popular: false,
    color: 'bg-white',
    textColor: 'text-brand-primary'
  },
  {
    name: 'VIP Access',
    price: '₦30,000',
    tagline: '“Consistent 7-9 Figures”',
    badge: 'Recommended',
    description: 'Perfect for founders, remote workers & creators, ready to increase income.',
    features: [
      'Day 3 Speaker: Linkedin Employee',
      'Day 2 Speaker: Founder of Ester bare',
      'Access to Recordings and Materials for Day 1-3',
      'Free Personal brand growth roadmap',
      'Free content monitization strategy guide',
      'Private networking, 1-1 access with all speakers',
      'We spotlight your skill/business to community members across 15+ countries'
    ],
    transformations: [
      'Attract higher-paying opportunities',
      'Position yourself as an authority',
      'Increase profile views and inbound leads',
      'Turn content into conversations and clients'
    ],
    catchPhrase: '“You don’t need more skills. You need better positioning.”',
    buttonText: 'Get Premium Access',
    popular: true,
    color: 'bg-brand-primary',
    textColor: 'text-white'
  },
  // {
  //   name: 'VIP Access',
  //   price: '₦50,000',
  //   tagline: '“Become the Go-To Authority”',
  //   badge: 'Limited to 30 people',
  //   description: 'Perfect for founders, creators, and professionals ready to dominate their niche and attract premium opportunities globally.',
  //   features: [
  //     'EVERYTHING in Premium PLUS:',
  //     'Day 5 Speaker: LinkedIn Employee',
  //     'Full access to Day 1-5 virtual sessions',
  //     'Recordings & materials of Day 1-5',
  //     'Free Content monetization strategy guide',
  //     'Private VIP mastermind group',
  //     'Priority networking 1-1 access with all speakers',
  //     'Pitch your skills/business to 100+ members'
  //   ],
  //   transformations: [
  //     'Build a consistent client acquisition funnel',
  //     'Attract high-ticket clients organically',
  //     'Understand how to close sales on LinkedIn',
  //     'Create a personal brand that generates opportunities'
  //   ],
  //   catchPhrase: '“The highest-paid people online are not always the most talented, they are the best positioned.”',
  //   buttonText: 'Get VIP Access',
  //   popular: false,
  //   color: 'bg-brand-dark',
  //   textColor: 'text-white'
  // }
];

const PAYMENT_URL = 'https://nestuge.com/personalbrandmasterclass';

export default function Pricing() {
  const handlePayment = () => {
    window.location.href = PAYMENT_URL;
  };

  return (
    <section id="pricing" className="py-24 bg-brand-light">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-brand-primary mb-6"
          >
            Choose Your Access Level
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-primary/70"
          >
            Invest in yourself and unlock the blueprint to global visibility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 shadow-sm transition-transform hover:-translate-y-2 border ${
                tier.popular ? 'border-brand-accent shadow-2xl scale-100 lg:scale-105 z-10' : 'border-gray-200'
              } ${tier.color} ${tier.textColor}`}
            >
              {tier.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  tier.popular ? 'bg-brand-accent text-brand-primary' : 'bg-gray-100 text-brand-primary'
                }`}>
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-extrabold mb-1">{tier.price}</div>
                <div className={`text-sm font-semibold mb-4 ${tier.popular ? 'text-brand-accent' : 'text-brand-accent'}`}>
                  {tier.tagline}
                </div>
                <p className={`text-sm ${tier.popular ? 'text-white/80' : 'text-gray-400'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-3 opacity-90">What&apos;s Included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check size={18} className={`mt-0.5 shrink-0 ${tier.popular ? 'text-brand-accent' : 'text-brand-accent'}`} />
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-3 opacity-90">Transformation:</h4>
                  <ul className="space-y-3">
                    {tier.transformations.map((trans, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${tier.popular ? 'bg-brand-accent' : 'bg-brand-primary'}`} />
                        <span className="opacity-90">{trans}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-current/10">
                <p className="text-sm italic mb-6 opacity-90 text-center font-medium">
                  {tier.catchPhrase}
                </p>
                <button
                  onClick={handlePayment}
                  className={`w-full py-4 px-6 rounded-md font-bold text-center transition-all ${
                    tier.popular
                      ? 'bg-brand-accent text-brand-primary hover:bg-white'
                      : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

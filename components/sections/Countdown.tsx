'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Masterclass begins June 30, 2026 at 9:00 AM WAT (UTC+1)
const TARGET_DATE = new Date('2026-06-30T09:00:00+01:00').getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hrs' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
];

export default function Countdown() {
  const [mounted, setMounted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const isLive =
    mounted &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="w-full bg-brand-dark text-white">
      {/* subtle top hairline for separation from the light hero above */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between sm:gap-6">
          {/* Left — status badge + message */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-accent ring-1 ring-inset ring-brand-accent/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
              </span>
              {isLive ? 'Live Now' : 'Starts Soon'}
            </span>
            <p className="text-sm font-semibold text-white/90">
              {isLive ? 'The Masterclass is live' : 'Masterclass begins in'}
            </p>
          </div>

          {/* Center — countdown */}
          {!isLive && (
            <div className="flex items-center gap-2 sm:gap-3">
              {UNITS.map((unit, i) => (
                <React.Fragment key={unit.key}>
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 min-w-[2.75rem] items-center justify-center rounded-lg border border-white/10 bg-white/5 px-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
                      <span className="text-xl font-extrabold tabular-nums tracking-tight text-white sm:text-2xl">
                        {mounted ? pad(timeLeft[unit.key]) : '--'}
                      </span>
                    </div>
                    <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      {unit.label}
                    </span>
                  </div>
                  {i < UNITS.length - 1 && (
                    <span className="-mt-4 text-lg font-bold text-brand-accent/50">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Right — CTA */}
          <Link
            href="#pricing"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-accent transition-colors hover:text-white"
          >
            Register Now
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

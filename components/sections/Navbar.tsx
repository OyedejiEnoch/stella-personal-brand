'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Estelle" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = e.currentTarget.nextElementSibling as HTMLSpanElement;
                  if (span) span.style.display = 'inline-block';
                }}
              />
              <span className="text-2xl font-bold tracking-tight text-brand-primary hidden">Estelle</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-primary/80 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-sm bg-brand-primary px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-primary/90 hover:scale-105"
            >
              Join Masterclass
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex flex-shrink-0 items-center">
            <button
              type="button"
              className="text-brand-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-brand-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Link
                  href="#pricing"
                  className="block w-full text-center rounded-sm bg-brand-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Masterclass
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

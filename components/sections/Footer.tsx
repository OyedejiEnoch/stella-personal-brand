import * as React from 'react';
import Link from 'next/link';
import { Target, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark space-y-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block text-3xl font-bold tracking-tight text-white mb-6">
              Estelle
            </Link>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Positioning your Personal Brand & Business for Global Opportunities, Attract High Paying Clients & Global Visibility.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#hero" className="text-white/60 hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="#curriculum" className="text-white/60 hover:text-brand-accent transition-colors">Curriculum</Link></li>
              <li><Link href="#speakers" className="text-white/60 hover:text-brand-accent transition-colors">Speakers</Link></li>
              <li><Link href="#pricing" className="text-white/60 hover:text-brand-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>Virtual Event</li>
              <li>support@estelle.com</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Estelle x Personal Branding Lab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

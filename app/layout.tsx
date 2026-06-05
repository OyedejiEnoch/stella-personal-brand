import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScrolling from '@/components/SmoothScrolling';
import ScrollProgress from '@/components/ScrollProgress';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Personal Brand Masterclass | Estelle',
  description: 'Positioning your Personal Brand & Business for Global Opportunities, Attract High Paying Clients & Global Visibility',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <body suppressHydrationWarning className="antialiased font-sans bg-white text-brand-primary">
        <SmoothScrolling>
          <ScrollProgress />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

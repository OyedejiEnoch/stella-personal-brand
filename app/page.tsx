import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Curriculum from '@/components/sections/Curriculum';
import Speakers from '@/components/sections/Speakers';
import Outcomes from '@/components/sections/Outcomes';
import Pricing from '@/components/sections/Pricing';
import Host from '@/components/sections/Host';
import Bonuses from '@/components/sections/Bonuses';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Curriculum />
      <Speakers />
      <Outcomes />
      <Pricing />
      <Host />
      <Bonuses />
      <Footer />
    </main>
  );
}

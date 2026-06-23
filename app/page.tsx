import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import TransformationRoom from '@/components/sections/TransformationRoom';
import Curriculum from '@/components/sections/Curriculum';
import Speakers from '@/components/sections/Speakers';
import Outcomes from '@/components/sections/Outcomes';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Host from '@/components/sections/Host';
import StellaProof from '@/components/sections/StellaProof';
import Bonuses from '@/components/sections/Bonuses';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TransformationRoom />
      <Curriculum />
      <Speakers />
      <Outcomes />
      <Testimonials />
      <Pricing />
      <Host />
      <StellaProof />
      <Bonuses />
      <Footer />
    </main>
  );
}

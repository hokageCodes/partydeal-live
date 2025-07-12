import Navbar from '@/components/Navbar';
import CateringServicesSection from '@/components/sections/CateringServicesSection';
import Hero from '@/components/sections/HeroSection';
import OurSelectionsSection from '@/components/sections/OurSelectionsSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />
      <Navbar />
      <Hero />
      <CateringServicesSection />
      <OurSelectionsSection />
    </main>
  );
}

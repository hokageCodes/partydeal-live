"use client"
import Navbar from '@/components/Navbar';
import CateringServicesSection from '@/components/sections/CateringServicesSection';
import FAQSection from '@/components/sections/FAQSection';
import Hero from '@/components/sections/HeroSection';
import OurSelectionsSection from '@/components/sections/OurSelectionsSection';
import ReservationParallaxSection from '@/components/sections/ReservationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.webp')" }}
      />
      <Navbar />
      <Hero />
      <CateringServicesSection />
      <OurSelectionsSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <ReservationParallaxSection /> */}
    </main>
  );
}

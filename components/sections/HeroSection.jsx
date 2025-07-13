'use client';

import Navbar from "../Navbar";

// Hero Component
function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-2 sm:px-12 md:px-24 lg:px-48 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/70" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/20 rounded-full blur-lg animate-pulse delay-2000"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl animate-fade-in">
        {/* Heading */}
        <h1 className="text-5xl leading-[50px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-lighter mb-8 text-transparent bg-clip-text text-white">
          Nigeria's Premier <br /> 
          <span className="text-partyYellow">Catering</span> Experience
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide max-w-4xl mb-12 text-gray-100 opacity-90">
          From intimate gatherings to grand celebrations, we bring the flavors of Nigeria to your special moments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button className="group relative overflow-hidden min-w-[220px] px-8 py-4 bg-gradient-to-r from-yellow-400 to-partyYellow text-black rounded-lg text-lg font-semibold hover:from-partyYellow hover:to-partyYellow transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 hover:-translate-y-1">
            <a href="/order" className="relative z-10 block w-full">Book an Event</a>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group min-w-[220px] px-8 py-4 border-2 border-white/50 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm text-center">
            <a href="/order" className="block w-full">Order Food Packs</a>
          </button>
        </div>
      </div>

      {/* ✅ Scroll Indicator at the very bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function FloatingNavHero() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </main>
  );
}

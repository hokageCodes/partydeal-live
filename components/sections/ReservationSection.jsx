'use client';
import Link from 'next/link';
import React from 'react';

const ReservationParallaxSection = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image (Responsive & Always Visible) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url('/assets/img/buffet.webp')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide">
          Make a Reservation
        </h2>

        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mb-10">
          Secure your spot at our next event. Whether it’s a wedding, party, or private dinner, we’re ready to serve you.
        </p>

        <Link
          href="/order"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-center inline-block"
        >
          Book your next event
        </Link>
      </div>
    </section>
  );
};

export default ReservationParallaxSection;

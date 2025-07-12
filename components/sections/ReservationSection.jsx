'use client';
import React from 'react';

const ReservationParallaxSection = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/assets/img/buffet.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Make a Reservation
        </h2>

        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mb-10">
          Secure your spot at our next event. Whether it’s a wedding, party, or private dinner, we’re ready to serve you.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
            <a href="/order">Book Your Next Event</a>
          </button>
      </div>
    </section>
  );
};

export default ReservationParallaxSection;

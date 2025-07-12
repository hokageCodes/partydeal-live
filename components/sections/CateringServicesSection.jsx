'use client';
import Image from 'next/image';

export default function CateringServicesSection() {
  return (
    <section className="w-full py-24 px-2 md:px-12 flex flex-col items-center justify-center bg-[#FEFBF6]">
      {/* Section Heading */}
      <h2
        className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[48px] sm:leading-[56px] md:leading-[64px] lg:leading-[72px] mb-16 text-center text-[#3D3C42]"
        style={{
          fontFamily: 'Coolvetica, sans-serif',
          fontWeight: 400,
        }}
      >
        Our Catering Services
      </h2>

      {/* Cards Row */}
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-7xl">
        {/* Left Card */}
        <div
          className="relative w-full max-w-[628px] h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/service1.png"
            alt="Custom Catering Services"
            fill
            className="object-cover  bg-black/40  "
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h3 className="text-white text-[44px] sm:text-[28px] md:text-[32px] font-semibold leading-tight tracking-wider">
              Custom Catering Services
            </h3>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="relative w-full max-w-[628px] h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/service2.png"
            alt="Custom Orders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h3 className="text-white text-[44px] sm:text-[28px] md:text-[32px] font-semibold leading-tight tracking-wider">
              Custom Orders
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

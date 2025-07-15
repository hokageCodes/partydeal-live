'use client';
import Image from 'next/image';

export default function OurSelectionsSection() {
  return (
    <section className="w-full py-8 md:py-24 px-4 bg-[#FEFBF6] flex flex-col items-center text-center">
      {/* Section Heading */}
      <h5 className="text-sm font-medium tracking-widest uppercase text-black mb-4">
        Our Menu
      </h5>

      {/* Section Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-8 md:mb-16 leading-tight"
        style={{
          fontFamily: 'Coolvetica, sans-serif',
        }}
      >
        Our Client’s Favourite Selections
      </h2>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {[
          { src: '/assets/img/5.webp', caption: 'Party Jollof Rice' },
          { src: '/assets/img/small.webp', caption: 'Assorted Small Chops' },
          { src: '/assets/okele.jpg', caption: 'Assorted Traditional Food' },
          { src: '/assets/img/zobo.webp', caption: 'Asake Zobo' },
        ].map(({ src, caption }, i) => (
          <figure
            key={i}
            className="w-full max-w-[350px] mx-auto h-[400px] flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300"
          >
            <div className="w-full h-[348px] relative rounded-[12px] overflow-hidden">
              <Image
                src={src}
                alt={`Delicious ${caption}`}
                fill
                sizes="(max-width: 768px) 100vw, 302px"
                className="object-cover"
                priority={i < 2}
              />
            </div>
            <figcaption
              className="text-[22px] sm:text-[24px] md:text-[26px] leading-[32px] text-[#3D3C42] text-center"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
              }}
            >
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

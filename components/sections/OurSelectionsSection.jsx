'use client';
import Image from 'next/image';

export default function OurSelectionsSection() {
  return (
    <section className="w-full py-12 px-2 md:px-12 bg-[#FEFBF6] flex flex-col items-center text-center">
      {/* Small Heading */}
      <h5 className="text-sm text-black uppercase tracking-widest mb-4">
        Our Menu
      </h5>

      {/* Section Title */}
      <h2
        className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] text-black mb-16"
        style={{
          fontFamily: 'Coolvetica, sans-serif',
          fontWeight: 500,
        }}
      >
        Our Client's Favourite Selections
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { src: '/assets/img/5.jpg', caption: 'Party Jollof Rice' },
          { src: '/assets/img/small.jpg', caption: 'Assorted Small Chops' },
          { src: '/assets/selection3.jpg', caption: 'Assorted Traditional Food' },
          { src: '/assets/img/zobo.jpg', caption: 'Asake Zobo' },
        ].map(({ src, caption }, i) => (
          <figure
            key={i}
            className="w-[302px] h-[400px] flex flex-col items-center gap-4"
            style={{ opacity: 1 }}
          >
            <div className="w-[302px] h-[348px] relative rounded-[12px] overflow-hidden">
              <Image
                src={src}
                alt={caption}
                fill
                className="object-cover"
                priority={i < 2}
              />
            </div>
            <figcaption
              className="text-[26px] leading-[32px] text-[#3D3C42]"
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

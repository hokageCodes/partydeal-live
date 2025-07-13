'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CateringServicesSection() {
  return (
    <section className="w-full py-8 px-4 md:py-24 md:px-12 flex flex-col items-center justify-center bg-[#FEFBF6]">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] md:mb-12 leading-tight mb-8 text-center text-black"
        style={{
          fontFamily: 'Coolvetica, sans-serif',
          fontWeight: 500,
        }}
      >
        Our Catering Services
      </motion.h2>

      {/* Cards Row */}
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-7xl">
        {[ 
          {
            src: '/assets/img/party1.jpg',
            alt: 'Custom Catering Services',
            title: 'Custom Catering Services',
          },
          {
            src: '/assets/custom1.jpg',
            alt: 'Custom Orders',
            title: 'Custom Orders',
          },
        ].map(({ src, alt, title }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[628px] h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={src}
              alt={alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 628px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
              <h3 className="text-white text-[32px] sm:text-[28px] md:text-[32px] font-semibold leading-tight tracking-wider">
                {title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function PageHeader({
  bgImage,
  title,
  subtitle,
  ctaButtons = [],
}) {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar floats on top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaButtons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {ctaButtons.map((btn, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium shadow-lg transition ${
                  btn.variant === 'primary'
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    : 'bg-white hover:bg-gray-100 text-black'
                }`}
                onClick={btn.onClick}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

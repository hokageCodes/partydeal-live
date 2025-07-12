'use client';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E9E1D6] px-6 py-6 flex justify-center">
      <div
        className="w-full max-w-[1440px] bg-[#452013] rounded-[20px] px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-white"
      >
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Copyright (Center) */}
        <p className="text-sm sm:text-base text-center leading-tight">
          © {new Date().getFullYear()} Party Deal Catering.
        </p>

        {/* Social Icons (Right) */}
        <div className="flex gap-4 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

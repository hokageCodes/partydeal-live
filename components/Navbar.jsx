"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 transition-all duration-300">
      {/* Background Layer */}
      <div
        className={`px-6 py-4 rounded-2xl shadow-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-md border border-white/20'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 z-50">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-8 items-center text-white">
            {['Home', 'Catering', 'Order', 'Menu', 'Contact'].map((item) => (
              <li
                key={item}
                className="text-[16px] font-medium hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop CTA */}
          <button className="hidden sm:block px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-[14px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 pt-32">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mx-4 p-8">
            <ul className="flex flex-col items-center space-y-14 text-white mb-8">
              {['Home', 'Catering', 'Order', 'Menu', 'Contact'].map((item) => (
                <li
                  key={item}
                  className="text-[20px] font-medium hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="px-8 py-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-[16px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

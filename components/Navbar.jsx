"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Catering', href: '/catering' },
    { name: 'Order', href: '/order' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

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
        <div className="flex justify-between items-center w-full">
          {/* Logo - Far left on all devices */}
          <div className="relative w-[120px] h-[40px] shrink-0 z-50">
  <Link href="/">
    <Image
      src="/assets/logo.png"
      alt="Party Deal Catering Logo"
      fill
      sizes="(max-width: 768px) 100px, 120px"
      className="object-contain hover:scale-105 transition-transform duration-300"
    />
  </Link>
</div>


          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-8 items-center text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[16px] font-medium hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-105 block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle - Far right on mobile */}
          <button
            className="lg:hidden text-white ml-36 z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop CTA */}
          <Link href="/order">
            <button className="hidden sm:block px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-[14px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fixed background bleed */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-32">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl mx-4 p-8 shadow-2xl">
            <ul className="flex flex-col items-center space-y-14 text-white mb-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[20px] font-medium hover:text-yellow-400 transition-colors cursor-pointer block"
                    onClick={handleMobileMenuClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link href="/order">
                <button 
                  className="px-8 py-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-[16px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={handleMobileMenuClose}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
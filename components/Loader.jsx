'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setVisible(true);
    setPercent(0);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2; // Slower increment: 2–5
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setPercent(current);
    }, 70); // ~70ms = ~2s to reach 100%

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000); // 2 seconds guaranteed visibility

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white text-[#3D1F1F] flex flex-col items-center justify-center space-y-3">
      {/* Percent Counter */}
      <p className="text-[clamp(2rem,5vw,48px)] font-bold tracking-tight font-[Coolvetica,sans-serif]">
        {percent}%
      </p>

      {/* Message */}
      <p
        className="text-3xl sm:text-3xl font-medium font-[Coolvetica,sans-serif] tracking-tight text-center animate-fade-in-up opacity-0"
        style={{
          animationDelay: '0.5s',
          animationFillMode: 'forwards',
        }}
      >
        Serving unforgettable experiences...
      </p>
    </div>
  );
}

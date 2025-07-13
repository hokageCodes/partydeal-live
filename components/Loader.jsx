'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  // Track first mount only
  useEffect(() => {
    // Prevent loader from showing again on route changes
    if (sessionStorage.getItem('loaderShown')) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem('loaderShown', 'true');

    setVisible(true);
    setPercent(0);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2; // 2–5%
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setPercent(current);
    }, 70); // ~2 seconds total

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Centered Logo */}
      <div className="flex flex-col items-center justify-center">
        <img
          src="/assets/img/Logo-1.png" // ← Replace with your actual logo path (e.g., /logo.png or /images/logo.svg)
          alt="Site logo"
          className="w-72 h-72 animate-pulse object-contain"
        />
      </div>

      {/* Bottom-right percentage */}
      <p className="fixed bottom-6 right-6 text-3xl text-[#3D1F1F] font-semibold font-[Coolvetica,sans-serif]">
        {percent}%
      </p>
    </div>
  );
}

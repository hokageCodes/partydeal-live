'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [visible, setVisible] = useState(false); // Initially hidden

  useEffect(() => {
    // Only show loader for first-time visit
    if (sessionStorage.getItem('loaderShown')) return;

    sessionStorage.setItem('loaderShown', 'true');
    setVisible(true);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1200); // Show briefly for branding

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center animate-fadeOut">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/img/Logo-1.png"
          alt="Site logo"
          width={220}
          height={220}
          priority
          className="animate-pulse object-contain"
        />
      </div>

      {/* Fade-out animation */}
      <style jsx>{`
        .animate-fadeOut {
          animation: fadeOut 0.8s ease-in 0.5s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
}

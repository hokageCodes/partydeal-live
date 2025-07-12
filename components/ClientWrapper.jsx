// components/ClientWrapper.tsx
'use client';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function ClientWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 3s loader delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLoader ? <Loader /> : children}
    </>
  );
}

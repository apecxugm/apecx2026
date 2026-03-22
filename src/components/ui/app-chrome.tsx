'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from '@/src/components/ui/footer';
import Navbar from '@/src/components/ui/navbar';

interface AppChromeProps {
  children: React.ReactNode;
}

const NO_CHROME_PREFIXES = ['/registration'];

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const hideChrome = NO_CHROME_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  return (
    <>
      {children}
      {!hideChrome && <Navbar />}
      {!hideChrome && <Footer />}
    </>
  );
}

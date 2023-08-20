'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export function DynamicNavbar({ children }: { children: ReactNode }) {
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();
  return (
    <nav
      className={`group sticky top-0 z-10 flex w-full items-center justify-between ${
        scrollPosition < 300 && pathname === '/'
          ? 'transparent-nav border-b border-white/50 bg-transparent'
          : 'white-nav bg-white shadow-md'
      } p-4 transition-colors duration-500 lg:px-6`}
    >
      {children}
    </nav>
  );
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

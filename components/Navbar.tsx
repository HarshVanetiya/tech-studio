'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar once user scrolls more than 40px down
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Check initial position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none transition-all duration-350 ease-out ${
        hasScrolled
          ? 'translate-y-0 opacity-100'
          : '-translate-y-10 opacity-0'
      }`}
    >
      <div className="pointer-events-auto h-14 md:h-15 w-full md:w-[48vw] max-w-[720px] bg-[#FFFDF7]/55 backdrop-blur-2xl backdrop-saturate-180 rounded-full border border-[#E8EAED]/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] px-4.5 md:px-6 flex items-center justify-between gap-3 transition-all">
        
        {/* Brand Link to Home */}
        <Link
          href="/"
          title="IT Studio - Home"
          className="font-display font-extrabold text-base md:text-lg tracking-tight text-[#1A1C1E] flex items-center gap-2 hover:opacity-85 transition-opacity shrink-0"
        >
          <span>IT Studio</span>
          <span className="beacon-dot"></span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-[13px] rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#1A1C1E] font-semibold bg-white/80 backdrop-blur-md shadow-xs border border-[#E8EAED]'
                    : 'text-[#4A4E54] font-medium hover:text-[#1A1C1E] hover:bg-black/4'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-[#1A1C1E] hover:bg-[#2D3135] text-white text-xs md:text-[13px] font-semibold px-4 py-2 rounded-full transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </header>
  );
}

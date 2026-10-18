'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { site, sections, contactId } from '@/lib/site';
import useActiveSection from '@/components/useActiveSection';

const spyIds = [...sections.map((s) => s.id), contactId];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const active = useActiveSection(spyIds);

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slide the active pill under whichever section link is current
  useLayoutEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    setIndicator(el ? { x: el.offsetLeft, w: el.offsetWidth } : null);
  }, [active]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    history.replaceState(null, '', window.location.pathname);
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}
    >
      <div
        inert={!hasScrolled}
        className="pointer-events-auto h-14 md:h-15 w-full md:w-auto md:min-w-[620px] bg-[#FFFDF7]/60 backdrop-blur-2xl backdrop-saturate-180 rounded-full ring-1 ring-[#1A1C1E]/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] pl-5 pr-2 md:pl-6 flex items-center justify-between gap-6"
      >
        <Link
          href="/"
          onClick={scrollToTop}
          title={`${site.name} - Back to top`}
          className="font-display font-extrabold text-base md:text-lg tracking-tight text-[#1A1C1E] flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
        >
          <span>{site.name}</span>
          <span className="beacon-dot"></span>
        </Link>

        <nav aria-label="Sections" className="hidden md:flex relative items-center">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 h-full rounded-full bg-white ring-1 ring-[#1A1C1E]/[0.07] shadow-[0_1px_3px_rgba(26,28,30,0.06)] transition-[transform,width,opacity] duration-[380ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
            style={{
              transform: `translateX(${indicator?.x ?? 0}px)`,
              width: indicator?.w ?? 0,
              opacity: indicator ? 1 : 0,
            }}
          />
          {sections.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-3.5 py-1.5 text-[13px] rounded-full transition-colors duration-300 ${
                  isActive ? 'text-[#1A1C1E] font-semibold' : 'text-[#4A4E54] font-medium hover:text-[#1A1C1E]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <Button href={`#${contactId}`} size="sm" className="shrink-0">
          Let’s talk
        </Button>
      </div>
    </header>
  );
}

'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';

export type Service = { title: string; short: string; body: string; tags: string[] };

const INITIAL = 4;

function ServiceRow({ service, delay }: { service: Service; delay: number }) {
  return (
    <Reveal as="li" delay={delay} className="border-b border-[#1A1C1E]/10">
      <Link
        href="#contact"
        aria-label={`${service.title} — discuss a project`}
        className="service-row group grid grid-cols-[1fr_auto] gap-x-5 sm:gap-x-8 items-start px-2 sm:px-5 py-8 sm:py-10 rounded-2xl -mx-2 sm:-mx-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]"
      >
        <div className="min-w-0">
          <h3 className="service-title font-display font-bold text-[#1A1C1E] tracking-[-0.03em] leading-[1.05] text-[clamp(1.5rem,2.6vw,2.4rem)]">
            {service.title}
          </h3>
          <p className="mt-3 max-w-xl text-[#5F6368] text-[15px] sm:text-base leading-[1.65]">{service.body}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[11px] tracking-wide text-[#3C4043] px-2.5 py-1 rounded-full bg-[#1A1C1E]/[0.04] ring-1 ring-[#1A1C1E]/[0.06]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <span className="service-arrow mt-1 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#1A1C1E]/15 text-[#1A1C1E]">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        </span>
      </Link>
    </Reveal>
  );
}

export default function ServicesList({ services }: { services: Service[] }) {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const extraId = useId();

  const primary = services.slice(0, INITIAL);
  const extra = services.slice(INITIAL);

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    // When collapsing, the toggle jumps up the page — keep it in view
    if (!next) {
      requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: 'center' }));
    }
  };

  return (
    <div className="lg:col-span-7">
      <ul className="border-t border-[#1A1C1E]/10">
        {primary.map((service, i) => (
          <ServiceRow key={service.title} service={service} delay={i * 60} />
        ))}
      </ul>

      {/* Extra services mount on expand; Reveal fades each in with a short stagger */}
      <ul id={extraId} aria-label="More services">
        {expanded && extra.map((service, i) => <ServiceRow key={service.title} service={service} delay={i * 50} />)}
      </ul>

      {extra.length > 0 && (
        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={extraId}
          className="services-toggle group mt-8 flex w-full items-center justify-between gap-6 rounded-full pl-6 pr-2 h-14 bg-[#1A1C1E]/[0.035] ring-1 ring-[#1A1C1E]/[0.07] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]"
        >
          <span className="min-w-0 truncate text-[15px] sm:text-base text-[#1A1C1E]">
            <span className="font-display font-semibold tracking-[-0.01em]">
              {expanded ? 'Show fewer services' : `See ${extra.length} more services`}
            </span>
            {!expanded && (
              <span className="hidden lg:inline text-[#80868B]">
                {' '}
                — {extra.slice(0, 3).map((s) => s.short).join(', ')} and more
              </span>
            )}
          </span>
          <span className="services-toggle-icon flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1C1E] text-white shrink-0">
            <Plus className="w-4 h-4" strokeWidth={2} />
          </span>
        </button>
      )}
    </div>
  );
}

'use client';

import { useRef } from 'react';

const PULL = 0.22; // fraction of cursor offset the button follows
const MAX = 6; // px

// Pointer-driven polish for .btn: a gentle magnetic pull, and the hover bloom
// starting from wherever the cursor entered. Writes styles directly (no React state)
// and only runs for fine pointers without reduced-motion.
export default function ButtonFx({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);

  const enabled = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const btn = () => ref.current?.firstElementChild as HTMLElement | null;

  const onPointerEnter = (e: React.PointerEvent) => {
    const el = btn();
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--bloom-x', `${e.clientX - r.left}px`);
    el.style.setProperty('--bloom-y', `${e.clientY - r.top}px`);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const wrap = ref.current;
    if (!wrap || !enabled()) return;
    const r = wrap.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-MAX, Math.min(MAX, v));
    const x = clamp((e.clientX - (r.left + r.width / 2)) * PULL);
    const y = clamp((e.clientY - (r.top + r.height / 2)) * PULL);
    wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onPointerLeave = () => {
    const wrap = ref.current;
    if (wrap) wrap.style.transform = '';
    // Keep the bloom origin until the exit transition finishes, then fall back to the icon well
    const el = btn();
    if (el) {
      window.setTimeout(() => {
        if (!el.matches(':hover')) {
          el.style.removeProperty('--bloom-x');
          el.style.removeProperty('--bloom-y');
        }
      }, 300);
    }
  };

  return (
    <span
      ref={ref}
      className="btn-fx"
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </span>
  );
}

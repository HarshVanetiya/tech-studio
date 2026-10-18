'use client';

import { useEffect, useState } from 'react';

// Returns the id of the section currently crossing the middle band of the viewport,
// or null while none is (e.g. on the hero).
export default function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Prefer the last section in page order when two overlap the band
        setActive([...ids].reverse().find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

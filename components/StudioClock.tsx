'use client';

import { useState, useEffect } from 'react';

export default function StudioClock({ city, timeZone }: { city: string; timeZone: string }) {
  const [timeStr, setTimeStr] = useState<string>('--:--:--');

  useEffect(() => {
    function update() {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTimeStr(formatted);
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const zoneAbbr = timeZone === 'Asia/Tokyo' ? 'JST' : 'CET';

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2D6A4F] bg-[#2D6A4F]/8 px-3 py-1 rounded-full">
      <span className="beacon-dot w-1.5 h-1.5"></span>
      <span>{timeStr} {zoneAbbr}</span>
    </span>
  );
}

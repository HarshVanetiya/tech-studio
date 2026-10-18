// Abstract, hand-drawn UI previews for concept builds. Replaced by real screenshots
// once each showcase project is finished.

function Window({ children, dark = false, className = '' }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <div
      className={`rounded-[14px] overflow-hidden ring-1 ${
        dark ? 'bg-[#1C1E20] ring-white/10' : 'bg-white ring-black/[0.06]'
      } shadow-[0_30px_60px_-30px_rgba(26,28,30,0.35)] ${className}`}
    >
      <div className={`flex items-center gap-1.5 px-3.5 h-7 ${dark ? 'border-b border-white/[0.06]' : 'border-b border-black/[0.05]'}`}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${dark ? 'bg-white/15' : 'bg-black/10'}`} />
        ))}
      </div>
      {children}
    </div>
  );
}

const bar = 'rounded-full';

export function BakeryVisual() {
  return (
    <div className="absolute inset-0 bg-[#F1E4D3] flex items-start justify-center pt-16 px-8 sm:px-14">
      <Window className="w-full max-w-[620px]">
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className={`${bar} h-2.5 w-20 bg-[#7A4E2D]`} />
            <div className="hidden sm:flex gap-3">
              {[0, 1, 2].map((i) => <span key={i} className={`${bar} h-1.5 w-10 bg-black/10`} />)}
            </div>
            <span className={`${bar} h-6 w-16 bg-[#1A1C1E]`} />
          </div>
          <div className="mt-7 grid grid-cols-5 gap-5 items-center">
            <div className="col-span-3 space-y-2.5">
              <span className={`${bar} block h-4 w-[90%] bg-[#2A1E16]`} />
              <span className={`${bar} block h-4 w-[70%] bg-[#2A1E16]`} />
              <span className={`${bar} block h-1.5 w-[80%] bg-black/10 mt-4`} />
              <span className={`${bar} block h-1.5 w-[60%] bg-black/10`} />
              <span className={`${bar} block h-6 w-24 bg-[#A9774B] mt-4`} />
            </div>
            <div className="col-span-2 aspect-[4/5] rounded-xl bg-[radial-gradient(circle_at_35%_30%,#E8C79F,#B9844F_60%,#7A4E2D)]" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {['#E9D3B7', '#DCC1A0', '#EBDCC9'].map((c) => (
              <div key={c} className="rounded-lg p-2.5" style={{ background: c }}>
                <div className="aspect-square rounded-md bg-white/50" />
                <span className={`${bar} block h-1.5 w-2/3 bg-black/15 mt-2`} />
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

export function BookingVisual() {
  const booked = new Set([3, 8, 9, 15, 17, 22, 24]);
  return (
    <div className="absolute inset-0 bg-[#DDE7DF] flex items-start justify-center pt-16 px-8">
      <Window className="w-full max-w-[400px]">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className={`${bar} h-2.5 w-24 bg-[#2D6A4F]`} />
            <span className={`${bar} h-2 w-12 bg-black/10`} />
          </div>
          <div className="mt-5 grid grid-cols-7 gap-1.5">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-md ${
                  i === 16 ? 'bg-[#2D6A4F]' : booked.has(i) ? 'bg-[#2D6A4F]/20' : 'bg-black/[0.04]'
                }`}
              />
            ))}
          </div>
          <div className="mt-5 space-y-2">
            {['09:30', '11:00', '14:15'].map((t, i) => (
              <div key={t} className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${i === 1 ? 'bg-[#2D6A4F] text-white' : 'bg-black/[0.035] text-[#1A1C1E]'}`}>
                <span className="font-mono text-[11px]">{t}</span>
                <span className={`${bar} h-1.5 w-16 ${i === 1 ? 'bg-white/50' : 'bg-black/10'}`} />
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

export function DashboardVisual() {
  const bars = [38, 52, 44, 66, 58, 74, 62, 81, 70, 88, 79, 92];
  return (
    <div className="absolute inset-0 bg-[#E3E5E8] flex items-center justify-center p-8">
      <Window dark className="w-full max-w-[460px]">
        <div className="flex">
          <div className="w-12 border-r border-white/[0.06] py-4 flex flex-col items-center gap-3">
            {[0, 1, 2, 3].map((i) => <span key={i} className={`w-5 h-5 rounded-md ${i === 0 ? 'bg-white/80' : 'bg-white/10'}`} />)}
          </div>
          <div className="flex-1 p-4">
            <div className="grid grid-cols-3 gap-2">
              {['#D9AE7E', '#8FB9A8', '#B7BEC7'].map((c) => (
                <div key={c} className="rounded-lg bg-white/[0.04] p-2.5">
                  <span className={`${bar} block h-1.5 w-8 bg-white/20`} />
                  <span className={`${bar} block h-3 w-12 mt-2`} style={{ background: c }} />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-white/[0.04] p-3 h-32 flex items-end gap-1.5">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-white/25" style={{ height: `${h}%`, opacity: 0.35 + i * 0.05 }} />
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FB9A8]" />
                  <span className={`${bar} h-1.5 flex-1 bg-white/10`} />
                  <span className={`${bar} h-1.5 w-8 bg-white/20`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

export function CampaignVisual() {
  const funnel = [100, 64, 38, 21];
  return (
    <div className="absolute inset-0 bg-[#F4DCD5] flex items-center justify-center gap-5 p-8">
      {/* Phone with ad landing page */}
      <div className="w-[150px] sm:w-[170px] rounded-[26px] bg-[#1A1C1E] p-1.5 shadow-[0_30px_60px_-30px_rgba(26,28,30,0.5)] -rotate-3">
        <div className="rounded-[20px] bg-white overflow-hidden">
          <div className="h-28 bg-[linear-gradient(140deg,#EA6A5B,#F2A68E)]" />
          <div className="p-3 space-y-1.5">
            <span className={`${bar} block h-2.5 w-[85%] bg-[#1A1C1E]`} />
            <span className={`${bar} block h-2.5 w-[60%] bg-[#1A1C1E]`} />
            <span className={`${bar} block h-1.5 w-[75%] bg-black/10 mt-2`} />
            <span className={`${bar} block h-6 w-full bg-[#EA6A5B] mt-3`} />
          </div>
        </div>
      </div>
      {/* Funnel card */}
      <div className="hidden sm:block w-[180px] rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-[0_30px_60px_-30px_rgba(26,28,30,0.3)] rotate-2">
        <span className={`${bar} block h-2 w-16 bg-black/15`} />
        <div className="mt-4 space-y-2">
          {funnel.map((w, i) => (
            <span key={i} className="block h-4 rounded-md bg-[#EA6A5B]" style={{ width: `${w}%`, opacity: 1 - i * 0.2 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioVisual() {
  const tiles = [
    'linear-gradient(160deg,#D8D2C8,#A9A196)',
    'linear-gradient(200deg,#E7E2DA,#C2B8AA)',
    'linear-gradient(170deg,#BDB5A9,#7F776C)',
    'linear-gradient(190deg,#ECE8E1,#CFC7BB)',
  ];
  return (
    <div className="absolute inset-0 bg-[#ECE9E4] flex items-center px-8 sm:px-14 gap-8">
      <div className="hidden md:block shrink-0 w-[30%]">
        <span className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.05em] leading-[0.9] text-[#1A1C1E]">
          Studio
          <br />
          Halden
        </span>
        <span className={`${bar} block h-1.5 w-32 bg-black/15 mt-5`} />
        <span className={`${bar} block h-1.5 w-24 bg-black/10 mt-2`} />
      </div>
      <div className="flex-1 grid grid-cols-4 gap-3 items-end">
        {tiles.map((bg, i) => (
          <div
            key={i}
            className="rounded-xl"
            style={{ background: bg, height: `${[78, 58, 92, 66][i]}%`, minHeight: [160, 120, 190, 140][i] }}
          />
        ))}
      </div>
    </div>
  );
}

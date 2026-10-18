import { Check, Minus } from 'lucide-react';
import Reveal from '@/components/Reveal';

const principles = [
  {
    title: 'Expertise sets direction',
    body: 'Structure, design, security and architecture are decided by experienced specialists — never delegated to a prompt.',
  },
  {
    title: 'AI accelerates delivery',
    body: 'We use modern AI tooling for the repetitive parts, so you get results faster and your budget goes where it matters.',
  },
  {
    title: 'Reviewed, tested, yours',
    body: 'Every line is reviewed and tested before it ships. You own the code, the design files and every account.',
  },
];

const comparison = [
  ['Template look that blends in with everyone else', 'Designed around your brand and your customers'],
  ['Code nobody fully understands or can maintain', 'Clean, documented code built to be extended'],
  ['Looks finished — breaks under real use', 'Tested for performance, security and edge cases'],
  ['Handed over and forgotten', 'Launch support and ongoing care when you need it'],
];

export default function Approach() {
  return (
    <section id="approach" className="grain relative overflow-hidden bg-[#141516] text-white py-24 sm:py-32 lg:py-40">
      {/* Warm oak glow, echoing the studio light in the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: 'radial-gradient(circle, #C8955F 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <Reveal>
          <span className="eyebrow !text-white/50">(02) — Our approach</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-[18ch] font-display font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.6rem,6.4vw,6.5rem)]">
            AI can write code.
            <span className="block text-white/40">Knowing what to build is the craft.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="text-white/75 text-lg sm:text-xl leading-[1.6] max-w-xl">
                More businesses are paying for websites and tools that were generated rather than built — they look like everything else and fail when it matters most.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-white/55 text-base sm:text-lg leading-[1.7] max-w-xl">
                If you’re investing in your online presence or in software to run your business, that investment deserves judgment. We pair senior engineering and design experience with AI-assisted workflows, so you get speed without sacrificing quality.
              </p>
            </Reveal>
          </div>

          {/* Generated vs engineered */}
          <Reveal delay={160} className="lg:col-span-7">
            <div className="bezel bezel-dark">
              <div className="bezel-core">
                <div className="grid grid-cols-2 border-b border-white/[0.07]">
                  <div className="px-3.5 sm:px-7 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">Generated</div>
                  <div className="px-3.5 sm:px-7 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#D9AE7E] border-l border-white/[0.07]">Engineered with us</div>
                </div>
                {comparison.map(([bad, good], i) => (
                  <div key={i} className="grid grid-cols-2 border-b last:border-b-0 border-white/[0.07]">
                    <div className="flex gap-2 sm:gap-3 px-3.5 sm:px-7 py-5 sm:py-6 text-[13px] sm:text-[15px] leading-[1.55] text-white/40">
                      <Minus className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span>{bad}</span>
                    </div>
                    <div className="flex gap-2 sm:gap-3 px-3.5 sm:px-7 py-5 sm:py-6 text-[13px] sm:text-[15px] leading-[1.55] text-white/90 border-l border-white/[0.07]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#D9AE7E]" strokeWidth={1.75} />
                      <span>{good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <ol className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 90}
              className="pt-8 pb-4 md:pr-10 md:[&:not(:first-child)]:pl-10 md:[&:not(:first-child)]:border-l border-white/10"
            >
              <span className="font-mono text-xs text-white/35 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display font-bold text-2xl tracking-[-0.025em]">{p.title}</h3>
              <p className="mt-3 text-white/55 leading-[1.65]">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

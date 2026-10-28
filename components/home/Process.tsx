import Reveal from '@/components/Reveal';

const steps = [
  {
    phase: 'Discover',
    title: 'We learn the business',
    body: 'A focused conversation about your goals, customers and budget. You receive a clear written proposal — scope, timeline and cost.',
  },
  {
    phase: 'Design',
    title: 'We shape it with you',
    body: 'Structure and visuals are reviewed together before a line of production code is written, so there are no surprises later.',
  },
  {
    phase: 'Build',
    title: 'You watch it come alive',
    body: 'Regular progress links let you see real, working software early and often — feedback lands while it’s still easy to act on.',
  },
  {
    phase: 'Launch & grow',
    title: 'We ship and stay close',
    body: 'Deployment, analytics, handover and training. After launch we’re available for improvements, campaigns and support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#FFFDF7] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Reveal>
              <span className="eyebrow">Process</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-extrabold text-[#1A1C1E] tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,5vw,4.75rem)]">
                Clear steps.
                <span className="block text-[#5F6368]">No guesswork.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-[#3C4043] text-base sm:text-lg leading-[1.65]">
              Every project follows the same calm, transparent rhythm — so you always know what’s happening and what comes next.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.phase} delay={i * 100} className="bezel">
              <div className="bezel-core h-full p-7 lg:p-8 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A9774B]">{step.phase}</span>
                  <span className="font-display font-black text-5xl tracking-[-0.05em] text-[#1A1C1E]/[0.07] tabular-nums leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-14 lg:mt-20 font-display font-bold text-[1.4rem] tracking-[-0.025em] text-[#1A1C1E] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] text-[#5F6368] leading-[1.65]">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

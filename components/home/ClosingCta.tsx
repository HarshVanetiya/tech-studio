import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';
import { site } from '@/lib/site';

const nextSteps = [
  'A person reads every enquiry — no bots, no sales scripts.',
  'A short call to understand your goals and constraints.',
  'A clear proposal: scope, timeline and cost.',
];

export default function ClosingCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#F6F3EC] pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <Reveal className="bezel !rounded-[2.5rem]">
          <div className="relative overflow-hidden rounded-[calc(2.5rem-6px)] p-5 sm:p-10 lg:p-14">
            <Image
              src="/assets/hero-desk.png"
              alt=""
              fill
              sizes="(min-width: 1440px) 1380px, 100vw"
              className="object-cover object-[60%_70%] scale-[1.12] origin-top-left"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/30" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-6 xl:col-span-7 pt-2 lg:pt-4">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="eyebrow !text-white/60">(05) — Contact</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] px-3 py-1 text-[12px] font-medium text-white/85">
                    <span className="beacon-dot !bg-[#7FC8A0]" aria-hidden="true" />
                    Taking on new projects
                  </span>
                </div>
                <h2 className="mt-6 font-display font-black uppercase text-white tracking-[-0.045em] leading-[0.86] text-[clamp(2.9rem,7vw,7.5rem)]">
                  Have something
                  <span className="block text-white/55">in mind?</span>
                </h2>
                <p className="mt-8 max-w-md text-white/80 text-base sm:text-lg leading-[1.65]">
                  Tell us about your business and what you want to achieve. You’ll get honest advice on the right approach — even if that means a smaller project than you expected.
                </p>

                <ol className="mt-10 space-y-4 max-w-md">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-white/80 text-[15px] leading-[1.55]">
                      <span className="font-mono text-xs text-[#D9AE7E] pt-1 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-10 text-sm text-white/60">
                  Prefer email?{' '}
                  <a href={`mailto:${site.email}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors">
                    {site.email}
                  </a>
                </p>
              </div>

              <div className="lg:col-span-6 xl:col-span-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

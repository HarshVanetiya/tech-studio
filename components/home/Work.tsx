import Reveal from '@/components/Reveal';
import { BakeryVisual, BookingVisual, DashboardVisual, CampaignVisual, PortfolioVisual } from './WorkVisuals';

const projects = [
  {
    name: 'Hearth & Grain',
    kind: 'Website · Online ordering',
    body: 'A warm, image-led site for an artisan bakery with daily menus and pre-order pickup.',
    Visual: BakeryVisual,
    span: 'lg:col-span-7',
  },
  {
    name: 'Northside Physio',
    kind: 'Booking system',
    body: 'Online appointments, reminders and a simple admin view for a multi-therapist clinic.',
    Visual: BookingVisual,
    span: 'lg:col-span-5',
  },
  {
    name: 'Stockroom',
    kind: 'Management tool',
    body: 'Inventory, orders and supplier tracking in one calm dashboard for independent retailers.',
    Visual: DashboardVisual,
    span: 'lg:col-span-5',
  },
  {
    name: 'Pulse Studio',
    kind: 'Targeted ads · Landing page',
    body: 'A local fitness studio campaign: audience targeting, a focused landing page and conversion tracking.',
    Visual: CampaignVisual,
    span: 'lg:col-span-7',
  },
  {
    name: 'Studio Halden',
    kind: 'Portfolio',
    body: 'A quiet, gallery-style portfolio for an architecture practice, where the work does the talking.',
    Visual: PortfolioVisual,
    span: 'lg:col-span-12',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#F6F3EC] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Reveal>
              <span className="eyebrow">Selected work</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-extrabold text-[#1A1C1E] tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,5vw,4.75rem)]">
                Built to be used,
                <span className="block text-[#5F6368]">not just admired.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-[#3C4043] text-base sm:text-lg leading-[1.65]">
              A look at the kind of work we do — showcase builds across websites, business tools and growth campaigns.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {projects.map(({ name, kind, body, Visual, span }, i) => (
            <Reveal key={name} delay={(i % 2) * 120} className={span}>
              <article className="work-card group block bezel">
                <div className="bezel-core">
                  <div className="relative h-[300px] sm:h-[380px] lg:h-[440px] overflow-hidden">
                    <div className="work-visual absolute inset-0">
                      <Visual />
                    </div>
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md ring-1 ring-black/5 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#3C4043]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A9774B]" />
                      Concept build
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#80868B]">{kind}</span>
                    <h3 className="mt-2 font-display font-bold text-2xl tracking-[-0.03em] text-[#1A1C1E]">{name}</h3>
                    <p className="mt-2 max-w-lg text-[15px] text-[#5F6368] leading-[1.6]">{body}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

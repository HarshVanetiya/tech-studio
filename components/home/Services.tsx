import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/Reveal';

const services = [
  {
    title: 'Websites & Portfolios',
    body: 'Fast, considered websites that make a first impression worth paying for — built to load instantly and be found on search.',
    tags: ['Business sites', 'Portfolios', 'Landing pages', 'CMS'],
  },
  {
    title: 'Growth & Targeted Ads',
    body: 'Campaigns on Google and Meta aimed at the customers who matter, paired with landing pages and tracking that show exactly what your ad spend returns.',
    tags: ['Google Ads', 'Meta Ads', 'Conversion tracking', 'Analytics'],
  },
  {
    title: 'Business & Management Tools',
    body: 'Dashboards, CRMs, booking and inventory systems shaped around how your team actually works — not the other way round.',
    tags: ['Dashboards', 'CRM', 'Booking', 'Inventory'],
  },
  {
    title: 'Custom Software',
    body: 'When off-the-shelf doesn’t fit: web applications, client portals and platforms engineered from the ground up and built to scale.',
    tags: ['Web apps', 'Client portals', 'APIs', 'Integrations'],
  },
  {
    title: 'Automation & AI Integration',
    body: 'Connect the tools you already use, remove repetitive work, and add AI only where it genuinely saves time or money.',
    tags: ['Workflow automation', 'AI assistants', 'Data sync'],
  },
  {
    title: 'E-commerce',
    body: 'Online stores with clean product presentation, smooth checkout and the back-office tools to manage orders without friction.',
    tags: ['Storefronts', 'Payments', 'Catalog', 'Orders'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#FFFDF7] py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left: sticky statement */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">(01) — Services</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-extrabold text-[#1A1C1E] tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,5vw,4.75rem)]">
                What we build
                <span className="block text-[#5F6368]">for your business.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[#3C4043] text-base sm:text-lg leading-[1.65]">
                One partner for the whole digital side of your business — from the website your customers see to the tools your team runs on.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Button href="#contact" className="mt-10">Discuss your project</Button>
            </Reveal>
          </div>
        </div>

        {/* Right: numbered index */}
        <ol className="lg:col-span-7 border-t border-[#1A1C1E]/10">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 60} className="border-b border-[#1A1C1E]/10">
              <Link
                href="#contact"
                aria-label={`${service.title} — discuss a project`}
                className="service-row group grid grid-cols-[auto_1fr_auto] gap-x-5 sm:gap-x-8 items-start px-2 sm:px-5 py-8 sm:py-10 rounded-2xl -mx-2 sm:-mx-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]"
              >
                <span className="font-mono text-xs text-[#80868B] pt-2 sm:pt-3 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h3 className="service-title font-display font-bold text-[#1A1C1E] tracking-[-0.03em] leading-[1.05] text-[clamp(1.5rem,2.6vw,2.4rem)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[#5F6368] text-[15px] sm:text-base leading-[1.65]">
                    {service.body}
                  </p>
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
          ))}
        </ol>
      </div>
    </section>
  );
}

import Button from '@/components/ui/Button';
import Reveal from '@/components/Reveal';
import ServicesList, { type Service } from './ServicesList';

// The first four are shown by default; the rest sit behind "See more"
const services: Service[] = [
  {
    title: 'Websites & Portfolios',
    short: 'Websites',
    body: 'Fast, considered websites that make a first impression worth paying for — built to load instantly and be found on search.',
    tags: ['Business sites', 'Portfolios', 'Landing pages', 'CMS'],
  },
  {
    title: 'Growth & Targeted Ads',
    short: 'Ads',
    body: 'Campaigns on Google and Meta aimed at the customers who matter, paired with landing pages and tracking that show exactly what your ad spend returns.',
    tags: ['Google Ads', 'Meta Ads', 'Conversion tracking', 'Analytics'],
  },
  {
    title: 'Business & Management Tools',
    short: 'Business tools',
    body: 'Dashboards, CRMs, booking and inventory systems shaped around how your team actually works — not the other way round.',
    tags: ['Dashboards', 'CRM', 'Booking', 'Inventory'],
  },
  {
    title: 'Custom Software',
    short: 'Custom software',
    body: 'When off-the-shelf doesn’t fit: web applications, client portals and platforms engineered from the ground up and built to scale.',
    tags: ['Web apps', 'Client portals', 'APIs', 'Integrations'],
  },
  {
    title: 'Mobile Applications',
    short: 'Mobile apps',
    body: 'iOS and Android apps that feel native and stay fast — from customer-facing apps to tools your team carries in their pocket.',
    tags: ['iOS', 'Android', 'Cross-platform', 'App Store launch'],
  },
  {
    title: 'UI/UX Design',
    short: 'UI/UX',
    body: 'Research-led product design: user flows, wireframes and polished interfaces, delivered as a design system your team can build on.',
    tags: ['UX research', 'Wireframes', 'UI design', 'Prototypes', 'Design systems'],
  },
  {
    title: 'Cloud & DevOps',
    short: 'Cloud & DevOps',
    body: 'Infrastructure that scales with you — cloud setup, automated deployments, monitoring and cost control, so releases are routine rather than risky.',
    tags: ['AWS / GCP / Azure', 'CI/CD', 'Monitoring', 'Cost optimisation'],
  },
  {
    title: 'Automation & AI Integration',
    short: 'Automation & AI',
    body: 'Connect the tools you already use, remove repetitive work, and add AI only where it genuinely saves time or money.',
    tags: ['Workflow automation', 'AI assistants', 'Data sync'],
  },
  {
    title: 'E-commerce',
    short: 'E-commerce',
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
              <span className="eyebrow">Services</span>
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

        {/* Right: service index */}
        <ServicesList services={services} />
      </div>
    </section>
  );
}

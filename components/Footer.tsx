import { site, sections, contactId } from '@/lib/site';

const columns = [
  {
    heading: 'Studio',
    links: [
      ...sections.map((s) => ({ name: s.name, href: `/#${s.id}` })),
      { name: 'Contact', href: `/#${contactId}` },
    ],
  },
  {
    heading: 'What we build',
    links: [
      { name: 'Websites & portfolios', href: '/#services' },
      { name: 'Growth & ads', href: '/#services' },
      { name: 'Business tools', href: '/#services' },
      { name: 'Custom software', href: '/#services' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFDF7] border-t border-[#1A1C1E]/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-20 lg:pt-24">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-6">
            <p className="font-display font-bold text-[#1A1C1E] tracking-[-0.03em] leading-[1.1] text-[clamp(1.6rem,2.6vw,2.4rem)] max-w-[22ch]">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#1A1C1E] border-b border-[#1A1C1E]/25 pb-1 hover:border-[#1A1C1E] transition-colors"
            >
              {site.email}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} className="lg:col-span-3" aria-label={col.heading}>
              <span className="eyebrow">{col.heading}</span>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#3C4043] hover:text-[#1A1C1E] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs text-[#80868B]">
          <span>© {site.year} {site.name}. All rights reserved.</span>
          <span>Design &amp; engineering, built with care.</span>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <div aria-hidden="true" className="mt-10 select-none pointer-events-none">
        <span className="block whitespace-nowrap text-center font-display font-black uppercase tracking-[-0.06em] leading-[0.75] text-[#1A1C1E] text-[clamp(4rem,19vw,22rem)] translate-y-[12%]">
          {site.name}
        </span>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Layers, LayoutGrid, LineChart } from 'lucide-react';

// Reusable HeroHeading to ensure 100% pixel-perfect alignment between solid & water layers
function HeroHeading({ variant, ariaHidden = false }: { variant: 'solid' | 'water'; ariaHidden?: boolean }) {
  const isWater = variant === 'water';

  return (
    <div
      className={`h-full flex flex-col justify-center py-5 sm:py-6 lg:py-7 pl-6 sm:pl-10 lg:pl-12 xl:pl-16 ${
        isWater ? 'select-none pointer-events-none' : 'select-text pointer-events-none'
      }`}
      aria-hidden={ariaHidden}
    >
      <h1
        aria-label={isWater ? undefined : 'We build products that move business forward'}
        className="h-[88vh] flex flex-col justify-between font-display font-black tracking-[-0.045em] leading-[0.83] text-left text-[clamp(3.6rem,14.8vh,9.2vw)]"
      >
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#1A1C1E] pointer-events-auto'}`}>
          WE BUILD
        </span>
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#1A1C1E] pointer-events-auto'}`}>
          PRODUCTS
        </span>
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}>
          THAT
        </span>
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}>
          MOVE
        </span>
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}>
          BUSINESS
        </span>
        <span className={`block whitespace-nowrap ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}>
          FORWARD
        </span>
      </h1>
    </div>
  );
}

// Synchronized split point between left canvas (solid typography) and right workspace visual (water-glass typography)
const HERO_SPLIT_PERCENT = 29;

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* ========================================================================
           HERO SECTION (Editorial Magazine Layout: Full-Height Headline,
           Calibrated 64vw Workspace Image (36% Split), and Clean Monitor Overlap)
           ======================================================================== */}
      
      {/* ── DESKTOP VIEWPORT (lg+) ── */}
      <section className="hidden lg:block w-full h-screen relative overflow-hidden bg-white">

        {/* Desktop Right Visual Container:
            Positioned at left: HERO_SPLIT_PERCENT% and right: 0 so its boundary perfectly matches
            the text clip-path across all screen sizes and eliminates any viewport-vs-percentage scrollbar offset. */}
        <div
          className="absolute top-0 right-0 bottom-0 overflow-hidden bg-stone-100 z-10"
          style={{ left: `${HERO_SPLIT_PERCENT}%` }}
        >
          {/* Zoomed Workspace: centers on vertical + horizontal monitors */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: 'scale(1.48)',
              transformOrigin: '88% 32%',
            }}
          >
            <Image
              src="/assets/hero-desk.png"
              alt="Modern web development studio workspace with code on screens"
              fill
              priority
              sizes={`${100 - HERO_SPLIT_PERCENT}vw`}
              className="object-cover object-center"
            />
          </div>

          {/* Contrast-enhancing gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 via-26% to-transparent pointer-events-none" />
        </div>

        {/* Layer 1: Solid Ink Headline (Clipped strictly to left canvas: 0 -> HERO_SPLIT_PERCENT%, stacked at z-[1] behind the image container) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          style={{ clipPath: `inset(0 calc(100% - ${HERO_SPLIT_PERCENT}%) 0 0)` }}
        >
          <HeroHeading variant="solid" />
        </div>

        {/* Layer 2: Water Glass Headline (Clipped strictly to image: HERO_SPLIT_PERCENT% -> 100%, stacked at z-20 above the image container) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          style={{ clipPath: `inset(0 0 0 ${HERO_SPLIT_PERCENT}%)` }}
          aria-hidden="true"
        >
          <HeroHeading variant="water" ariaHidden={true} />
        </div>

        {/* Subtext Frosted Glass Card & CTA Buttons (Bottom-Right) */}
        <div className="absolute bottom-8 right-6 sm:right-10 lg:bottom-10 lg:right-12 xl:bottom-12 xl:right-14 2xl:bottom-14 2xl:right-16 z-30 max-w-[430px] sm:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px] 2xl:max-w-[540px]">
          <div className="hero-glass-card rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 lg:p-6 xl:p-7">
            <p className="text-[#1A1C1E] text-[14.5px] sm:text-[15.5px] lg:text-[16px] xl:text-[17px] 2xl:text-[18.5px] leading-[1.6] 2xl:leading-[1.62] font-normal tracking-[-0.01em]">
              From high-performance websites to custom software, we combine thoughtful design and reliable engineering to help businesses launch, grow, and stand out.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 2xl:gap-4 mt-3.5 sm:mt-4 2xl:mt-5">
            <Link
              href="/contact"
              className="hero-btn-dark gap-2 text-[14px] sm:text-[14.5px] xl:text-[15.5px] 2xl:text-[16.5px] px-6 sm:px-7 2xl:px-8 h-[46px] sm:h-[48px] xl:h-[50px] 2xl:h-[54px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A1C1E]"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 2xl:w-[18px] 2xl:h-[18px] hero-btn-icon hero-btn-icon-diagonal" />
            </Link>
            <Link
              href="/services"
              className="hero-btn-white gap-2 text-[14px] sm:text-[14.5px] xl:text-[15.5px] 2xl:text-[16.5px] px-5 sm:px-6 2xl:px-7 h-[46px] sm:h-[48px] xl:h-[50px] 2xl:h-[54px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A1C1E]"
            >
              <span>Explore our services</span>
              <ArrowRight className="w-4 h-4 2xl:w-[18px] 2xl:h-[18px] hero-btn-icon hero-btn-icon-right" />
            </Link>
          </div>
        </div>

      </section>

      {/* ── MOBILE & TABLET VIEWPORT (< lg) ── */}
      <section className="lg:hidden relative min-h-[100svh] flex flex-col justify-between p-6 sm:p-10 pt-20 sm:pt-24 pb-12 bg-white overflow-hidden">
        {/* Soft atmospheric background visual */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-100 z-0 pointer-events-none opacity-30">
          <Image
            src="/assets/hero-desk.png"
            alt="Modern web development studio workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        </div>

        {/* Mobile Headline (Clean, accessible, full-height magazine style) */}
        <div className="relative z-10 my-auto py-4">
          <h1
            aria-label="We build products that move business forward"
            className="flex flex-col font-display font-black tracking-[-0.045em] leading-[0.87] text-left text-[clamp(3rem,12.5vw,5.5rem)] select-text"
          >
            <span className="block text-[#1A1C1E]">WE BUILD</span>
            <span className="block text-[#1A1C1E]">PRODUCTS</span>
            <span className="block text-[#5F6368]">THAT</span>
            <span className="block text-[#5F6368]">MOVE</span>
            <span className="block text-[#5F6368]">BUSINESS</span>
            <span className="block text-[#5F6368]">FORWARD</span>
          </h1>
        </div>

        {/* Mobile Subtext Card & Responsive CTAs */}
        <div className="relative z-10 w-full max-w-[500px] mt-6">
          <div className="hero-glass-card rounded-[22px] p-5 sm:p-6 mb-4">
            <p className="text-[#1A1C1E] text-sm sm:text-base leading-relaxed font-normal">
              From high-performance websites to custom software, we combine thoughtful design and reliable engineering to help businesses launch, grow, and stand out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/contact"
              className="hero-btn-dark gap-2 text-sm px-6 h-[46px] text-center"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 hero-btn-icon hero-btn-icon-diagonal" />
            </Link>
            <Link
              href="/services"
              className="hero-btn-white gap-2 text-sm px-5 h-[46px] text-center"
            >
              <span>Explore our services</span>
              <ArrowRight className="w-4 h-4 hero-btn-icon hero-btn-icon-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================
           CORE FOUNDATIONS SUMMARY
           ======================================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 border-t border-[#E8EAED]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#E8EAED] shadow-xs transition-all hover:border-[#D2D6DC] hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-[#2D6A4F] font-semibold uppercase">01 / Architecture</span>
                <Layers className="w-5 h-5 text-[#2D6A4F]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1C1E] mb-2">Digital Foundation</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                High-throughput microservices, robust relational backends, and edge routing built for resilience and zero downtime.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1C1E] mt-4 hover:underline">
              <span>Explore Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#E8EAED] shadow-xs transition-all hover:border-[#D2D6DC] hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-[#E08E45] font-semibold uppercase">02 / Interface</span>
                <LayoutGrid className="w-5 h-5 text-[#E08E45]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1C1E] mb-2">Editorial Precision</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Responsive design systems engineered to balance strict typography hierarchy with fluid user interactions and sub-second speed.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1C1E] mt-4 hover:underline">
              <span>Explore Design Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#E8EAED] shadow-xs transition-all hover:border-[#D2D6DC] hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-[#EA6A5B] font-semibold uppercase">03 / Systems</span>
                <LineChart className="w-5 h-5 text-[#EA6A5B]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1C1E] mb-2">Telemetry &amp; Flow</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Integrated telemetry setups and live performance dashboards providing real-time visibility into mission-critical flows.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1C1E] mt-4 hover:underline">
              <span>Explore Observability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================
           SELECTED WORK TEASER
           ======================================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 border-t border-[#E8EAED]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-[#4285F4] font-semibold uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span>Case Studies in Production</span>
            </div>
            <h2 className="font-display font-bold text-3xl text-[#1A1C1E] tracking-tight">
              Selected systems and platforms.
            </h2>
          </div>
          <Link href="/work" className="btn-secondary text-sm">
            <span>View All Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="/work" className="group rounded-2xl overflow-hidden bg-white border border-[#E8EAED] shadow-xs hover:shadow-lg transition-all">
            <div className="relative h-64 w-full bg-stone-100 overflow-hidden">
              <Image
                src="/assets/dashboard-preview.png"
                alt="Aetheria Cloud Mesh"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#E8EAED] px-3 py-1 rounded-full font-mono text-xs text-[#1A1C1E] font-medium">
                Fintech · Distributed Core
              </span>
            </div>
            <div className="p-6">
              <span className="font-mono text-xs text-[#5F6368] uppercase font-semibold">01 / Distributed Systems</span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mt-1 mb-2">Aetheria Cloud Mesh</h3>
              <p className="text-sm text-[#5F6368] line-clamp-2 mb-4">
                Global edge routing and deterministic transaction queueing for institutional finance. 4.2M events/sec with p99 &lt; 1.8ms.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-[#1A1C1E] font-semibold">
                <span>View Architecture Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/work" className="group rounded-2xl overflow-hidden bg-white border border-[#E8EAED] shadow-xs hover:shadow-lg transition-all">
            <div className="relative h-64 w-full bg-stone-100 overflow-hidden">
              <Image
                src="/assets/services-screen.jpg"
                alt="Kanso Design System"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#E8EAED] px-3 py-1 rounded-full font-mono text-xs text-[#1A1C1E] font-medium">
                Enterprise UI · Design System
              </span>
            </div>
            <div className="p-6">
              <span className="font-mono text-xs text-[#5F6368] uppercase font-semibold">02 / Interface Architecture</span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mt-1 mb-2">Kanso Design System</h3>
              <p className="text-sm text-[#5F6368] line-clamp-2 mb-4">
                Unified multi-brand design tokens &amp; accessible web component architecture for SaaS enterprise. 420+ components, 100/100 Lighthouse.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-[#1A1C1E] font-semibold">
                <span>View Architecture Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ========================================================================
           TECHNICAL CONSULTATION CTA BANNER
           ======================================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#1A1C1E] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#34A853] font-semibold block mb-4">
              • Direct Partner Desk
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
              Have a complex system in mind?<br />Let&apos;s discuss your architecture.
            </h2>
            <p className="text-[#A0A4A8] text-base sm:text-lg mb-8 leading-relaxed">
              We operate without sales intermediaries. You&apos;ll speak directly with a Principal Engineer about system scope, technical risk, and delivery timelines.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-[#1A1C1E] font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-md">
                <span>Book Technical Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-[#A0A4A8]">
                Response SLA &lt; 24h · desk@itstudio.dev
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

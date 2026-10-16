import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Layers, LayoutGrid, LineChart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* ========================================================================
           HERO SECTION (Full Viewport Split: 42% Left / 58% Right Full-Bleed)
           Touches top, right, and bottom of 1st viewport
           ======================================================================== */}
      <section className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch justify-between relative overflow-hidden bg-[#FFFDF7]">
        
        {/* Left Column (~38% / 36-38vw) */}
        <div className="w-full lg:w-[38%] xl:w-[36%] flex flex-col justify-center px-6 sm:px-12 lg:pl-12 xl:pl-20 lg:pr-10 pt-16 pb-12 lg:py-0 order-2 lg:order-1 z-10">
          <div className="max-w-xl">
            {/* Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem] text-[#1A1C1E] tracking-tight leading-[1.03] mb-6">
              We build products<br />
              <span className="text-[#5F6368]">that move business forward.</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg lg:text-xl text-[#3C4043] leading-relaxed mb-10 max-w-lg font-normal">
              From high-performance websites to custom software, we combine thoughtful design and reliable engineering to help businesses launch, grow, and stand out.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-[15px] px-7 py-4 shadow-sm"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-[15px] px-7 py-4"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Visual Column (~62-64% touching top, right, bottom of 1st viewport) */}
        <div className="w-full lg:w-[62%] xl:w-[64%] h-[55vh] sm:h-[65vh] lg:h-full relative overflow-hidden bg-stone-100 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-[#E8EAED] group">
          <Image
            src="/assets/hero-desk.png"
            alt="Modern web development studio workspace with code on screens"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
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

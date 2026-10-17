'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, X, Check, ShieldCheck, Cpu, Database, Gauge, Radio } from 'lucide-react';

interface CaseStudy {
  id: string;
  categoryKey: string;
  categoryLabel: string;
  title: string;
  tagline: string;
  image: string;
  badge: string;
  metrics: { val: string; label: string }[];
  tech: string[];
  overview: string;
  deliverables: string[];
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const filterOptions = [
    { key: 'all', label: 'All (04)' },
    { key: 'distributed', label: 'Distributed Systems' },
    { key: 'interface', label: 'Design Systems' },
    { key: 'telemetry', label: 'Observability' },
    { key: 'cloud', label: 'Cloud & IoT' },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'aetheria',
      categoryKey: 'distributed',
      categoryLabel: '01 / DISTRIBUTED SYSTEMS & FINTECH',
      title: 'Aetheria Cloud Mesh',
      tagline: 'Global edge routing and deterministic transaction queueing for institutional finance.',
      image: '/assets/dashboard-preview.png',
      badge: 'Fintech · Distributed Core',
      metrics: [
        { val: '4.2M/s', label: 'Throughput' },
        { val: '< 1.8ms', label: 'p99 Latency' },
        { val: '99.999%', label: 'Uptime SLA' },
      ],
      tech: ['Rust', 'Go', 'Apache Kafka', 'eBPF', 'Envoy Proxy', 'Kubernetes'],
      overview: 'Designed and deployed a sub-millisecond edge routing mesh spanning 14 global financial centers. Replaced legacy monolithic message brokers with a zero-copy Rust and eBPF pipeline with deterministic FIFO ordering.',
      deliverables: [
        'Custom eBPF ingress filter bypassing Linux network stack overhead',
        'Event sourcing engine written in Rust with gRPC bi-directional streaming',
        'Distributed clock synchronization using Precision Time Protocol (PTP)',
        'Automated chaos engineering suite with network partition simulation',
      ],
    },
    {
      id: 'kanso',
      categoryKey: 'interface',
      categoryLabel: '02 / INTERFACE & FRONTEND ARCHITECTURE',
      title: 'Kanso Design System',
      tagline: 'Unified multi-brand design tokens and accessible web component engine for SaaS enterprise.',
      image: '/assets/services-screen.jpg',
      badge: 'Enterprise UI · Design System',
      metrics: [
        { val: '420+', label: 'Components' },
        { val: '100/100', label: 'Lighthouse' },
        { val: '+65%', label: 'Ship Speed' },
      ],
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook'],
      overview: 'Engineered an enterprise-wide design system reconciling 3 separate business units into a coherent visual language. Features automated Figma-to-code token synchronization, zero-runtime CSS, and full WCAG 2.2 AAA keyboard navigability.',
      deliverables: [
        'Multi-tier token architecture (Global, Semantic, Component levels)',
        'Custom React 19 component library with fluid typography clamp',
        'Continuous token pipeline publishing packages to internal registry',
        'Automated visual regression testing with Playwright & Chromatic',
      ],
    },
    {
      id: 'chronos',
      categoryKey: 'telemetry',
      categoryLabel: '03 / TELEMETRY & OBSERVABILITY',
      title: 'Chronos Data Engine',
      tagline: 'Petabyte-scale real-time telemetry lakehouse and stream processing platform.',
      image: '/assets/work-screen.jpg',
      badge: 'Telemetry · Stream Lakehouse',
      metrics: [
        { val: '12 TB/d', label: 'Ingestion' },
        { val: '< 320ms', label: 'p95 Query' },
        { val: '-40%', label: 'Cloud Spend' },
      ],
      tech: ['ClickHouse', 'Vector', 'Prometheus', 'Grafana', 'OpenTelemetry', 'GCP'],
      overview: 'Architected a unified observability backend capturing metrics, distributed traces, and log streams across 2,400 microservices. Migrated from expensive third-party SaaS to a sovereign ClickHouse and Vector cluster.',
      deliverables: [
        'High-throughput Vector routing topology on Kubernetes',
        'Sharded ClickHouse cluster with custom columnar indexing codecs',
        'OpenTelemetry auto-instrumentation agents across 6 languages',
        'Grafana alerting dashboards with predictive anomaly detection',
      ],
    },
    {
      id: 'vanguard',
      categoryKey: 'cloud',
      categoryLabel: '04 / CLOUD PLATFORM & IOT',
      title: 'Vanguard Logistics Core',
      tagline: 'Autonomous real-time fleet dispatch, telemetry, and route optimization platform.',
      image: '/assets/about-screen.jpg',
      badge: 'IoT Core · Route Engine',
      metrics: [
        { val: '85,000', label: 'Nodes' },
        { val: '99.98%', label: 'Accuracy' },
        { val: '22%', label: 'Fuel Saved' },
      ],
      tech: ['Go', 'PostgreSQL', 'PostGIS', 'Redis GEO', 'AWS IoT Core', 'Docker'],
      overview: 'Built the core event platform for a pan-European freight logistics network. Synchronizes real-time GPS telemetry, weather constraints, and charging station schedules into a live linear programming routing engine.',
      deliverables: [
        'MQTT IoT ingestion pipeline handling 100,000 concurrent socket connections',
        'Spatial route graph evaluation with Redis GEO and PostGIS',
        'Multi-region AWS infrastructure with automatic failover in < 4 seconds',
        'Hardware-in-the-loop simulation environment for integration testing',
      ],
    },
  ];

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.categoryKey === activeFilter);

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      
      {/* ========================================================================
           HEADER & FILTER BAR
           ======================================================================== */}
      <section className="py-8 border-b border-[#E8EAED]">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#4285F4] font-semibold">
            02 / Selected Work
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1E] tracking-tight leading-[1.1] mb-6">
          Selected systems and platforms.<br />
          <span className="text-[#5F6368]">Proof in production.</span>
        </h1>

        <p className="text-lg text-[#3C4043] leading-relaxed max-w-3xl mb-10">
          We partner with ambitious engineering teams to build resilient distributed backends, design-led frontends, and mission-critical cloud platforms.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`font-mono text-xs px-4 py-2 rounded-full transition-all duration-150 border ${
                activeFilter === opt.key
                  ? 'bg-[#1A1C1E] text-white border-[#1A1C1E] shadow-xs'
                  : 'bg-white text-[#5F6368] border-[#E8EAED] hover:border-[#D2D6DC] hover:text-[#1A1C1E]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================
           CASE STUDIES SHOWCASE GRID
           ======================================================================== */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveModalCase(item)}
              className="bg-white border border-[#E8EAED] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image Preview */}
              <div className="relative h-64 w-full bg-stone-100 overflow-hidden border-b border-[#E8EAED]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-600"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#E8EAED] px-3 py-1 rounded-full font-mono text-xs text-[#1A1C1E] font-medium shadow-xs">
                  {item.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <span className="font-mono text-xs text-[#5F6368] font-semibold uppercase tracking-wider block mb-1">
                  {item.categoryLabel}
                </span>

                <h2 className="font-display font-bold text-2xl text-[#1A1C1E] mb-2 tracking-tight">
                  {item.title}
                </h2>

                <p className="text-[#3C4043] text-sm leading-relaxed mb-6">
                  {item.tagline}
                </p>

                {/* Telemetry Metric Box */}
                <div className="grid grid-cols-3 gap-3 bg-[#FAF9F5] border border-[#E8EAED] rounded-xl p-4 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-display font-bold text-lg text-[#1A1C1E]">
                        {m.val}
                      </span>
                      <span className="font-mono text-[10px] text-[#5F6368] uppercase">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-[#E8EAED] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-pill text-[11px]">
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 3 && (
                      <span className="font-mono text-[11px] text-[#5F6368] self-center">
                        +{item.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[#1A1C1E] inline-flex items-center gap-1 group-hover:underline">
                    <span>View RFC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================
           TRUST METRICS STRIP
           ======================================================================== */}
      <section className="py-12 border-t border-[#E8EAED]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E8EAED] rounded-2xl p-6 shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#1A1C1E] mb-1">100%</div>
            <div className="font-mono text-xs text-[#5F6368]">Client IP Ownership</div>
          </div>
          <div className="bg-white border border-[#E8EAED] rounded-2xl p-6 shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#1A1C1E] mb-1">Zero</div>
            <div className="font-mono text-xs text-[#5F6368]">Black-Box Dependencies</div>
          </div>
          <div className="bg-white border border-[#E8EAED] rounded-2xl p-6 shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#1A1C1E] mb-1">C4 RFC</div>
            <div className="font-mono text-xs text-[#5F6368]">Living Architecture Specs</div>
          </div>
          <div className="bg-white border border-[#E8EAED] rounded-2xl p-6 shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#1A1C1E] mb-1">&gt; 85%</div>
            <div className="font-mono text-xs text-[#5F6368]">Branch Test Coverage</div>
          </div>
        </div>

        {/* Client Quote */}
        <div className="bg-white border border-[#E8EAED] rounded-3xl p-8 sm:p-12 mt-8 shadow-xs flex flex-col gap-6">
          <p className="font-display font-semibold text-lg sm:text-2xl text-[#1A1C1E] leading-snug">
            “IT Studio operated as an elite extension of our core team. No account manager telephone games, no bloated timelines — just principal engineers delivering deterministic, sub-millisecond systems directly into our production mesh.”
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EFEDF1] border border-[#E8EAED] flex items-center justify-center font-display font-bold text-base text-[#1A1C1E]">
              MV
            </div>
            <div>
              <div className="font-bold text-sm text-[#1A1C1E]">Marcus Vance</div>
              <div className="font-mono text-xs text-[#5F6368]">
                VP of Infrastructure &amp; Engineering, Vantage Financial Technologies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
           DETAIL MODAL
           ======================================================================== */}
      {activeModalCase && (
        <div
          className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="bg-[#FFFDF7] border border-[#E8EAED] rounded-3xl max-w-3xl w-full p-8 sm:p-10 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalCase(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#E8EAED] flex items-center justify-center text-[#1A1C1E] hover:bg-stone-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-[#2D6A4F] font-semibold uppercase tracking-wider block mb-2">
              {activeModalCase.categoryLabel}
            </span>
            <h2 className="font-display font-extrabold text-3xl text-[#1A1C1E] mb-2">
              {activeModalCase.title}
            </h2>
            <p className="text-base text-[#3C4043] leading-relaxed mb-6">
              {activeModalCase.tagline}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 bg-white border border-[#E8EAED] rounded-2xl p-5 mb-6 shadow-xs">
              {activeModalCase.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="font-display font-extrabold text-xl text-[#1A1C1E]">{m.val}</div>
                  <div className="font-mono text-xs text-[#5F6368] uppercase">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">
                Architecture Overview
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                {activeModalCase.overview}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-3">
                Key Deliverables
              </h3>
              <ul className="space-y-2">
                {activeModalCase.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3C4043]">
                    <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">
                Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {activeModalCase.tech.map((t) => (
                  <span key={t} className="tech-pill text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8EAED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#5F6368]">
                C4 Architecture RFC available upon request
              </span>
              <Link
                href="/contact"
                className="btn-primary text-xs"
                onClick={() => setActiveModalCase(null)}
              >
                <span>Discuss Similar Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

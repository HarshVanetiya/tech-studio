import Link from 'next/link';
import { ArrowUpRight, Check, Network, LayoutGrid, Cloud, Activity, FileCode, Workflow, ShieldCheck, Terminal } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities — IT Studio',
  description: 'Digital architecture, distributed systems, editorial design systems, cloud infrastructure, and telemetry for ambitious tech platforms.',
};

export default function ServicesPage() {
  const servicePillars = [
    {
      id: '01',
      tag: '01 / ARCHITECTURE',
      themeColor: '#2D6A4F',
      themeBg: 'rgba(45, 106, 79, 0.08)',
      title: 'Digital Architecture & Distributed Systems',
      description: 'High-throughput microservices, edge routing, event streams, CQRS, and resilient data persistence layers built for scale.',
      tech: ['Go', 'Rust', 'gRPC', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Envoy'],
      deliverables: [
        'Distributed system RFCs and topology diagrams',
        'High-throughput event streaming architectures',
        'Zero-downtime database migration playbooks',
        'Throughput benchmarks and latency SLA guarantees',
      ],
      icon: Network,
    },
    {
      id: '02',
      tag: '02 / INTERFACE',
      themeColor: '#E08E45',
      themeBg: 'rgba(224, 142, 69, 0.1)',
      title: 'Editorial Design Systems & Frontend Engineering',
      description: 'Fluid typography, tokenized design systems, WCAG 2.2 AAA accessibility, and sub-second web performance.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Radix UI'],
      deliverables: [
        'Tokenized multi-tier design systems (Global, Semantic, Component)',
        'Accessible component suites tested across screen readers',
        'Lighthouse 100/100 performance optimization',
        'Micro-interaction suites with 60fps choreography',
      ],
      icon: LayoutGrid,
    },
    {
      id: '03',
      tag: '03 / PLATFORM',
      themeColor: '#0058BD',
      themeBg: 'rgba(66, 133, 244, 0.1)',
      title: 'Platform & Cloud Engineering',
      description: 'Multi-region Kubernetes infrastructure, declarative GitOps, zero-downtime CI/CD pipelines, and cost-efficient cloud topology.',
      tech: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Cloudflare', 'Docker', 'GitHub Actions'],
      deliverables: [
        'Multi-region cluster setups with automatic failover',
        'Declarative IaC repositories with GitOps workflows',
        'Continuous deployment runbooks with canary rollout',
        'Infrastructure cost optimization & security audits',
      ],
      icon: Cloud,
    },
    {
      id: '04',
      tag: '04 / SYSTEMS',
      themeColor: '#EA6A5B',
      themeBg: 'rgba(234, 106, 91, 0.1)',
      title: 'Telemetry & Observability',
      description: 'Distributed tracing, p99 latency profiling, custom Grafana metric displays, and predictive anomaly alerting.',
      tech: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Datadog', 'Vector', 'ClickHouse'],
      deliverables: [
        'End-to-end distributed tracing across microservices',
        'p99 latency optimization audits and bottleneck remediation',
        'Real-time SLI/SLA status displays and incident playbooks',
        'Sovereign telemetry lakehouse implementation',
      ],
      icon: Activity,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      
      {/* ========================================================================
           SERVICES HERO HEADER
           ======================================================================== */}
      <section className="py-8 border-b border-[#E8EAED]">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full shadow-xs mb-6">
          <span className="beacon-dot"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#2D6A4F] font-semibold">
            Capabilities &amp; Architecture
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1E] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Engineering with editorial discipline.<br />
          <span className="text-[#5F6368]">Capabilities built for complex digital products.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#3C4043] leading-relaxed max-w-3xl mb-8 font-normal">
          We partner with ambitious teams to architect, build, and scale resilient systems — from core distributed backends to fluid, design-led frontend interfaces.
        </p>

        {/* Metrics Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#5F6368]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]"></span>
            99.99% Uptime Architectures
          </span>
          <span className="text-[#D3D6DC]">·</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E08E45]"></span>
            Zero-Overhead Senior Teams
          </span>
          <span className="text-[#D3D6DC]">·</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
            Production Ready Source Code
          </span>
        </div>
      </section>

      {/* ========================================================================
           4 KEY ARCHITECTURAL SERVICE PILLARS
           ======================================================================== */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white border border-[#E8EAED] rounded-2xl p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xs font-semibold tracking-wider uppercase"
                      style={{ color: pillar.themeColor }}
                    >
                      {pillar.tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: pillar.themeBg, color: pillar.themeColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-[#1A1C1E] mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-[#5F6368] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-mono text-xs font-semibold uppercase text-[#1A1C1E] mb-3">
                      Deliverables Checklist
                    </h3>
                    <ul className="space-y-2.5">
                      {pillar.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3C4043]">
                          <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8EAED]">
                  <span className="font-mono text-[11px] text-[#5F6368] block mb-2 uppercase">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================
           DELIVERABLES & TECHNICAL RIGOR
           ======================================================================== */}
      <section className="py-16 border-t border-[#E8EAED]">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2D6A4F] font-semibold block mb-2">
            • Technical Rigor Standard
          </span>
          <h2 className="font-display font-bold text-3xl text-[#1A1C1E]">
            What we ship on every engagement.
          </h2>
          <p className="text-[#5F6368] text-base mt-2 max-w-2xl">
            Clean sovereign code with reproducible environments, living C4 architecture specs, and automated test pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E8EAED] p-6 rounded-2xl shadow-xs">
            <FileCode className="w-6 h-6 text-[#2D6A4F] mb-4" />
            <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">Clean Source Code</h3>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              100% unencumbered client ownership. Strictly typed, idiomatic codebases with zero black-box proprietary libraries.
            </p>
          </div>

          <div className="bg-white border border-[#E8EAED] p-6 rounded-2xl shadow-xs">
            <Workflow className="w-6 h-6 text-[#E08E45] mb-4" />
            <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">Living Architecture RFCs</h3>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              C4 architecture diagrams, sequence flows, and system constraint docs maintained directly inside your code repo.
            </p>
          </div>

          <div className="bg-white border border-[#E8EAED] p-6 rounded-2xl shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#0058BD] mb-4" />
            <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">Automated Test Suites</h3>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              &gt; 85% branch coverage with unit, integration, and end-to-end chaos benchmarks simulating network partitions.
            </p>
          </div>

          <div className="bg-white border border-[#E8EAED] p-6 rounded-2xl shadow-xs">
            <Terminal className="w-6 h-6 text-[#EA6A5B] mb-4" />
            <h3 className="font-display font-bold text-base text-[#1A1C1E] mb-2">Direct Team Transfer</h3>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              Comprehensive developer handoff sessions, runbooks, and pair programming to ensure your in-house engineers own the platform.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================
           ENGAGEMENT MODELS
           ======================================================================== */}
      <section className="py-16 border-t border-[#E8EAED]">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#E08E45] font-semibold block mb-2">
            • Flexible Collaboration
          </span>
          <h2 className="font-display font-bold text-3xl text-[#1A1C1E]">
            Studio Engagement Models
          </h2>
          <p className="text-[#5F6368] text-base mt-2 max-w-2xl">
            Transparent, sprint-based or embedded senior pods tailored to your engineering velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-[#E8EAED] rounded-2xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-[#2D6A4F] uppercase block mb-3">
                01 / Sprint
              </span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mb-3">
                Architectural Sprint
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed mb-6">
                4 to 6-week intensive engagement to define system RFCs, unblock critical bottlenecks, or bootstrap core foundation architecture.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E8EAED]">
              <span className="font-mono text-xs text-[#1A1C1E] font-semibold block mb-4">
                TIMELINE: 4–6 WEEKS
              </span>
              <Link href="/contact" className="btn-secondary w-full text-center text-xs justify-center">
                <span>Inquire About Sprint</span>
              </Link>
            </div>
          </div>

          <div className="bg-white border-2 border-[#1A1C1E] rounded-2xl p-8 shadow-md relative flex flex-col justify-between">
            <span className="absolute top-4 right-4 bg-[#1A1C1E] text-white font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <span className="font-mono text-xs font-semibold text-[#E08E45] uppercase block mb-3">
                02 / Embedded Pod
              </span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mb-3">
                Dedicated Senior Pod
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed mb-6">
                Embedded team of 2–4 senior architects and frontend practitioners owning major platform milestones from conception to production.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E8EAED]">
              <span className="font-mono text-xs text-[#1A1C1E] font-semibold block mb-4">
                TIMELINE: 3–12 MONTHS
              </span>
              <Link href="/contact" className="btn-primary w-full text-center text-xs justify-center">
                <span>Inquire About Senior Pod</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-[#E8EAED] rounded-2xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-[#EA6A5B] uppercase block mb-3">
                03 / Advisory
              </span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mb-3">
                High-Impact Audit
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed mb-6">
                Rigorous 2-week architectural assessment, p99 latency profiling, design system audit, and actionable remediation roadmap.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E8EAED]">
              <span className="font-mono text-xs text-[#1A1C1E] font-semibold block mb-4">
                TIMELINE: 2 WEEKS
              </span>
              <Link href="/contact" className="btn-secondary w-full text-center text-xs justify-center">
                <span>Inquire About Audit</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-12">
        <div className="rounded-3xl bg-[#1A1C1E] text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Need custom architecture advice?
            </h3>
            <p className="text-[#A0A4A8] text-sm max-w-xl">
              Talk directly with a Principal Engineer. We provide preliminary system RFC feedback within 48 business hours.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-[#1A1C1E] hover:bg-stone-100 shrink-0">
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

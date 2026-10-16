import Link from 'next/link';
import { ArrowUpRight, Key, Terminal, MapPin } from 'lucide-react';
import StudioClock from '@/components/StudioClock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Studio & Leadership — IT Studio',
  description: 'Senior software practitioners and systems architects from Tokyo and Zurich. Zero account executives, direct engineering craft.',
};

export default function AboutPage() {
  const principles = [
    {
      idx: 'P-01',
      title: 'No Account Managers',
      description: 'Direct Principal Engineer access from day one. Zero sales intermediaries translating technical requirements into compromises.',
      color: '#2D6A4F',
    },
    {
      idx: 'P-02',
      title: 'Proof in Benchmarks',
      description: 'Every architectural decision is backed by latency, throughput, and profiling statistics. We don’t guess; we measure.',
      color: '#E08E45',
    },
    {
      idx: 'P-03',
      title: 'Clean IP Transfer',
      description: '100% client ownership. Zero proprietary lock-in. Reproducible Nix/Docker builds, fully tested code, and living C4 RFCs.',
      color: '#EA6A5B',
    },
  ];

  const fellows = [
    {
      name: 'Kenji Takahashi',
      role: 'Founding Architect · Distributed Systems',
      location: 'Tokyo Studio',
      bio: 'Former core contributor to high-throughput message brokers and low-latency financial gateways. Specializes in Rust, eBPF, and deterministic queues.',
      pgp: '4B8F 120D 9C7E 33A1',
    },
    {
      name: 'Sophia Meier',
      role: 'Principal Partner · Frontend & Typography',
      location: 'Zürich Studio',
      bio: 'Research background in Swiss typography systems and algorithmic UI choreography. Architect of multi-brand token engines across Fortune 500 SaaS.',
      pgp: '8E21 77FA 4D09 66B2',
    },
    {
      name: 'Aris Thorne',
      role: 'Platform Fellow · Cloud & Observability',
      location: 'Zürich Studio',
      bio: 'Active contributor to cloud-native observability standards. Specializes in multi-region Kubernetes clusters, Vector ingestion, and ClickHouse lakehouses.',
      pgp: '1F9A 44C3 89DE 02B7',
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      
      {/* ========================================================================
           ABOUT HERO HEADER
           ======================================================================== */}
      <section className="py-8 border-b border-[#E8EAED]">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#EA6A5B]"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#EA6A5B] font-semibold">
            03 / Studio Ethos &amp; Profile
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1E] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Senior practitioners. Direct craft.<br />
          <span className="text-[#5F6368]">Zero agency fluff.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#3C4043] leading-relaxed max-w-3xl mb-8 font-normal">
          Founded by systems architects and product designers from Tokyo and Zurich, IT Studio builds production-grade software with the rigor of engineering and the clarity of print typography.
        </p>

        {/* Benchmarks Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#5F6368]">
          <span>• FOUNDED 2021</span>
          <span className="text-[#D3D6DC]">·</span>
          <span>100% SENIOR PRACTITIONERS</span>
          <span className="text-[#D3D6DC]">·</span>
          <span>ZERO SALES OVERHEAD</span>
          <span className="text-[#D3D6DC]">·</span>
          <span>SUB-MILLISECOND P99 TARGETS</span>
        </div>
      </section>

      {/* ========================================================================
           STUDIO PRINCIPLES
           ======================================================================== */}
      <section className="py-16">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2D6A4F] font-semibold block mb-2">
            • Architectural Disciplines
          </span>
          <h2 className="font-display font-bold text-3xl text-[#1A1C1E]">
            Core Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.idx}
              className="bg-white border border-[#E8EAED] rounded-2xl p-8 shadow-xs hover:shadow-md transition-all"
            >
              <span
                className="font-mono text-xs font-semibold tracking-wider block mb-4"
                style={{ color: p.color }}
              >
                {p.idx}
              </span>
              <h3 className="font-display font-bold text-xl text-[#1A1C1E] mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
           DUAL STUDIO HUBS (TOKYO & ZURICH WITH LIVE CLOCKS)
           ======================================================================== */}
      <section className="py-16 border-t border-[#E8EAED]">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#0058BD] font-semibold block mb-2">
            • Physical Presence
          </span>
          <h2 className="font-display font-bold text-3xl text-[#1A1C1E]">
            Dual Hub Locations
          </h2>
          <p className="text-[#5F6368] text-base mt-2 max-w-2xl">
            Two coordinated engineering nodes operating seamlessly across Asian and European business cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tokyo Hub */}
          <div className="bg-white border border-[#E8EAED] rounded-3xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-extrabold text-2xl text-[#1A1C1E]">
                  Tokyo Studio
                </h3>
                <StudioClock city="Tokyo" timeZone="Asia/Tokyo" />
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#5F6368] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Meguro-ku, Tokyo · 35.6339° N, 139.7082° E</span>
              </div>

              <p className="text-sm text-[#3C4043] leading-relaxed mb-6">
                Specialized in distributed system topologies, high-throughput edge proxies, deterministic transaction queues, and network telemetry.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E8EAED]">
              <span className="font-mono text-[11px] text-[#5F6368] block mb-2 uppercase">
                Primary Core Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="tech-pill">Rust</span>
                <span className="tech-pill">Go</span>
                <span className="tech-pill">Kafka</span>
                <span className="tech-pill">eBPF</span>
                <span className="tech-pill">Envoy</span>
              </div>
            </div>
          </div>

          {/* Zurich Hub */}
          <div className="bg-white border border-[#E8EAED] rounded-3xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-extrabold text-2xl text-[#1A1C1E]">
                  Zürich Studio
                </h3>
                <StudioClock city="Zurich" timeZone="Europe/Zurich" />
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#5F6368] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#E08E45]" />
                <span>Kreis 5, Zürich · 47.3858° N, 8.5284° E</span>
              </div>

              <p className="text-sm text-[#3C4043] leading-relaxed mb-6">
                Specialized in precision frontend engineering, tokenized multi-brand design systems, algorithmic UI choreography, and accessible component suites.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E8EAED]">
              <span className="font-mono text-[11px] text-[#5F6368] block mb-2 uppercase">
                Primary Core Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Next.js 15</span>
                <span className="tech-pill">Design Tokens</span>
                <span className="tech-pill">WebGL</span>
                <span className="tech-pill">Radix UI</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================
           LEADERSHIP & ARCHITECTURAL FELLOWS
           ======================================================================== */}
      <section className="py-16 border-t border-[#E8EAED]">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#EA6A5B] font-semibold block mb-2">
            • Senior Team
          </span>
          <h2 className="font-display font-bold text-3xl text-[#1A1C1E]">
            Principals &amp; Fellows
          </h2>
          <p className="text-[#5F6368] text-base mt-2 max-w-2xl">
            You will collaborate directly with these practitioners — no juniors, no subcontractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fellows.map((fellow, idx) => (
            <div key={idx} className="bg-white border border-[#E8EAED] rounded-2xl p-6 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E8EAED] flex items-center justify-center font-display font-bold text-base text-[#1A1C1E] mb-4">
                {fellow.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1C1E]">
                {fellow.name}
              </h3>
              <div className="font-mono text-xs text-[#2D6A4F] mb-1 font-semibold">
                {fellow.role}
              </div>
              <div className="font-mono text-[11px] text-[#5F6368] mb-3">
                {fellow.location}
              </div>
              <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                {fellow.bio}
              </p>
              <div className="pt-3 border-t border-[#E8EAED] flex items-center justify-between text-[11px] font-mono text-[#5F6368]">
                <span className="flex items-center gap-1">
                  <Key className="w-3 h-3 text-[#2D6A4F]" />
                  <span>PGP</span>
                </span>
                <span className="text-[#1A1C1E]">{fellow.pgp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="rounded-3xl bg-[#1A1C1E] text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Ready to work with a principal engineering studio?
            </h3>
            <p className="text-[#A0A4A8] text-sm max-w-xl">
              We respond with comprehensive technical analysis and timeline estimates within 24 business hours.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-[#1A1C1E] hover:bg-stone-100 shrink-0">
            <span>Initiate Dialogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

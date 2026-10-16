'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, Mail, Clock, Key, Building } from 'lucide-react';

export default function ContactPage() {
  const [selectedCaps, setSelectedCaps] = useState<string[]>(['Distributed Systems']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('immediate');
  const [budget, setBudget] = useState('sprint');
  const [scope, setScope] = useState('');
  const [submittedRfc, setSubmittedRfc] = useState<string | null>(null);

  const capabilities = [
    'Distributed Systems',
    'Frontend & Design System',
    'Platform & Cloud (K8s)',
    'Telemetry & Latency Audit',
  ];

  const toggleCap = (cap: string) => {
    setSelectedCaps((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const rfcCode = 'RFC-' + Math.floor(1000 + Math.random() * 9000) + '-2026';
    setSubmittedRfc(rfcCode);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      
      {/* ========================================================================
           CONTACT HERO HEADER
           ======================================================================== */}
      <section className="py-8 border-b border-[#E8EAED]">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full shadow-xs mb-6">
          <span className="beacon-dot"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#2D6A4F] font-semibold">
            04 / Engagement &amp; Scoping
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1E] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Initiate an Architectural Dialogue.<br />
          <span className="text-[#5F6368]">Direct engineer triage. Zero sales friction.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#3C4043] leading-relaxed max-w-3xl mb-8 font-normal">
          We operate without sales intermediaries. You&apos;ll speak directly with a Principal Engineer about system scope, technical risk, and delivery timelines.
        </p>
      </section>

      {/* ========================================================================
           SCOPING FORM & DIRECT DESK
           ======================================================================== */}
      <section className="py-12">
        <div className="bg-white border border-[#E8EAED] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Desk Credentials Column (~38%) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#2D6A4F] font-semibold block mb-4">
                  • Direct Partner Desk
                </span>
                <h2 className="font-display font-bold text-2xl text-[#1A1C1E] mb-6">
                  Desk Contacts
                </h2>

                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase text-[#5F6368] font-semibold flex items-center gap-1.5 mb-1">
                      <Mail className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      <span>Direct Desk Email</span>
                    </span>
                    <a href="mailto:desk@itstudio.dev" className="font-semibold text-[#1A1C1E] text-base hover:underline">
                      desk@itstudio.dev
                    </a>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase text-[#5F6368] font-semibold flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#E08E45]" />
                      <span>Response SLA</span>
                    </span>
                    <span className="font-semibold text-[#1A1C1E] text-base">
                      &lt; 24 business hours
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase text-[#5F6368] font-semibold flex items-center gap-1.5 mb-1">
                      <Key className="w-3.5 h-3.5 text-[#0058BD]" />
                      <span>PGP Key Fingerprint</span>
                    </span>
                    <span className="font-mono text-xs text-[#1A1C1E] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#E8EAED] inline-block">
                      7D2A 940E 318B FC41 29AA
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase text-[#5F6368] font-semibold flex items-center gap-1.5 mb-1">
                      <Building className="w-3.5 h-3.5 text-[#EA6A5B]" />
                      <span>Studio Hubs</span>
                    </span>
                    <span className="text-xs text-[#3C4043] leading-relaxed block">
                      Meguro-ku, Tokyo (JST UTC+9)<br />
                      Kreis 5, Zürich (CET UTC+1)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[#FAF9F5] border border-[#E8EAED] rounded-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <span className="font-mono text-xs font-semibold text-[#2D6A4F] uppercase">
                    Confidentiality Assured
                  </span>
                </div>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Mutual NDAs executed promptly before preliminary architectural deep-dives. Full client sovereignty on all source code and system specifications.
                </p>
              </div>
            </div>

            {/* Right Form Column (~62%) */}
            <div className="lg:col-span-7">
              {submittedRfc ? (
                <div className="bg-[#2D6A4F]/8 border border-[#2D6A4F]/25 rounded-2xl p-8 sm:p-10 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#1A1C1E] mb-2">
                    Scoping Brief Received
                  </h3>
                  <div className="font-mono text-sm text-[#2D6A4F] font-semibold mb-4">
                    Tracking Reference: {submittedRfc}
                  </div>
                  <p className="text-sm text-[#3C4043] leading-relaxed mb-6">
                    Thank you, <strong>{name}</strong>. A Senior Architect has been assigned to triage your brief. We will review your constraints and provide an initial system architecture RFC and meeting invite within 24 business hours to <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedRfc(null);
                      setName('');
                      setEmail('');
                      setScope('');
                    }}
                    className="btn-secondary text-xs"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Capabilities Pill Selector */}
                  <div>
                    <label className="font-semibold text-sm text-[#1A1C1E] block mb-2.5">
                      System Focus &amp; Scope Requirements
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {capabilities.map((cap) => {
                        const isSelected = selectedCaps.includes(cap);
                        return (
                          <button
                            key={cap}
                            type="button"
                            onClick={() => toggleCap(cap)}
                            className={`font-mono text-xs px-3.5 py-2 rounded-full border transition-all ${
                              isSelected
                                ? 'bg-[#1A1C1E] text-white border-[#1A1C1E] shadow-xs'
                                : 'bg-[#FAF9F5] text-[#3C4043] border-[#E8EAED] hover:bg-white hover:border-[#D2D6DC]'
                            }`}
                          >
                            {cap}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-sm text-[#1A1C1E] block mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Rostova"
                        required
                        className="w-full bg-white border border-[#E8EAED] rounded-xl px-4 py-3 text-sm text-[#1A1C1E] focus:outline-none focus:border-[#4285F4] focus:ring-3 focus:ring-[#4285F4]/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-sm text-[#1A1C1E] block mb-2" htmlFor="email">
                        Work Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        required
                        className="w-full bg-white border border-[#E8EAED] rounded-xl px-4 py-3 text-sm text-[#1A1C1E] focus:outline-none focus:border-[#4285F4] focus:ring-3 focus:ring-[#4285F4]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-sm text-[#1A1C1E] block mb-2" htmlFor="timeline">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-white border border-[#E8EAED] rounded-xl px-4 py-3 text-sm text-[#1A1C1E] focus:outline-none focus:border-[#4285F4] focus:ring-3 focus:ring-[#4285F4]/15 transition-all"
                      >
                        <option value="immediate">Immediate (1–2 weeks)</option>
                        <option value="quarter">Next Quarter Sprint</option>
                        <option value="longterm">Ongoing Engineering Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold text-sm text-[#1A1C1E] block mb-2" htmlFor="budget">
                        Project Tier
                      </label>
                      <select
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-white border border-[#E8EAED] rounded-xl px-4 py-3 text-sm text-[#1A1C1E] focus:outline-none focus:border-[#4285F4] focus:ring-3 focus:ring-[#4285F4]/15 transition-all"
                      >
                        <option value="sprint">Architectural Sprint ($25k–$50k)</option>
                        <option value="pod">Embedded Pod ($50k–$150k+)</option>
                        <option value="audit">Architecture &amp; Latency Audit ($15k)</option>
                      </select>
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div>
                    <label className="font-semibold text-sm text-[#1A1C1E] block mb-2" htmlFor="scope">
                      Architecture Overview &amp; Constraints
                    </label>
                    <textarea
                      id="scope"
                      rows={4}
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      placeholder="Describe current architecture, throughput requirements, latency targets, programming languages, or delivery milestones..."
                      className="w-full bg-white border border-[#E8EAED] rounded-xl px-4 py-3 text-sm text-[#1A1C1E] focus:outline-none focus:border-[#4285F4] focus:ring-3 focus:ring-[#4285F4]/15 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-base justify-center shadow-md hover:shadow-lg"
                  >
                    <span>Submit Scoping Brief</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                  <p className="font-mono text-[11px] text-[#5F6368] text-center">
                    Direct partner triage · No sales newsletters or spam · NDA executed on request
                  </p>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

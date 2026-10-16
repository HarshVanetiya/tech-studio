import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFDF7] border-t border-[#E8EAED] mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        
        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-[#E8EAED]">
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="font-display font-bold text-xl text-[#1A1C1E] flex items-center gap-2">
              <span>IT Studio</span>
              <span className="beacon-dot"></span>
            </Link>
            <p className="text-sm text-[#5F6368] max-w-sm leading-relaxed">
              Editorial engineering and digital architecture for progressive technical platforms. Tokyo &amp; Zürich.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-[#5F6368]">
            <Link href="/services" className="hover:text-[#1A1C1E] transition-colors">Services</Link>
            <Link href="/work" className="hover:text-[#1A1C1E] transition-colors">Work</Link>
            <Link href="/about" className="hover:text-[#1A1C1E] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#1A1C1E] transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Bottom Area */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-[#5F6368]">
          <span>© 2026 IT Studio Inc. All rights reserved.</span>
          
          <div className="flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="font-semibold text-[#1A1C1E]">SYSTEM: OPERATIONAL</span>
            <span className="beacon-dot"></span>
          </div>
        </div>

      </div>
    </footer>
  );
}

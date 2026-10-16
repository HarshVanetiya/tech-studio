'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, Cpu, Building2 } from 'lucide-react';

export default function MobileDock() {
  const pathname = usePathname();

  const dockItems = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Cases', href: '/work', icon: Briefcase },
    { name: 'Tech', href: '/services', icon: Cpu },
    { name: 'Studio', href: '/about', icon: Building2 },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDF7]/92 backdrop-blur-xl border-t border-[#E8EAED] h-15 px-4 flex items-center justify-around">
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
              isActive ? 'text-[#1A1C1E] font-semibold' : 'text-[#5F6368] hover:text-[#1A1C1E]'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-mono text-[10px]">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

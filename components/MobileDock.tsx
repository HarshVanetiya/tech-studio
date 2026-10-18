'use client';

import { Layers, Compass, Briefcase, MessageCircle } from 'lucide-react';
import { contactId } from '@/lib/site';
import useActiveSection from '@/components/useActiveSection';

const dockItems = [
  { name: 'Services', id: 'services', icon: Layers },
  { name: 'Approach', id: 'approach', icon: Compass },
  { name: 'Work', id: 'work', icon: Briefcase },
  { name: 'Contact', id: contactId, icon: MessageCircle },
];

const spyIds = dockItems.map((item) => item.id);

export default function MobileDock() {
  const active = useActiveSection(spyIds);

  return (
    <nav
      aria-label="Sections"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDF7]/92 backdrop-blur-xl border-t border-[#1A1C1E]/[0.07] h-15 px-4 flex items-center justify-around"
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={`flex flex-col items-center justify-center gap-0.5 transition-colors duration-300 ${
              isActive ? 'text-[#1A1C1E] font-semibold' : 'text-[#80868B] hover:text-[#1A1C1E]'
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
            <span className="font-mono text-[10px]">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
}

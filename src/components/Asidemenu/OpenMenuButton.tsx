'use client';

import { useAsidemenu } from '@/hooks/useAsideMenu';
import { SidebarOpen, SidebarClose } from 'lucide-react';

export default function OpenMenuButton() {
  const { isOpen, setIsOpen } = useAsidemenu();
  return (
    <button
      className="fixed top-6 right-8 z-100 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <SidebarClose
          style={{ color: 'var(--color-gray/70) dark:var(--color-white/70)' }}
          size={36}
        />
      ) : (
        <SidebarOpen
          style={{ color: 'var(--color-gray/70) dark:var(--color-white/70)' }}
          size={36}
        />
      )}
    </button>
  );
}

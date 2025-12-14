'use client';
import { useState } from 'react';

import AsidemenuContext from '@/contexts/asidemenuContext';

export default function AsidemenuProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AsidemenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AsidemenuContext.Provider>
  );
}

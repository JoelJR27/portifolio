'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

interface AccordionProps {
  children?: React.ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="flex py-8 flex-col rounded-md px-4 lg:w-7/10 lg:justify-self-center lg:px-8">
      <button
        className="mb-4 cursor-pointer self-end text-gray hover:opacity-70 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Plus />
      </button>

      {isOpen && <>{children}</>}
    </article>
  );
}

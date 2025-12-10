'use client';

import scrollToElement from '@/utils/scrollToElement';

interface NavigationButtonProps {
  targetId: string;
  children: React.ReactNode;
}
export default function NavigationButton({
  targetId,
  children
}: NavigationButtonProps) {
  return <button className='cursor-pointer font-medium text-lg hover:underline hover:text-primary hover:scale-110 transition-all duration-300' onClick={() => scrollToElement(targetId)}>{children}</button>;
}

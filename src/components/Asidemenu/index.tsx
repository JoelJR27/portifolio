'use client';
import { useAsidemenu } from '@/hooks/useAsideMenu';
import { ModeToggle } from '../ModeToggle';
import SocialLinks from '../SocialLinks';
import NavigationLinks from '../NavigationLinks';
import BlackScreenBackground from '../BlackScreenBackground';

export default function Asidemenu() {
  const { isOpen, setIsOpen } = useAsidemenu();

  return (
    <>
      {isOpen && (
        <>
          <BlackScreenBackground onClick={() => setIsOpen(false)} />
          <aside className="fixed right-0 z-50 flex h-screen w-[70%] flex-col p-6 shadow-lg md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]">
            <ModeToggle />
            <nav className="flex h-full w-full flex-col items-center justify-center gap-2 divide-y divide-gray/20 dark:divide-white/20">
              <SocialLinks />
              <NavigationLinks />
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

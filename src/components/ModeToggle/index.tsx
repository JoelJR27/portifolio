'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      className="border-border relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-transparent p-2 transition-colors hover:bg-primary/90"
      onClick={() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }}
    >
      <Sun
        style={{ color: 'var(--color-white)' }}
        className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:block dark:scale-100 dark:rotate-0"
      />
      <Moon
        style={{ color: 'var(--color-gray)' }}
        className="h-5 w-5 scale-100 rotate-0 transition-all dark:hidden dark:scale-0 dark:-rotate-90"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

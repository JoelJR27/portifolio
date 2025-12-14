'use client';

import scrollToElement from '@/utils/scrollToElement';

interface LinkButtonProps {
  href: string;
  variant: 'primary' | 'outline';
  children: React.ReactNode;
  [key: string]: string | React.ReactNode;
}

export default function LinkButton({
  href,
  variant,
  children,
  ...props
}: LinkButtonProps) {
  const baseStyles =
    ' flex items-center rounded-xl p-3 text-center font-anton text-button tracking-[0.01rem] uppercase transition-all duration-200 md:text-lg cursor-pointer';
  const variants = {
    primary: 'bg-primary text-white text-shadow-sm hover:brightness-90',
    outline:
      'border border-gray/70 text-gray/90 hover:bg-gray/90 hover:text-white dark:border-white/70 dark:text-white dark:hover:bg-white dark:hover:text-gray'
  };
  const stringVariant = variant.toString();
  return (
    <>
      {stringVariant === 'primary' ? (
        <button
          className={variants[variant] + baseStyles}
          onClick={() => scrollToElement(href)}
          {...props}
        >
          {children}
        </button>
      ) : (
        <button
          onClick={() => window.open(href)}
          className={variants[variant] + baseStyles}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

'use client';
import { Button } from '../../ui/button';
import scrollToElement from '@/utils/scrollToElement';
import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  const styles = 'font-anton text-lg cursor-pointer shadow-2xl';
  return (
    <>
      <Button
        className={styles}
        size="lg"
        onClick={() => scrollToElement('projects')}
        aria-disabled={false}
      >
        Ver projetos{' '}
        <ArrowRight strokeWidth={3} size={18} className="ml-1 inline-block" />
      </Button>
      <Button
        className={styles}
        variant={'outline'}
        size="lg"
        onClick={() => window.open('mailto:devjoeljunior@gmail.com')}
      >
        Entre em contato
      </Button>
    </>
  );
}

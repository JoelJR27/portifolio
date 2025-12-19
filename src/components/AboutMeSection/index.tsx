'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { useGSAP } from '@gsap/react';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { CircleQuestionMark, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function AboutMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.to(textRef.current, {
            duration: 2.5,
            scrambleText: {
              text: 'Há 1 ano, transformo ideias em produtos que realmente funcionam: interfaces intuitivas, APIs estáveis e experiências que não quebram quando o usuário mais precisa.',
              chars:
                '01!@#$%¨&*()-_=+[]{};:.,<>?/\\|`^~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
              speed: 0.8,
              delimiter: ' '
            }
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.5
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mb-20 flex h-auto flex-col items-center gap-4 lg:items-start"
      id="about-me"
    >
      <h2 className="mb-6 flex items-center gap-2 font-semibold">
        <CircleQuestionMark className={sectionIconsStyles} /> Sobre mim
      </h2>

      <p
        ref={textRef}
        className="border-b border-gray/10 pb-6 text-2xl lg:text-4xl dark:border-white/10"
      >
        Há 1 ano, transformo ideias em produtos que realmente funcionam:
        interfaces intuitivas, APIs estáveis e experiências que não quebram
        quando o usuário mais precisa.
      </p>

      <div className="grid-cols-2 divide-gray/10 *:py-2 xl:grid xl:divide-x-2 dark:divide-white/10">
        <h2 className="flex items-center justify-center gap-2 text-center font-anton text-h3 lg:justify-start xl:justify-center">
          <User size={32} className={sectionIconsStyles} /> Meu nome é Joel
          Júnior
        </h2>

        <div className="*:text-wrap lg:*:px-2 xl:*:px-6">
          <p>
            Sou desenvolvedor fullstack e, antes de qualquer linha de código,
            gosto de entender o propósito por trás do que estou construindo.
          </p>
          <p>
            Meu foco é entregar aplicações modernas, escaláveis e tranquilas de
            se usar, porque tecnologia boa é aquela que você esquece que existe.
          </p>
        </div>
      </div>
    </section>
  );
}

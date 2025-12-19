'use client';
import { Technology } from '@/types/Technology';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animateStackCard } from '@/lib/animations/stackAnimations';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface StackCardProps {
  technology: Technology;
  index: number;
}

export default function StackCard({ technology, index }: StackCardProps) {
  const cardRef = useRef<HTMLLIElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!cardRef.current || !imageRef.current || !textRef.current) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      animateStackCard(
        cardRef.current!,
        imageRef.current!,
        textRef.current!,
        index,
        isMobile
      );

      if (!isMobile) {
        gsap.set(cardRef.current, { transformOrigin: 'center' });

        if (!cardRef.current || !imageRef.current) return;

        cardRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            rotate: -6,
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        cardRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index]);
  return (
    <li ref={cardRef} className="flex flex-col items-center p-2">
      <Image
        ref={imageRef}
        src={technology.logo.imageLink}
        alt={`Logo ${technology.name}`}
        width={40}
        height={40}
        className="m-2 rounded transition-transform duration-500 hover:-rotate-5"
      />
      <h4 ref={textRef} className="font-anton uppercase">
        {technology.name}
      </h4>
    </li>
  );
}

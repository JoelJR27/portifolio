'use client';
import { animateExperienceCard } from '@/lib/experiencesAnimation';
import { Experience } from '@/types/Experience';
import dateFormater from '@/utils/dateFormater';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceCardProps {
  experience: Experience;
  isLastExperience?: boolean;
  index: number;
}

export default function ExperienceCard({
  experience,
  isLastExperience,
  index
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      animateExperienceCard(cardRef.current!, index);
    }, cardRef);

    return () => ctx.revert();
  }, [index]);
  //TODO: fazer animações com GSAP
  return (
    <article ref={cardRef} className="my-4 will-change-transform">
      <h3 className="text-center font-anton text-h3 tracking-tight uppercase lg:text-start">
        {experience.title}
      </h3>

      <p className="text-sm text-gray/80">
        {dateFormater(experience.startedAt)} –{' '}
        {isLastExperience ? 'Presente' : dateFormater(experience.finishedAt)}
      </p>
    </article>
  );
}

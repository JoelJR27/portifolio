'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
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

  return (
    // TODO: Refatorar todo o frontend e recriar a API
    <article ref={cardRef} className="my-4 will-change-transform">
      <h3 className="text-center font-anton text-h3 tracking-tight uppercase lg:text-start">
        {experience.title}
      </h3>

      <p className="text-sm text-gray/80">
        <strong className="font-semibold">
          {dateFormater(experience.startedAt)} –{' '}
          {isLastExperience ? 'Presente' : dateFormater(experience.finishedAt)}
        </strong>
      </p>

      <p className="text-justify text-sm leading-6 lg:max-w-1/2">
        {experience.description}
      </p>
    </article>
  );
}

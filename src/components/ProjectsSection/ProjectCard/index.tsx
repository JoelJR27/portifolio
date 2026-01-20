'use client';
import LoadingIcon from '@/components/LoadingIcon';
import { Project } from '@/types/Project';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRightFromSquareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { technologies: technologiesList } = project;
  const cardRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techRefs = useRef<HTMLLIElement[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          once: true
        }
      });

      tl.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });

      tl.from(
        titleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out'
        },
        '-=0.3'
      );

      tl.from(
        techRefs.current,
        {
          y: 16,
          opacity: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: 'power2.out'
        },
        '-=0.2'
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <article ref={cardRef} className="flex flex-col gap-2">
      <Link
        href={{ pathname: `/project/${project.slug}` }}
        aria-label={project.projectName}
        prefetch={true}
      >
        <h3
          ref={titleRef}
          className="flex items-center justify-center gap-4 text-center font-anton text-h3 tracking-tight uppercase lg:justify-start"
        >
          {project.projectName}
          <ArrowUpRightFromSquareIcon size={16} />
          <LoadingIcon />
        </h3>
      </Link>

      <ul className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
        {technologiesList &&
          [...technologiesList].reverse().map((item, index) => (
            <li
              key={item.technology.id}
              ref={(el) => {
                if (el) techRefs.current[index] = el;
              }}
              className="flex flex-col items-center gap-1"
            >
              <Image
                className="rounded transition-transform duration-200 hover:scale-110"
                src={item.technology.logo?.imageLink}
                alt={item.technology.logo?.name}
                width={16}
                height={16}
              />
              <span className="text-small text-gray/70 dark:text-white/70">
                {item.technology.name}
              </span>
            </li>
          ))}
      </ul>
    </article>
  );
}

import LoadingIcon from '@/components/LoadingIcon';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { technologies: technologiesList } = project;
  //TODO: fazer animações com GSAP
  return (
    <article className="flex flex-col gap-2">
      <Link
        href={{ pathname: `/project/${project.slug}` }}
        aria-label={project.projectName}
        prefetch="auto"
      >
        <h3 className="flex items-center justify-center gap-2 text-center font-anton text-h3 tracking-tight uppercase lg:justify-start">
          {project.projectName}
          <LoadingIcon />
        </h3>
      </Link>
      <ul className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
        {technologiesList &&
          technologiesList.reverse().map((item) => (
            <li
              key={item.technology.id}
              className="flex flex-col items-center gap-1"
            >
              <Image
                key={item.technology.logo.id}
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

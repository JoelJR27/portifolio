import BackToMainPageButton from '@/components/BackToMainPageButton';
import LoadingIcon from '@/components/LoadingIcon';
import ScrollContainer from '@/components/ScrollContainer';
import { ProjectsRepository } from '@/repositories/projects.repository';
import { Technology } from '@/types/Technology';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function ProjectPage({
  params
}: PageProps<'/project/[slug]'>) {
  const { slug } = await params;
  const project = await ProjectsRepository.getBySlug(slug);
  const { technologies } = project;

  return (
    <ScrollContainer>
      <header className="p-6">
        <BackToMainPageButton />
      </header>
      <Suspense fallback={<LoadingIcon />}>
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 p-6">
          <h1 className="inline self-start border-b border-b-primary text-wrap text-gray dark:text-white">
            {project?.projectName || 'Projeto sem nome'}
          </h1>
          <p className="px-0 py-8">{project?.description || 'Sem descrição'}</p>
          <ul className="flex gap-4 self-start *:w-6">
            {technologies
              .reverse()
              .map(
                (tech: {
                  id: string;
                  projectId: string;
                  technologyId: string;
                  technology: Technology;
                }) => (
                  <li key={tech.id}>
                    <Image
                      className="rounded lg:scale-125 animate-pulse"
                      src={
                        tech.technology.logo?.imageLink ||
                        'https://ito-group.com/wp-content/uploads/2025/04/no-image.jpg'
                      }
                      alt={`${tech.technology.name || 'Sem nome'} logo`}
                      width={50}
                      height={50}
                    />
                  </li>
                )
              )}
          </ul>
          <Suspense fallback={<LoadingIcon />}>
            <Image
              src={
                project.image?.imageLink ||
                'https://ito-group.com/wp-content/uploads/2025/04/no-image.jpg'
              }
              alt={project.projectName ?? 'Imagem do projeto'}
              width={800}
              height={200}
              className="rounded pt-5 transition-transform duration-75 hover:scale-101"
            />
          </Suspense>
          <div className="flex gap-4 self-start *:rounded *:bg-primary *:px-2 *:py-1 *:font-semibold">
            {project.githubLink && (
              <a
                href={project?.githubLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.projectLink && (
              <a
                href={project?.projectLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </section>
      </Suspense>
    </ScrollContainer>
  );
}

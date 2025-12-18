import ProjectCard from './ProjectCard';
import { Braces } from 'lucide-react';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { Project } from '@/types/Project';

interface ProjectsSectionProps {
  projects: Project[];
}

export default async function ProjectsSection({
  projects
}: ProjectsSectionProps) {


  //TODO: fazer animações com GSAP
  return (
    <section
      className="flex flex-col items-center gap-4 lg:items-start"
      id="projects"
    >
      <h2 className="mb-6 flex items-center gap-2 font-semibold">
        <Braces className={sectionIconsStyles} /> Projetos
      </h2>

      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  );
}

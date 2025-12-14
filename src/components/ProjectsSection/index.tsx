import ProjectCard from './ProjectCard';
import { Braces } from 'lucide-react';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { fetchAllData } from '@/app/actions/fetchAllData';

export default async function ProjectsSection() {
  const { projects } = await fetchAllData();
  const { data } = projects;

  //TODO: fazer animações com GSAP
  return (
    <section
      className="flex flex-col items-center gap-4 lg:items-start"
      id="projects"
    >
      <h2 className="mb-6 flex items-center gap-2 font-semibold">
        <Braces className={sectionIconsStyles} /> Projetos
      </h2>

      {data &&
        data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  );
}

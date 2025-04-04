import ProjectCard from "./ProjectCard";
import cloudVisionImage from "/images/CloudVision-preview.jpg";
import planDoImage from "/images/Plan-Do-preview.png";
function ProjectsContainer() {
  const projects = [
    {
      title: "CloudVision",
      imageUrl: cloudVisionImage,
      description:
        "Cloudvision é um aplicativo de previsão do tempo com uma interface amigável ao usuário. Com apenas alguns cliques você pode facilmente ver diversas métricas como, temperatura, umidade, ventos e a previsão atual para a cidade desejada.",
      projectLink: "https://github.com/JoelJR27/CloudVision",
      link: "https://joeljr27.github.io/CloudVision/",
    },
    {
      title: "Plan-Do",
      imageUrl: planDoImage,
      description:
        "Plan-Do é um aplicativo de gerenciamento de tarefas. Com o Plan-Do, vocês pode criar, editar, excluir e marcar tarefas, tudo isso com um simples clique.",
        projectLink: "https://github.com/JoelJR27/Plan-Do",
      link: "https://joeljr27.github.io/Plan-Do/",
    },
  ];
  return (
    <section className="py-25" id="projects"> 
      <h2 className="text-xl text-medium-blue font-bold mb-8 sm:text-2xl lg:text-3xl lg:text-center">Projetos</h2>
      <ul className="grid grid-cols-1 gap-12 sm:max-w-5/6 sm:mx-auto lg:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            projectLink={project.projectLink}
            link={project.link}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsContainer;

import ProjectCard from "./ProjectCard";

function ProjectsContainer() {
  return (
    <section className="py-25" id="projects">
      <h2 className="text-xl text-medium-blue font-bold mb-8">
        Projetos
      </h2>
      <ul className="grid grid-cols-1 gap-12">
        <ProjectCard
          title="CloudVision"
          imageUrl="/CloudVision-preview.jpg"
          description="Cloudvision é um aplicativo de previsão do tempo com uma interface amigável ao usuário. Com apenas alguns cliques você pode facilmente ver diversas métricas como, temperatura, umidade, ventos e a previsão atual para a cidade desejada."
        />
        <ProjectCard
          title="Plan-Do"
          imageUrl="/Plan-Do-preview.png"
          description={"Plan-Do é um aplicativo de gerenciamento de tarefas. Com o Plan-Do, vocês pode criar, editar, excluir e marcar tarefas, tudo isso com um simples clique."}
        />
      </ul>
    </section>
  );
}

export default ProjectsContainer;

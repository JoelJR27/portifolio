import {
  Table,
  TableHead,
  TableHeader,
  TableCaption,
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table';
import { Project } from '@/types/Project';
import Image from 'next/image';
import CreateProjectsForm from '../CreateProjectsForm';
import EditProjectsModal from '../EditProjectsModal';
import { fetchAllData } from '@/app/actions/fetchAllData';


export default async function ProjectsTable() {
  const { projects } = await fetchAllData();
  const { data } = projects;
  return (
    <>
      <Table className="w-full text-gray lg:justify-self-center lg:text-lg 2xl:w-8/10 dark:text-white">
        <TableCaption className="pb-5 text-start text-xl">
          Lista de projetos
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome do Projeto</TableHead>
            <TableHead className="text-center">Slug</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Tecnologias</TableHead>
            <TableHead>Links</TableHead>
            <TableHead className="text-center">Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((project: Project) => (
              <TableRow key={project.id}>
                <TableCell className="w-auto">
                  <h3 className="text-sm font-semibold text-wrap text-gray lg:text-lg dark:text-white">
                    {project.projectName}
                  </h3>
                </TableCell>
                <TableCell className="text-center wrap-normal">
                  {project.slug}
                </TableCell>
                <TableCell className="max-w-[150px]">
                  <p className="text-small text-wrap">{project.description}</p>
                </TableCell>
                <TableCell>
                  <ul className="flex gap-2 wrap-normal">
                    {project.technologies.map((technology) => (
                      <li key={technology.id}>
                        <Image
                          src={technology.technology.logo.imageLink}
                          alt={technology.technology.logo.name}
                          width={25}
                          height={25}
                        />
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className="*:py-1">
                    <li>
                      <a href={project.githubLink}> GitHub</a>
                    </li>
                    <li>
                      <a href={project.projectLink}>Demo</a>
                    </li>
                  </ul>
                </TableCell>
                <TableCell>
                  <EditProjectsModal identifier={project.slug} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <CreateProjectsForm />
    </>
  );
}

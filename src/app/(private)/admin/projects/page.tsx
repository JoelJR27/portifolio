import Loading from '@/app/loading';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { getPortfolioData } from '@/services/portifolio.service';
import { ExternalLink } from 'lucide-react';
import { Suspense } from 'react';
import CreateProjectForm from '../components/CreateProjectForm';
import EditProjectForm from '../components/EditProjectForm';

export default async function AdminProjectsPage() {
  const { projects, technologies } = await getPortfolioData();

  return (
    <section className="px-3 py-5 lg:px-10 xl:px-60 2xl:px-80">
      <div className="pb-6 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="font-roboto-flex text-3xl font-medium tracking-tight text-gray dark:text-white">
            Projetos
          </h1>
          <p className="px-0 text-start">Gerencie os projetos do portifólio</p>
        </div>
        <CreateProjectForm technologies={technologies} />
      </div>
      <Suspense fallback={<Loading />}>
        <Table>
          <TableHeader>
            <TableRow className="*:px-4 *:font-semibold *:whitespace-nowrap">
              <TableHead className="w-[100px]">Nome</TableHead>
              <TableHead className="hidden sm:table-cell">Slug</TableHead>
              <TableHead className="hidden md:table-cell">Descrição</TableHead>
              <TableHead className="hidden lg:table-cell">
                Tecnologias
              </TableHead>
              <TableHead className="hidden sm:table-cell">Links</TableHead>
              <TableHead className="w-[100px] text-end">Opções</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects &&
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <p className="text-md py-0 text-start">
                      {project.projectName}
                    </p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <code className="rounded bg-background px-2 py-1">
                      {project.slug}
                    </code>
                  </TableCell>
                  <TableCell className="hidden max-w-[250px] sm:table-cell">
                    <p className="text-md truncate py-0 text-start">
                      {project.description || 'Sem descrição'}
                    </p>
                  </TableCell>
                  <TableCell className="hidden max-w-[300px] flex-wrap gap-1 lg:flex lg:items-center lg:justify-center">
                    {project.technologies &&
                      project.technologies.reverse().map((technology) => (
                        <Badge
                          variant={'outline'}
                          className="mx-1 text-xs"
                          key={technology.id}
                        >
                          {technology.technology.name}
                        </Badge>
                      ))}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <ul className="flex gap-3 px-2">
                      {project.githubLink && (
                        <li>
                          <a
                            className="inline-flex items-center gap-2 text-xs"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub <ExternalLink size={14} />
                          </a>
                        </li>
                      )}
                      {project.projectLink && (
                        <li>
                          <a
                            className="flex items-center gap-2"
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live <ExternalLink size={14} />
                          </a>
                        </li>
                      )}
                    </ul>
                  </TableCell>
                  <TableCell className="align-end w-[100px] px-4 text-end sm:table-cell">
                    <EditProjectForm
                      project={project}
                      technologies={technologies}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Suspense>
    </section>
  );
}

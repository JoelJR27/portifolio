import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Experience } from '@/types/Experience';
import dateFormater from '@/utils/dateFormater';
import EditExperienceModal from '../EditExperienceModal';
import { fetchAllData } from '@/app/actions/fetchAllData';

export default async function ExperiencesTable() {
  const { experiences } = await fetchAllData();
  const { data, lastExperience } = experiences;

  return (
    <>
      <Table className="w-full pb-10 text-gray lg:justify-self-center lg:text-lg 2xl:w-8/10 dark:text-white">
        <TableCaption className="pb-5 text-start text-xl">
          Lista de experiências
        </TableCaption>
        <TableHeader>
          <TableRow className="*:text-center lg:*:text-start">
            <TableHead className="w-[50px]">Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Início</TableHead>
            <TableHead>Fim</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-[100px] lg:w-[200px]">
              <h3 className="text-sm font-semibold text-wrap text-gray lg:text-lg dark:text-white">
                {lastExperience?.title || 'Sem título'}
              </h3>
            </TableCell>
            <TableCell className="max-w-[100px]">
              <p className="text-small text-wrap">
                {lastExperience?.description || 'Sem descrição'}
              </p>
            </TableCell>
            <TableCell className="max-w-[100px]">
              <p className="text-wrap">
                {dateFormater(lastExperience?.startedAt!) || 'Sem data'}
              </p>
            </TableCell>
            <TableCell className="max-w-[100px]">
              <p className="text-wrap">Presente</p>
            </TableCell>
            <TableCell className="w-[50px]">
              <EditExperienceModal identifier={lastExperience?.id! || ''} />
            </TableCell>
          </TableRow>
          {data &&
            data.map((experience: Experience) => (
              <TableRow
                key={experience.id}
                className="*:text-center lg:*:text-start"
              >
                <TableCell className="w-[100px] lg:w-[200px]">
                  <h3 className="text-sm font-semibold text-wrap text-gray lg:text-lg dark:text-white">
                    {experience?.title || 'Sem título'}
                  </h3>
                </TableCell>
                <TableCell className="max-w-[100px]">
                  <p className="text-small text-wrap">
                    {experience?.description || 'Sem descrição'}
                  </p>
                </TableCell>
                <TableCell className="max-w-[100px]">
                  <p className="text-wrap">
                    {dateFormater(experience?.startedAt) || 'Sem data'}
                  </p>
                </TableCell>
                <TableCell className="max-w-[100px]">
                  <p className="text-wrap">
                    {dateFormater(experience?.finishedAt) || 'Sem data'}
                  </p>
                </TableCell>
                <TableCell className="w-[50px]">
                  <EditExperienceModal identifier={experience?.id || ''} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

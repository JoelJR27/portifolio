import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Technology } from '@/types/Technology';
import Image from 'next/image';
import EditTechnologiesModal from '../EditTechnologiesModal';
import { fetchAllData } from '@/app/actions/fetchAllData';

export default async function TechnologiesTable() {
  const { technologies } = await fetchAllData();
  const { data } = technologies;

  return (
    <>
      <Table className="w-full text-gray lg:justify-self-center lg:text-lg 2xl:w-8/10 dark:text-white">
        <TableCaption className="pb-5 text-start text-xl">
          Lista de Tecnologias
        </TableCaption>
        <TableHeader className="lg:text-xl">
          <TableRow>
            <TableHead className="text-start">Logo</TableHead>
            <TableHead className="text-center">Nome</TableHead>
            <TableHead className="text-center">Ids</TableHead>
            <TableHead className="text-center">Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((technology: Technology) => (
              <TableRow key={technology.id}>
                <TableCell className="w-[100px] text-center">
                  <Image
                    src={technology.logo?.imageLink}
                    alt={technology.logo?.name ?? ' logo'}
                    width={25}
                    height={25}
                  />
                </TableCell>
                <TableCell className="w-[50px] p-0 text-center">
                  <h3 className="text-sm font-semibold text-gray lg:text-lg dark:text-white">
                    {technology.name}
                  </h3>
                </TableCell>
                <TableCell>
                  <p className="text-center text-wrap">{technology.id}</p>
                </TableCell>
                <TableCell className="text-end">
                  <EditTechnologiesModal identifier={technology.id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

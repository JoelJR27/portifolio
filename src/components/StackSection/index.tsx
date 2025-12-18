import { Technology } from '@/types/Technology';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { Globe } from 'lucide-react';
import Image from 'next/image';

interface StackSectionProps {
  technologies: Technology[];
}

export default async function StackSection({
  technologies
}: StackSectionProps) {
  //TODO: fazer animações
  return (
    <section className="flex flex-col items-center lg:items-start" id="stack">
      <h2 className="flex items-center gap-2 font-semibold">
        <Globe className={sectionIconsStyles} /> Tech Stack
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {technologies &&
          technologies.map((technology) => (
            <li className="flex flex-col items-center p-2" key={technology.id}>
              <Image
                src={technology.logo.imageLink}
                alt={`Logo ${technology.name}`}
                width={40}
                height={40}
                className="m-2 rounded transition-transform duration-1000 hover:rotate-360"
              />
              <h4 className="font-anton uppercase">{technology.name}</h4>
            </li>
          ))}
      </ul>
    </section>
  );
}

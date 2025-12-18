import { Technology } from '@/types/Technology';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { Globe } from 'lucide-react';
import StackCard from './StackCard';

interface StackSectionProps {
  technologies: Technology[];
}

export default async function StackSection({
  technologies
}: StackSectionProps) {
  return (
    <section className="flex flex-col items-center lg:items-start" id="stack">
      <h2 className="flex items-center gap-2 font-semibold">
        <Globe className={sectionIconsStyles} /> Tech Stack
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {technologies &&
          technologies.map((technology, index) => (
            <StackCard
              index={index}
              key={technology.id}
              technology={technology}
            />
          ))}
      </ul>
    </section>
  );
}

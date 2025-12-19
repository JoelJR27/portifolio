import { BriefcaseBusiness } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { Experience } from '@/types/Experience';

interface ExperiencesSectionProps {
  experiences: Experience[];
  lastExperience: Experience | null;
}

export default async function ExperiencesSection({
  experiences,
  lastExperience
}: ExperiencesSectionProps) {
  return (
    <section
      className="flex flex-col items-center lg:items-start"
      id="experiences"
    >
      <h2 className="mb-12 flex items-center gap-2 text-center font-semibold lg:text-start">
        {' '}
        <BriefcaseBusiness className={sectionIconsStyles} />
        Minhas experiências
      </h2>
      {lastExperience && (
        <ExperienceCard
          key={lastExperience.id}
          isLastExperience
          experience={lastExperience}
          index={0}
        />
      )}

      {experiences &&
        experiences.map((experience: Experience, index: number) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index + 1}
          />
        ))}
    </section>
  );
}

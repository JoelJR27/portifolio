import { BriefcaseBusiness } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { Experience } from '@/types/Experience';
import useFetchData from '@/hooks/useFetchData';

export default async function ExperiencesSection() {
  const { experiences } = await useFetchData();
  const { data, lastExperience } = experiences;

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
        />
      )}

      {data &&
        data.map((experience: Experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
    </section>
  );
}

import { Experience } from '@/types/Experience';
import dateFormater from '@/utils/dateFormater';

interface ExperienceCardProps {
  experience: Experience;
  isLastExperience?: boolean;
}
export default function ExperienceCard({
  experience,
  isLastExperience
}: ExperienceCardProps) {
  //TODO: fazer animações com GSAP
  return (
    <article className="my-3">
      <h3 className="text-center font-anton text-h3 tracking-tight uppercase lg:text-start">
        {experience.title}
      </h3>
      <p>
        {dateFormater(experience.startedAt)} -{' '}
        {isLastExperience ? 'Presente' : dateFormater(experience.finishedAt)}
      </p>
    </article>
  );
}

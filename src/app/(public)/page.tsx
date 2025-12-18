import AboutMeSection from '@/components/AboutMeSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import { Suspense } from 'react';
import Loading from '../loading';
import { getPortfolioData } from '@/services/portifolio.service';

export default async function Home() {
  const { projects, experiences, technologies } = await getPortfolioData();
  const lastExperience = experiences ? experiences.splice(0, 1)[0] : null;
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProjectsSection projects={projects} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ExperiencesSection
          experiences={experiences}
          lastExperience={lastExperience}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <StackSection technologies={technologies} />
      </Suspense>
      <AboutMeSection />
    </>
  );
}

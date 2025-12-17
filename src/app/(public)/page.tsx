import AboutMeSection from '@/components/AboutMeSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import { Suspense } from 'react';
import Loading from '../loading';

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ExperiencesSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <StackSection />
      </Suspense>
      <AboutMeSection />
    </>
  );
}

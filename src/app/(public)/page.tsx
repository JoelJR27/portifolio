import AboutMeSection from '@/components/AboutMeSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';

export default async function Home() {

  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperiencesSection />
      <StackSection />
      <AboutMeSection />
    </>
  );
}

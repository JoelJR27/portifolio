import { Terminal } from 'lucide-react';
import TechnologiesTable from './components/TechnologiesTable';
import ProjectsTable from './components/ProjectsTable';
import ExperiencesTable from './components/ExperiencesTable';
import CreateTechnologyForm from './components/CreateTechnologyForm';
import CreateExperienceForm from './components/CreateExperienceForm';

export default async function AdminPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center px-0 py-10 text-white lg:px-16 lg:py-20">
      <h1 className="mb-5 flex items-center gap-4 tracking-wider">
        <span className="animate-pulse">
          <Terminal style={{ color: 'var(--color-primary)' }} size={40} />
        </span>
        Olá Joel!
      </h1>
      <section className="w-full md:px-8">
        <ProjectsTable />
        <TechnologiesTable />
        <CreateTechnologyForm />
        <ExperiencesTable />
        <CreateExperienceForm />
      </section>
    </section>
  );
}

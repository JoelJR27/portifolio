import { ArrowRight } from 'lucide-react';
import LinkButton from '../LinkButton';

export default async function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 p-0"
      id="home"
    >
      <h1 className="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Desenvolvedor
        <span className="pl-10 text-end text-[2.5rem] leading-8 text-gray md:pl-15 md:text-5xl md:leading-11 lg:pl-27 lg:text-[3.5rem] lg:leading-14 xl:pl-35 xl:text-[4.5rem] xl:leading-[4.5rem] dark:text-white">
          Fullstack
        </span>{' '}
      </h1>

      <p>Construo aplicações web que unem lógica, precisão e experiência.</p>

      <div className="flex w-full justify-center gap-6">
        <LinkButton href="projects" variant="primary">
          Ver Projetos{' '}
          <ArrowRight strokeWidth={3} size={18} className="ml-1 inline-block" />
        </LinkButton>
        <LinkButton
          target="_blank"
          href="mailto:devjoeljunior@gmail.com"
          variant="outline"
        >
          Entre em contato
        </LinkButton>
      </div>
    </section>
  );
}

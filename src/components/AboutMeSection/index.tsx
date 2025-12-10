import sectionIconsStyles from '@/utils/sectionIconsStyles';
import { CircleQuestionMark, User } from 'lucide-react';

export default function AboutMeSection() {
  //TODO: fazer animações com GSAP
  return (
    <section className="flex flex-col items-center gap-4 lg:items-start" id="about-me">
      <h2 className="mb-6 flex items-center gap-2 font-semibold">
        <CircleQuestionMark className={sectionIconsStyles} /> Sobre mim
      </h2>
      <p className="border-b border-gray/10 p-0 pb-6 text-2xl lg:text-4xl dark:border-white/10">
        Há 1 ano, transformo ideias em produtos que realmente funcionam:
        interfaces intuitivas, APIs estáveis e experiências que não quebram
        quando o usuário mais precisa.
      </p>
      <div className="grid-cols-2 divide-gray/10 *:py-2 xl:grid xl:divide-x-2 dark:divide-white/10">
        <h2 className="flex items-center justify-center gap-2 text-center font-anton text-h3 lg:justify-start xl:justify-center">
          {' '}
          <User size={32} className={sectionIconsStyles} /> Meu nome é Joel
          Júnior
        </h2>
        <div className="*:text-wrap lg:*:px-2 xl:*:px-6">
          <p>
            Sou desenvolvedor fullstack e, antes de qualquer linha de código,
            gosto de entender o propósito por trás do que estou construindo.
          </p>
          <p>
            Meu foco é entregar aplicações modernas, escaláveis e tranquilas de
            se usar, porque tecnologia boa é aquela que você esquece que existe.
            E sigo evoluindo todos os dias, explorando novas ferramentas,
            refinando minha prática e mantendo a mesma curiosidade que me trouxe
            até aqui.
          </p>
        </div>
      </div>
    </section>
  );
}

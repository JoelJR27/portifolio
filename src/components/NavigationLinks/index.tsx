import NavigationButton from './NavigationButton';

export default function NavigationLinks() {
  return (
    <ul className="disc-primary flex list-outside list-disc flex-col gap-2 *:flex *:items-center *:gap-4">
      <li>
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-primary"></span>
        <NavigationButton targetId="home">Início</NavigationButton>
      </li>
      <li>
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-primary"></span>
        <NavigationButton targetId="projects">Projetos</NavigationButton>
      </li>
      <li>
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-primary"></span>
        <NavigationButton targetId="experiences">Experiências</NavigationButton>
      </li>
      <li>
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-primary"></span>
        <NavigationButton targetId="stack">Minha stack</NavigationButton>
      </li>
      <li>
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-primary"></span>
        <NavigationButton targetId="about-me">Sobre mim</NavigationButton>
      </li>
    </ul>
  );
}

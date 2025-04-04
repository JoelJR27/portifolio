import SkillCard from "./SkillCard";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faGear,
  faUser,
  faWind,
  faCloud,
  faServer,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function SkillsContainer() {
  return (
    <section className="py-25">
      <h2 className="text-xl text-medium-blue font-bold mb-8 sm:text-2xl lg:text-3xl lg:text-center">Skills</h2>
      <SkillCard
        skillName="Desenvolvimento"
        skillIcon={faCode}
        skills={[
          {
            skillName: "HTML",
            icon: faHtml5,
          },
          {
            skillName: "CSS",
            icon: faCss3Alt,
          },
          {
            skillName: "SASS",
            icon: faSass,
          },
          {
            skillName: "TailwindCSS",
            icon: faWind,
          },
          {
            skillName: "JavaScript",
            icon: faJs,
          },
          {
            skillName: "React",
            icon: faReact,
          },
          {
            skillName: "APIs",
            icon: faServer,
          }
        ]}
      />
      <SkillCard
        skillName="Ferramentas"
        skillIcon={faGear}
        skills={[
          {
            skillName: "Git",
            icon: faGitAlt,
          },
          {
            skillName: "GitHub",
            icon: faGithub,
          },
          {
            skillName: "Figma",
            icon: faFigma,
          },
          {
            skillName: "Vercel",
            icon: faCloud,
          },
        ]}
      />
      
         <SkillCard
           skillName="Soft Skills"
           skillIcon={faUser}
           skills={[
             {
               skillName: "Comunicação",
               icon: faCheck,
             },
             {
               skillName: "Proatividade",
               icon: faCheck,
             },
             {
               skillName: "Flexibilidade",
               icon: faCheck,
             },
             {
               skillName: "Trabalho em equipe",
               icon: faCheck,
             },
             {
              skillName: "Organização",
              icon: faCheck,
             },
             {
              skillName: "Resilência",
              icon: faCheck,
             }
           ]}
         />
      
    </section>
  );
}

export default SkillsContainer;

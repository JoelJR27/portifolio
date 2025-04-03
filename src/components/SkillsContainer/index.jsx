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
  faCloud
} from "@fortawesome/free-solid-svg-icons";
function SkillsContainer() {
  return (
    <section>
      <h2 className="text-xl text-medium-blue font-bold mb-8">Skills</h2>
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
            skillName: "HTML",
            icon: faHtml5,
          },
          {
            skillName: "CSS",
            icon: faCss3Alt,
          },
          {
            skillName: "JavaScript",
            icon: faJs,
          },
          {
            skillName: "React",
            icon: faReact,
          },
        ]}
      />
    </section>
  );
}

export default SkillsContainer;

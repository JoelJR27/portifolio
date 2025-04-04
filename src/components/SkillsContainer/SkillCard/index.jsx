import Skill from "./Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ skillName, skills, skillIcon }) {
  return (
    <div className="px-2 py-6 border border-cyan-700 shadow-blue-shadow rounded-3xl mb-7 lg:w-6/10 lg:flex lg:flex-col lg:items-start lg:px-6 mx-auto">
      <div className="flex items-center gap-2 mb-6 justify-center">
        <span className="p-4 rounded-2xl bg-emerald-100 text-medium-blue">
          <FontAwesomeIcon icon={skillIcon} />
        </span>
        <h2 className="text-sky-950 font-medium lg:text-xl">{skillName}</h2>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-2 mb-3 lg:grid-cols-none lg:flex lg:flex-wrap">
          {skills.map((skill) => (
            <Skill key={skill.skillName} skill={skill.skillName} iconName={skill.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;

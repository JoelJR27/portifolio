import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skill({ skill, iconName }) {
  return (
    <li className="py-2 px-5 bg-cyan-600 flex justify-center items-center gap-2 rounded-3xl text-white">
      <FontAwesomeIcon icon={iconName} size="lg"/> <span className="text-sm font-medium">{skill}</span>
    </li>
  );
}

export default Skill;

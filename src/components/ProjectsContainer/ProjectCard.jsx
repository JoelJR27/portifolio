
import CardButton from "../CardButtons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
function ProjectCard({ title, imageUrl, description, projectLink, link }) {
  return (
    <li className="bg-white rounded-lg shadow-blue-shadow flex flex-col">
      <img
        className="w-full rounded-t-lg"
        src={imageUrl}
        alt="Project preview"
      />
      <div className="p-4">
        <h2 className="font-medium text-sky-950">{title}</h2>
        <p className="text-sm text-description-texts pt-1">{description}</p>
        <CardButton url={link} buttonText={"Ver projeto"} iconName={faUpRightFromSquare} />
        <CardButton url={projectLink} buttonText={"Ver no Github"} iconName={faGithub} />
      </div>
    </li>
  );
}

export default ProjectCard;
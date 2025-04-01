import ButtonsContainer from "./ButtonsContainer";
function ProjectCard({ title, imageUrl, description }) {
  return (
    <li className="bg-white rounded-lg shadow-blue-shadow flex flex-col">
      <img
        className="w-full rounded-t-lg"
        src={imageUrl}
        alt="Project preview"
      />
      <div className="p-4">
        <h2 className="font-medium text-medium-blue">{title}</h2>
        <p className="text-sm text-description-texts pt-1">{description}</p>
        <ButtonsContainer />
      </div>
    </li>
  );
}

export default ProjectCard;

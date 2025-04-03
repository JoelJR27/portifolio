import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CardButton({ url, buttonText, iconName }) {
  return (
    <a
      href={url}
      className="px-4 py-2 rounded-lg bg-medium-blue text-white mx-2 flex justify-center items-center gap-3 text-sm"
    >
      {buttonText} <FontAwesomeIcon icon={iconName}/>
    </a>
  );
}

export default CardButton;

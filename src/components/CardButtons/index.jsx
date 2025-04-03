import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CardButton({ url, buttonText, iconName }) {
  return (
    <a
      href={url}
      target="_blank"
      className="px-4 py-2 rounded-lg bg-medium-blue text-white mx-2 flex justify-center items-center gap-3 text-sm my-4 hover:opacity-80 hover:scale-105 transition-all ease-in-out delay-50"
    >
      {buttonText} <FontAwesomeIcon icon={iconName}/>
    </a>
  );
}

export default CardButton;

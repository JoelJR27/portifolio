import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CardButton({ url, buttonText, iconName }) {
  return (
    <a
      href={url}
      target="_blank"
      className="font-medium px-4 py-2 rounded-lg bg-medium-blue text-white flex justify-center items-center gap-3 text-sm my-4 hover:opacity-80 hover:scale-105 transition-all ease-in-out delay-50 sm:py-4 sm:text-base lg:max-w-3/4 mx-auto lg:mt-6" 
    >
      {buttonText} <FontAwesomeIcon icon={iconName}/>
    </a>
  );
}

export default CardButton;

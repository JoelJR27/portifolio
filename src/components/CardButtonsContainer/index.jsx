import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import CardButton from "./CardButtons";

function ButtonContainer() {
  return (
    <div className="my-5 grid gap-4">
      <CardButton buttonText={"Ver projeto"} iconName={faUpRightFromSquare} />
      <CardButton buttonText={"Ver no Github"} iconName={faGithub} />
    </div>
  );
}

export default ButtonContainer;

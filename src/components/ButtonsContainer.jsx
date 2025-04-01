import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function ButtonContainer() {
  return (
    <div className="my-5 grid gap-4">
      <Button buttonText={"Ver projeto"} iconName={faUpRightFromSquare}/>
      <Button buttonText={"Github"} iconName={faGithub} />
    </div>
  );
}

export default ButtonContainer;

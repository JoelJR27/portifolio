import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const emailPopup = async () => {
    const emailPopUpBox = document.getElementById("email-pop-up");
    try {
      await navigator.clipboard.writeText("joelviana250@gmail.com");

      emailPopUpBox.classList.remove("opacity-0", "invisible");
      emailPopUpBox.classList.add("opacity-100", "visible");

      setTimeout(() => {
        emailPopUpBox.classList.add("opacity-0", "invisible");
        emailPopUpBox.classList.remove("opacity-100", "visible");
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar email:", err);
    }
  };
  return (
    <footer
      className="border-t border-medium-blue p-8 font-inter mx-5 relative"
      id="contacts"
    >
      <ul className="flex flex-col gap-4 lg:flex-row lg:justify-around">
        <li>
          <h3
            className="font-bold text-xl text-medium-blue hover:opacity-90 hover:underline decoration-sky-300 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            JOEL JÚNIOR
          </h3>
          <p className="p-1">Desenvolvedor Front End</p>
          <ul className="text-neutral-600 flex gap-4 text-2xl">
            <li>
              <a
                href="https://github.com/JoelJR27/portifolio"
                target="_blank"
                className="hover:text-neutral-800"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joelviana27/"
                target="_blank"
                className="hover:text-neutral-800"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <button
                onClick={emailPopup}
                className="hover:text-neutral-800 cursor-pointer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </li>
          </ul>
          <p className="whitespace-pre-wrap">
            ©2025 - Desenvolvido por
            <span className="font-bold text-medium-blue">Joel Junior</span>.
          </p>
        </li>
        <li>
          <h3 className="font-bold text-xl text-medium-blue">Contatos</h3>
          <p>Gostou do meu trabalho? Entre em contato comigo!</p>

          <a
            href="mailto:joelviana250@gmail.com"
            className="flex items-center gap-2 text-medium-blue py-1"
          >
            <FontAwesomeIcon icon={faMessage} /> Enviar mensagem
          </a>
        </li>
      </ul>
      <div
        id="email-pop-up"
        className=" bg-medium-blue sticky mt-4 bottom-0 rounded-lg inline-block  transition-all ease-in-out lg:left-1/2 lg:-translate-x-1/2 invisible opacity-0"
      >
        <p className="text-white p-2 text-sm">Email copiado! 😊</p>
      </div>
    </footer>
  );
}

export default Footer;

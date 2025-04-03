import { faGithub ,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="border-t border-medium-blue p-8 font-inter mx-5" id="contacts">
      <ul className="flex flex-col gap-4">
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
              <a href="https://github.com/JoelJR27/portifolio" className="hover:text-neutral-800">
                <FontAwesomeIcon icon={faGithub}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joelviana27/" className="hover:text-neutral-800">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <button className="hover:text-neutral-800 cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope}/>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold text-xl text-medium-blue">Contatos</h3>
          <p>Gostou do meu trabalho? Entre em contato comigo!</p>
          <a href="mailto:joelviana250@gmail.com" className="flex items-center gap-2 text-medium-blue py-1"><FontAwesomeIcon icon={faMessage}/> Enviar mensagem</a>
        </li>
      </ul>
      <p className="whitespace-nowrap">©2025 - Desenvolvido por <span className="font-bold text-medium-blue">Joel Junior</span> .</p>
    </footer>
  );
}

export default Footer;

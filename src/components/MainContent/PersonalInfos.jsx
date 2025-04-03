import fotoJoel from "/images/foto-joel.png";
import curriculo from "/CurriculoJoel.pdf";
import DownloadButton from "../DownloadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function PersonalInfos() {
  return (
    <section className="flex flex-col items-center mt-4" id="joel">
      <img src={fotoJoel} alt="My photo." className="px-10" />
      <h1 className=" font-bold italic mt-5 text-medium-blue font-inria">
        Desenvolvedor Front End
      </h1>
      <p className="text-xs font-inter text-description-texts font-bold mb-4">
        Apaixonado por criar interfaces interativas, dinâmicas e responsivas.
        Estou em busca de uma oportunidade de estágio para não apenas aprimorar
        minhas habilidades técnicas, mas também para contribuir com soluções
        criativas, colaborar em projetos desafiadores e aprender com
        profissionais experientes.
      </p>
      <DownloadButton
        url={curriculo}
        buttonText="Baixar currículo"
        archiveName="Curriculo Joel.pdf"
        iconName={faDownload}
      />
    </section>
  );
}

export default PersonalInfos;

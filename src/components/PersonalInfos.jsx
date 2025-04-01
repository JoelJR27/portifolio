function PersonalInfos() {
  const joel = "../../public/foto-joel.png";

  return (
    <section className="py-12 p-8 flex flex-col items-center">
      <img src={joel} alt="My photo." className="px-10" />
      <h1 className=" font-bold italic mt-5 text-medium-blue font-inria">
        Desenvolvedor Front End
      </h1>
      <p className="text-xs font-inter text-description-texts font-bold mt-0">
        apaixonado por criar interfaces interativas e responsivas. Busco uma
        oportunidade de estágio para aprimorar minhas habilidades, contribuir
        com soluções criativas e aprender com profissionais experientes.
      </p>
    </section>
  );
}

export default PersonalInfos;

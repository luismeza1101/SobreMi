const AboutMe = () => {
  return (
    <section className="w-full bg-fondo-secundario text-center " id="about_me">
      <h2 className="subtitle mb-10 mt-20">SOBRE MI</h2>
      <div className="flex flex-col justify-center pb-[30px] gap-11 desktop:flex-row">
        <img src="" alt="" />
        <p className="w-[90%] mx-auto text-justify">
          Soy Luis, un entusiasta de la programación y actualmente estoy en el{" "}
          <span className="font-bold">
            3er ciclo de la carrera de Diseño y Desarrollo de Software en el
            instituto CERTUS.
          </span>{" "}
          Estoy especializado en el{" "}
          <span className="font-bold">
            desarrollo frontend, utilizando tecnologías como React, TypeScript y
            Tailwind CSS
          </span>{" "}
          para crear interfaces de usuario efectivas y atractivas.
          <br /> Además de mis habilidades técnicas, me considero una persona
          responsable, puntual y con una excelente capacidad para integrarme en
          equipos de trabajo. La colaboración y la comunicación efectiva son
          fundamentales para mí, y siempre busco contribuir positivamente en
          cada proyecto en el que participo.
          <br /> En mi tiempo libre, disfruto de diversas actividades que me
          permiten mantener un equilibrio saludable y enriquecedor. <span className="font-bold">Hago
          ejercicio regularmente, me gusta el trekking y explorar nuevos lugares
          cuando tengo la oportunidad de viajar. También encuentro inspiración y
          relajación escuchando música</span>, lo cual complementa mi enfoque hacia el
          desarrollo personal y profesional.
          <br /> Estoy comprometido con el aprendizaje continuo y con la mejora
          constante en todos los aspectos de mi vida. Mi objetivo es aplicar mi
          entusiasmo y habilidades en proyectos desafiantes y seguir creciendo
          como profesional en el campo de la programación.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

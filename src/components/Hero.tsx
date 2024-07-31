import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Desarrollador frontend";
  const typingSpeed = 100; // Velocidad de escritura en milisegundos

  useEffect(() => {
    let index = 0;
    let isTyping = true;

    const interval = setInterval(() => {
      if (isTyping) {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          isTyping = false;
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="w-full h-[100vh] flex flex-col-reverse justify-center items-center gap-4 md:flex-row md:justify-evenly"
      id="hero"
    >
      <div className="flex flex-col gap-4 desktop:w-[60%] desktop:pl-[100px]">
          <h1 className="text-4xl font-bold mt-8 desktop:text-6xl">
            Hola, Soy Luis Meza
          </h1>
          <span className="text-2xl font-light tracking-widest desktop:text-3xl">
            {text}
          </span>
          <span className="flex items-center gap-3 text-text-gray">
            <FaMapMarkerAlt /> Lima, Perú
          </span>
          <div className="flex gap-5 text-text-gray">
            <a href="https://github.com/luismeza1101" target="blanck">
              <FaGithub className="custom-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ednilson-luis-meza-corilla-851066296/"
              target="blanck"
            >
              <FaLinkedin className="custom-icon" />
            </a>
          </div>
      </div>
      <div className="desktop:w-[40%]">
      <img
        src="../../imgs/PictureMe.jpg"
        alt="Foto"
        className="w-[250px] h-[250px] border-8 border-gray-400 shadow-shadow-picture select-none object-cover xl:w-[450px] xl:h-[450px] "
      />
      </div>
    </main>
  );
};

export default Hero;

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="w-full py-6 flex flex-col md:flex-row md:justify-evenly desktop:justify-center items-center gap-4" id="hero">
      <img src="../../public/imgs/PictureMe.jpg " alt="Foto" className="w-1/2 max-w-[324px] rounded-full select-none desktop:w-[50%] "/>
      <div className="flex flex-col items-center text-text-gray font-semibold text-xl desktop:w-[50%]">
        <span>Hola, Soy </span>
        <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text text-4xl font-bold">Luis Meza</h1>
        <span>Desarrollador frontend</span>
        <div className="flex gap-4 mt-5">
          <a href="https://github.com/luismeza1101" target="blanck"><FaGithub className="custom-icon" /></a>
          <a href="https://www.linkedin.com/in/ednilson-luis-meza-corilla-851066296/" target="blanck"><FaLinkedin className="custom-icon"/></a>
        </div>
      </div>
    </main>
  );
};

export default Hero;

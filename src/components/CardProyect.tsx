import { FaGithub, FaLink } from "react-icons/fa";

interface Props {
  image: string;
}

const CardProyect: React.FC<Props> = ({ image }) => {
  return (
    <div className="w-[90%] mx-auto border-[3px] border-gray-700 rounded-md md:w-[80%] desktop:w-full xl:w-[80%]">
      <img src={image} alt="Imagen de referencia" />
      <div className="flex justify-center gap-6 my-4">
        <a href="https://github.com/luismeza1101" target="blanck" className="buttonLinks">
          <FaGithub className="text-2xl" />
          Repositorio
        </a>
        <a href="#" target="blanck" className="buttonLinks">
          <FaLink className="text-2xl"/>
          Review
        </a>
      </div>
    </div>
  );
};

export default CardProyect;

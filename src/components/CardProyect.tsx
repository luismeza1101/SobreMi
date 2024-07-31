import { FaGithub, FaLink } from "react-icons/fa";

interface Props {
  image: string;
  name: string
  description: string
  tecnologias: string[]
  repositorio: string
  url: string
}

const CardProyect: React.FC<Props> = ({ image, name, description, tecnologias, repositorio, url }) => {
  return (
    <div className="w-[85%] flex flex-col shadow-2xl mx-auto gap-7 sm:w-[70%] md:flex-row md:w-[90%]">
      <img
        src={`../../imgs/proyects/${image}`}
        alt="Imagen de referencia"
        className="md:w-[40%] py-[50px]"
      />
      <div className="flex flex-col justify-center items-start gap-6 my-4 py-4 px-5 md:w-[60%]">
        <h4>{name}</h4>
        <p className="mx-auto text-justify">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          {tecnologias.map((tec => (
            <span className="bg-gray-400 rounded-md px-2 font-bold text-text-gray">{tec}</span>
          )))}
        </div>
        <div className="flex justify-center gap-5">
          <a
            href={repositorio}
            target="blanck"
            className="button-links"
          >
            <FaGithub className="text-2xl" />
            Repositorio
          </a>
          <a href={url} target="blanck" className="button-links">
            <FaLink className="text-2xl" />
            Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyect;

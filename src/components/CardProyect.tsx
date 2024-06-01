import { FaGithub, FaLink  } from "react-icons/fa";
import '../styleSheets/CardProyect.css'

interface Props {
  image : string
}

const CardProyect: React.FC<Props> = ({image}) => {
  return (
    <div className="card">
      <img src={image} alt="Imagen de referencia" className="card__image"/>
      <div className="btns">
        <button className="btn card__github"><FaGithub/>Visite el repositorio</button>
        <button className="btn card__link"><FaLink/>Visite la pagina</button>
      </div>
    </div>
  )
}

export default CardProyect

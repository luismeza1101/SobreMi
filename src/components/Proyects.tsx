import CardProyect from "./CardProyect"
import { proyects_data } from "../data"

const Proyects = () => {
  return (
    <section className="bg-fondo-secundario text-center" id="proyects">
      <h2 className="subtitle mb-10 mt-20">PROYECTOS</h2>
      <div className="flex flex-col gap-14 my-7">
        {proyects_data.map((proyect) => (
          <CardProyect image={proyect.img} name={proyect.name} description={proyect.descripcion} tecnologias={proyect.tecnologias} repositorio={proyect.repositorio} url={proyect.url} key={proyect.name}/>
        ))}
      </div>
    </section>
  )
}

export default Proyects

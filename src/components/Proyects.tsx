import CardProyect from "./CardProyect"
import TCalculator from '../../public/imgs/TipCalculator.png'
import ListToDo from '../../public/imgs/List-To-Do.png'

const Proyects = () => {
  return (
    <section className="pt-20" id="proyects">
      <h2 className="subtitle">PROYECTOS</h2>
      <div className="my-7 grid gap-7 desktop:grid-cols-2">
        <CardProyect image={TCalculator}/>
        <CardProyect image={ListToDo}/>
      </div>
    </section>
  )
}

export default Proyects

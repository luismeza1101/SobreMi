import CardProyect from "./CardProyect"
import TCalculator from '../imgs/TipCalculator.png'
import ListToDo from '../imgs/List-To-Do.png'
import '../styleSheets/Proyects.css'

const Proyects = () => {
  return (
    <section className="proyects">
      <h2>Proyectos</h2>
      <div className="cardsContainer">
        <CardProyect image={TCalculator}/>
        <CardProyect image={ListToDo}/>
      </div>
    </section>
  )
}

export default Proyects

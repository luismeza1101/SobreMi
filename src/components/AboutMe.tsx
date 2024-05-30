import Foto from '../imgs/PictureMe.jpg'
import '../styleSheets/AboutMe.css'

const AboutMe = () => {
  return (
    <section className='aboutMe'>
      <h2>SOBRE MI</h2>
      <div className='data'>
        <img src={Foto} alt="Foto personal" className='data__picture'/>
        <p className='data__description'>Soy una persona que se caracteriza por su responsabilidad y orden en cada aspecto de la vida, pero también soy flexible al cambio y me adapto rápidamente a nuevas situaciones y desafíos. Mi capacidad para acoplarme con facilidad a equipos de trabajo se complementa con mi empatía hacia los demás, lo que me permite entender y responder a las necesidades y preocupaciones de mis compañeros. Busco siempre mantener una comunicación clara y efectiva, fomentando un ambiente de colaboración y confianza. Mi disposición para aprender y crecer continuamente me impulsa a buscar nuevas formas de mejorar y contribuir al éxito del equipo.</p>
      </div>
    </section>
  )
}

export default AboutMe

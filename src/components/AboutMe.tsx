import { FaUserGraduate } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className='w-full pt-20' id="about_me">
      <h2 className="subtitle">SOBRE MI</h2>
      <div className="w-3/4 my-7 mx-auto border-[3px] border-gray-400 rounded-xl py-6 px-4 flex flex-col items-center gap-2">
         <FaUserGraduate className="text-xl"/>
         <span className="font-semibold">Educación</span>
         <p className="text-center text-text-gray">Curso el 3er ciclo de la carrera de "Diseño y de Desarrollo de Software" en el instituto Certus</p>
      </div>
      <div className='w-[90%] mx-auto text-justify'>
        <p className='data__description'>Soy una persona responsable y organizada, adaptable a cambios y desafíos. Me integro bien en equipos gracias a mi empatía y comunicación clara, fomentando un ambiente colaborativo. Siempre busco aprender y mejorar continuamente. En mi tiempo libre, disfruto hacer ejercicio, escuchar música y hacer trekking.</p>
      </div>
    </section>
  )
}

export default AboutMe

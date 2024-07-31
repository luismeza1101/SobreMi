import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import './customerStyles.css'
import ContactMe from './components/ContactMe'
import { LanguajeProvider } from './context/Contexto'
import Skills from './components/Skills'


function App() {

  return (
    <LanguajeProvider>
      <Header/>
      <div className='w-full bg-fondo font-montserrat text-black'>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Proyects/>
        <ContactMe/>
        <p className='text-text-gray py-4 text-center'>Copywrigth &copy; Ednilson Luis Meza Corilla</p>
      </div>
    </LanguajeProvider>
  )
}

export default App

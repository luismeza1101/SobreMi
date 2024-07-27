import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import './customerStyles.css'
import ContactMe from './components/ContactMe'


function App() {

  return (
    <>
      <Header/>
      <div className='w-[90%] mx-auto '>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Proyects/>
        <ContactMe/>
        <p className='text-text-gray my-4 text-center'>Copywrigth &copy; Ednilson Luis Meza Corilla</p>
      </div>
    </>
  )
}

export default App

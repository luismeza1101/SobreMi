import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='container-fluid'>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Proyects/>
    </div>
  )
}

export default App

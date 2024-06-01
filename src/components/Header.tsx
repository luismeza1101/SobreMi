import logo from '../imgs/logo.png'
import '../styleSheets/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" className='header__logo'/>
        <nav className='nav '>
            <ul className='section'>
                <li className='section__item'><a className='section__link' href="">Sobre Mi</a></li>
                <li className='section__item'><a className='section__link' href="">Habilidades</a></li>
                <li className='section__item'><a className='section__link' href="">Proyectos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

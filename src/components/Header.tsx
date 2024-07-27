import { useState } from 'react';
import logo from '../../public/imgs/logo.png'
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";



const Header = () => {

  const [showNavBar,setShowNavBar] = useState(false)

  return (
    <header className='w-[100%] h-20 bg-white sticky top-0 flex justify-around items-center '>
        <img src={logo} alt="Logo" className='h-3/4'/>
        <div className='cursor-pointer md:hidden' onClick={() => setShowNavBar(!showNavBar)}>
          {showNavBar ? <IoIosCloseCircleOutline className='text-4xl'/> : <FaBars className='text-3xl'/>}
        </div>
        {showNavBar && (
          <nav className='absolute top-full bg-gray-100 w-full '>
            <ul className='flex flex-col items-center py-7 text-text-gray font-semibold'>
              <li className='itemNavBarMobile' onClick={() => setShowNavBar(false)}><a href="#about_me" className='block w-full py-2'>Sobre Mi</a></li>
              <li className='itemNavBarMobile' onClick={() => setShowNavBar(false)}><a href="#skills" className='block w-full py-2'>Habilidades</a></li>
              <li className='itemNavBarMobile' onClick={() => setShowNavBar(false)}><a href="#proyects" className='block w-full py-2'>Proyectos</a></li>
              <li className='itemNavBarMobile' onClick={() => setShowNavBar(false)}><a href="#contact_me" className='block w-full py-2'>Contactame</a></li>
            </ul>
          </nav>
        )}
        <nav className='hidden md:block'>
            <ul className='flex text-lg md:gap-6 md:text-xl font-semibold text-gray-900'>
                <li className='hover:text-text-gray'><a href="#about_me">Sobre Mi</a></li>
                <li className='hover:text-text-gray'><a href="#skills">Habilidades</a></li>
                <li className='hover:text-text-gray'><a href="#proyects">Proyectos</a></li>
                <li className='hover:text-text-gray'><a href="#contact_me">Contactame</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

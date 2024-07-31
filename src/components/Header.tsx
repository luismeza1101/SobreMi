import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Header = () => {

  const [showNavBar,setShowNavBar] = useState(false)

  return (
    <header className='w-full h-16 flex justify-between items-center px-[30px] bg-fondo fixed top-0 z-[99] font-montserrat shadow-md'>
        <h2 className='font-bold'>LM</h2>
        <div className='cursor-pointer md:hidden' onClick={() => setShowNavBar(true)}>
          <FaBars className='text-3xl'/>
        </div>
        {showNavBar && (
          <nav className='absolute bg-fondo h-[100vh] w-60 pl-5 pt-[20px] right-0 top-0'>
            <h2 className='font-bold'>LM</h2>
            <ul className='flex flex-col justify-start gap-5 py-7 text-text-gray'>
              <li onClick={() => setShowNavBar(false)}><a href="#about_me">Sobre Mi</a></li>
              <li onClick={() => setShowNavBar(false)}><a href="#skills">Habilidades</a></li>
              <li onClick={() => setShowNavBar(false)}><a href="#proyects">Proyectos</a></li>
              <li onClick={() => setShowNavBar(false)}><a href="#contact_me">Contactame</a></li>
            </ul>
            {/* <button className='bg-fondo-boton text-white w-[95%] rounded-lg py-1 cursor-pointer hover:bg-fondo-claro'>Descargar CV</button> */}
            <IoIosCloseCircleOutline className='text-3xl absolute top-4 right-7 cursor-pointer' onClick={() => setShowNavBar(false)}/>
          </nav>
        )}

        <nav className='hidden md:block'>
            <ul className='flex items-center text-lg  text-text-gray md:gap-6 md:text-xl'>
                <li className='hover:text-text-gray'><a href="#about_me">Sobre Mi</a></li>
                <li className='hover:text-text-gray'><a href="#skills">Habilidades</a></li>
                <li className='hover:text-text-gray'><a href="#proyects">Proyectos</a></li>
                <li className='hover:text-text-gray'><a href="#contact_me">Contactame</a></li>
                {/* <li><button className='bg-fondo-boton text-white rounded-lg p-1 hover:bg-fondo-claro'>Descargar CV</button></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header

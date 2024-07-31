import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt  } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center bg-fondo-claro" id="contact_me">
      <h2 className="subtitle mt-20">CONTACTAME</h2>
      <div className="my-7 w-[90%] text-center flex flex-col items-center gap-7 text-lg desktop:w-1/2">
        <p>Si estás buscando un desarrollador comprometido, con un fuerte enfoque en la responsabilidad y el trabajo en equipo, no dudes en contactarme. Estoy listo para aportar mi pasión y habilidades a tu próximo proyecto.</p>
        <div className="flex flex-col gap-7 ">
          <span className="flex items-center gap-5"><FaEnvelope/> ednilsonluis.11@gmail.com</span>
          <span className="flex items-center gap-5"><FaPhoneAlt/> +51 913 536 441</span>
          <div className="flex flex-col gap-3">
            <h4>Otras redes</h4>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/luismeza1101"
                target="black"
                className="custom-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="blanck"
                className="custom-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

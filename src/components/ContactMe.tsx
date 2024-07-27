import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center pt-20" id="contact_me">
      <h2 className="subtitle">CONTACTAME</h2>
      <div className="my-7 w-full flex flex-col items-center desktop:flex-row justify-center gap-4 text-lg xl:justify-around">
        <a href="#" target="blanck" className="buttonLinks items-center">
          <FaFileAlt />
          <span>ednilsonluis.11@gmail.com</span>
        </a>
        <a
          href="https://github.com/luismeza1101"
          target="black"
          className="buttonLinks items-center justify-center"
        >
          <FaGithub />
          <span>luismeza1101</span>
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="blanck"
          className="buttonLinks items-center"
        >
          <FaLinkedin />
          <span>Ednilson Luis Meza Corilla</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;

import CardSkill from "./CardSkill"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaTrello, FaFigma, FaGit, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
    <section id="skills" className="pt-20">
        <h2 className="subtitle">HABILIDADES</h2>
        <div className="flex flex-wrap gap-5 justify-center my-8">
          <CardSkill icon={<FaHtml5/>} name={'HTML'}/>
          <CardSkill icon={<FaCss3Alt/>} name={'CSS'}/>
          <CardSkill icon={<FaJsSquare/>} name={'JavaScript'}/>
          <CardSkill icon={<BiLogoTypescript/>} name={'TypeScript'}/>
          <CardSkill icon={<FaReact/>} name={'React'}/>
          <CardSkill icon={<RiTailwindCssFill />} name={'Tailwind'}/>
          <CardSkill icon={<FaTrello/>} name={'Trello'}/>
          <CardSkill icon={<FaFigma/>} name={'Figma'}/>
          <CardSkill icon={<FaGit/>} name={'GIT'}/>
          <CardSkill icon={<FaGithub/>} name={'Github'}/>
        </div>
    </section>
  )
}

export default Skills

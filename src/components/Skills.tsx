import CardSkill from "./CardSkill"
import '../styleSheets/Skills.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaTrello, FaFigma, FaGit, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="skills">
        <h2>Habilidades</h2>
        <div className="technologies">
          <CardSkill icon={<FaHtml5/>} name={'HTML'}/>
          <CardSkill icon={<FaCss3Alt/>} name={'CSS'}/>
          <CardSkill icon={<FaJsSquare/>} name={'JavaScript'}/>
          <CardSkill icon={<BiLogoTypescript/>} name={'TypeScript'}/>
          <CardSkill icon={<FaReact/>} name={'React'}/>
          <CardSkill icon={<FaTrello/>} name={'Trello'}/>
          <CardSkill icon={<FaFigma/>} name={'Figma'}/>
          <CardSkill icon={<FaGit/>} name={'GIT'}/>
          <CardSkill icon={<FaGithub/>} name={'Github'}/>
        </div>
    </section>
  )
}

export default Skills

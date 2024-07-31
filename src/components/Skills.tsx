import CardSkill from "./CardSkill";
import { cards_skills } from "../data";

const Skills = () => {
  return (
    <section className="flex flex-col gap-3 py-[15px] desktop:w-full" id="skills">
      <h2 className="subtitle mb-10 mt-20">Mis Habilidades</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-6">
        {cards_skills.map((card) => (
          <CardSkill name={card.name} key={card.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

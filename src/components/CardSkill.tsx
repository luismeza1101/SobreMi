
interface Props{
  name: string;
}

const CardSkill: React.FC<Props> = ({name}) => {


  return (
    <div className='cardSkill'>
          <img src={`../../public/imgs/tools/${name}.webp`} alt="Icono" className="w-[70px] h-[80px] desktop:w-full"/>
          <span className='font-semibold'>{name}</span>
    </div>
  )
}

export default CardSkill

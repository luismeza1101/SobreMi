import '../styleSheets/CardSkill.css'

interface Props{
  name: string
  icon: React.ReactNode
}

const CardSkill: React.FC<Props> = ({name, icon}) => {
  return (
    <div className={`cardSkill ${name.toLowerCase()}`}>
          {icon}
          <p className='cardSkill__name'>{name}</p>
    </div>
  )
}

export default CardSkill

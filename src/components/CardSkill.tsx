
interface Props{
  name: string
  icon: React.ReactNode
}

const CardSkill: React.FC<Props> = ({name, icon}) => {

  const addHoverCard = () => {
    switch (name.toLowerCase()) {
      case 'html':
        return 'hover:bg-html hover:text-white';
      case 'css':
        return 'hover:bg-css hover:text-white';
      case 'javascript':
        return 'hover:bg-javascript ';
      case 'typescript':
        return 'hover:bg-typescript hover:text-white';
      case 'react':
        return 'hover:bg-react hover:text-white';
      case 'trello':
        return 'hover:bg-trello hover:text-white';
      case 'figma':
        return 'hover:bg-black hover:text-white';
      case 'git':
        return 'hover:bg-git hover:text-white';
      case 'github':
        return 'hover:bg-black hover:text-white';
      case 'tailwind':
        return 'hover:bg-tailwind hover:text-white';
      default:
        break;
    }
  }

  return (
    <div className={`cardSkill ${addHoverCard()}`}>
          {icon}
          <span className='font-semibold'>{name}</span>
    </div>
  )
}

export default CardSkill

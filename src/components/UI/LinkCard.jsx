import { Link } from 'react-router-dom'

const LinkCard = ({ path, content }) => {
  return (
    <div
      className='
			h-[250px] w-[250px] rounded-xl border-dashed border-2 transition-all
		 	ease-in-out duration-300 hover:-translate-y-6 hover:bg-zinc-800'
    >
      <Link
        className='w-full h-full text-white flex place-content-center place-items-center text-lg'
        to={path}
      >
        {content}
      </Link>
    </div>
  )
}

export default LinkCard

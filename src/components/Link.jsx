

const Link = ({title, to}) => {


    return (
        <a className='text-sky-800 hover:text-indigo-600 mx-2' href={to}>{title}</a>
    )
}

export default Link
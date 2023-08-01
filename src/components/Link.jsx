

const Link = ({title, to}) => {


    return (
        <a className='header-link' href={to}>{title}</a>
    )
}

export default Link
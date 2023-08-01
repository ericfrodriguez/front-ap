import Link from './Link';

const Header = () => {

    const links = [
        {title: 'home', to: '/home'},
        {title: 'events', to: '/events'},
        {title: 'contact', to: '/contactus'},
        {title: 'about us', to: '/aboutus'},
    ]

    return (
        <header className='header-container'>
            <h2 className='header-title'>Amazing Events</h2>
            {
                links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
            }
        </header>
    )
}
export default Header
// function Header() => {
//     return (
//         <div>Header</div>
//     )
// }

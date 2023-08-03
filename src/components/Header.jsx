import { useState } from 'react';
import Link from './Link';

const Header = () => {

    let [show, setShow] = useState(false);

    const links = [
        {title: 'home', to: '/home'},
        {title: 'events', to: '/events'},
        {title: 'contact', to: '/contactus'},
        {title: 'about us', to: '/aboutus'},
    ]

    const handleShowMenu = () => {

        setShow(!show)
        // if(show) {
        //     setShow(false)
        // } else {
        //     setShow(true)
        // }
    }

    return (
        <header className='header-container'>
            <h2 className='header-title'>Amazing Events</h2>
            {
                show 
                ? links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
                : null
            }
            <button onClick={handleShowMenu}>Show menu</button>
        </header>
    )
}
export default Header
// function Header() => {
//     return (
//         <div>Header</div>
//     )
// }

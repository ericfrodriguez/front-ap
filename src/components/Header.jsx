import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {

    let [show, setShow] = useState(false);
    const user = useSelector(store => store.userReducer.user);
    console.log(user)
    const defaultPhoto = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';

    const links = [
        { title: 'home', to: '/' },
        { title: 'events', to: '/events' },
        { title: user ? null : 'sign in', to: '/signin' },
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
        <header className='flex justify-between items-center w-full h-auto text-center py-4 px-8'>
            <h2 className='my-4 text-3xl text-center'>Amazing Events</h2>
            <div>
                <button className='p-2 border-sky-800 border-[1px] rounded-md' onClick={handleShowMenu}>Show menu</button>
                {
                    show
                        ? links.map((link) => (<Link className='text-sky-800 hover:text-indigo-600 mx-2' key={link.title} to={link.to}>{link.title}</Link>))
                        : null
                }
            </div>
            <img className='w-[70px] h-[70px] rounded-full object-cover' src={user ? user.photo : defaultPhoto} alt="" />
        </header>
    )
}
export default Header
// function Header() => {
//     return (
//         <div>Header</div>
//     )
// }

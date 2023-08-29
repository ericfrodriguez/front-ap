import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter_events, get_events } from '../store/actions/eventActions';


export const Events = () => {

    const events = useSelector((store) => store.eventReducer.events)

    const dispatch = useDispatch();

    let inputSearch = useRef();

    useEffect(() => {
        dispatch(get_events())
    }, [dispatch]);


    const handleSearch = () => {

            dispatch(filter_events({
                name: inputSearch.current.value
            }))
    }

    return (
        <div className='flex flex-col items-center text-center'>
            <div className='flex'>
                <input name='input-search' ref={inputSearch} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='Evento' />
                <button onClick={handleSearch} className='ml-4 px-4 py-2 border-2 border-blue-900 rounded-md'>Buscar</button>
            </div>


            <h2 className='text-3xl my-4'>Events</h2>
            {
                events?.length > 0
                    ? events?.map((event) => {
                        return (
                            <Link key={event._id} to={`/events/${event._id}`}>
                                <Card title={event.name} description={event.description} date={event.date} />
                            </Link>
                        )
                    })
                    : <h2>No se encontraron eventos</h2>
            }
        </div>
    )
}

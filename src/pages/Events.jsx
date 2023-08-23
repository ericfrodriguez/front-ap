import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

export const Events = () => {
    const [events, setEvents] = useState();

    let inputSearch = useRef();

    useEffect(() => {
        axios.get('http://localhost:8000/api/events')
            .then(response => setEvents(response.data.events))
            .catch(err => console.log(err))
    }, []);


    const handleSearch = async () => {

        const name = inputSearch.current.value;
        console.log(inputSearch.current.name)

        try {
            // Otro codigo

            const response = await axios.get(`http://localhost:8000/api/events?name=${name}`)
            setEvents(response.data.events)

        } catch (error) {
            if(error.response.status === 404) {
                console.log('No se encontraron eventos')
                setEvents([])
            } else {
                console.log(error)
            }

        }
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

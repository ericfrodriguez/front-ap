import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react';

export const Events = () => {
    const [events, setEvents] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/events')
            .then(response => setEvents(response.data.events))
            .catch(err => console.log(err))
    }, []);

    const handleInputChange = async (event) => {
        console.log(event.target.value)

        try {
            const response = await axios.get(`http://localhost:8000/api/events?name=${event.target.value}`)
            setEvents(response.data.events)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col items-center text-center'>

            <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='Buscar' />

            <h2 className='text-3xl my-4'>Events</h2>
            {
                events?.map((event) => {
                    return (
                        <Link key={event._id} to={`/events/${event._id}`}>
                            <Card title={event.name} description={event.description} date={event.date}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

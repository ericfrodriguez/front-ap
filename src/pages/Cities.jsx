import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

export const Cities = () => {

    const cities = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]

    return (
        <div className='text-center'>
            <h2 className='text-3xl my-4'>Cities</h2>
            {
                cities.map((city) => {
                    return (
                        <Link key={city.id} to={`/cities/${city.id}`}>
                            <Card />
                        </Link>
                    )
                })
            }
        </div>
    )
}

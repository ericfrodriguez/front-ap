import { useParams } from "react-router-dom"


const CityDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className='text-3xl text-center'>Detalle de la ciudad: {id}</h2>
        </div>
    )
}

export default CityDetails
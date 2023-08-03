import { useState } from "react"
import Carousel from "../components/Carousel";

const Home = () => {
    let [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }
    
    return (
        <div>
            <h1>Home</h1>
            <p>Contador: {counter}</p>
            <button onClick={handleAdd}>Sumar</button>
            <button onClick={handleReset}>Reset</button>
        <Carousel />
        </div>
    )
}

export default Home
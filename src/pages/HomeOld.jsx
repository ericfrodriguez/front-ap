import { useState, useEffect } from "react"
import Carousel from "../components/Carousel";

const HomeOld = () => {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    const handleAdd2 = () => {
        setCounter2(counter2 + 1)
    }

    const handleReset2 = () => {
        setCounter2(0)
    }

    useEffect(
        () => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => console.log(data))
        },
        [counter]
    )

    
    return (
        <div>
            <h1>Home</h1>
            <h2>Primer contador</h2>
            <p>Contador: {counter}</p>
            <button onClick={handleAdd}>Sumar</button>
            <button onClick={handleReset}>Reset</button>
            <hr />
            <h2>Segundo contador</h2>
            <p>Contador: {counter2}</p>
            <button onClick={handleAdd2}>Sumar</button>
            <button onClick={handleReset2}>Reset</button>
        <Carousel />
        </div>
    )
}

export default HomeOld
import { useState } from "react"


const Carousel = () => {
    let [index, setIndex] = useState(0);

    const images = [
        {
            title: 'Messi1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
        },
        {
            title: 'Messi2',
            url: 'https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750'
        },
        {
            title: 'Messi3',
            url: 'data:image/jpeg;base64,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'
        },
    ]

    const handlePrev = () => {
        setIndex(index - 1)
    }

    const handleNext = () => {
        setIndex(index + 1)
    }

    return (
        <div>
            <h2>Carousel</h2>
            <img src={images[index].url} alt="" width={300}/>
            <p>{images[index].title}</p>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel
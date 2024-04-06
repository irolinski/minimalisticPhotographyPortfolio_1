import { useEffect, useState } from "react"


export default function StartPage () {

    const slides = ["https://res.cloudinary.com/dtjtqp7r1/image/upload/v1712421633/ola/strona%20glowna/crjfv0ensbbe4qjakyrf.jpg",'https://res.cloudinary.com/dtjtqp7r1/image/upload/s--ka_7n688--/f_auto,q_auto/v1/ola/strona%20glowna/wyrzj8udsnh7jwujmgnq','https://res.cloudinary.com/dtjtqp7r1/image/upload/s--kJukeTqO--/f_auto,q_auto/v1/ola/strona%20glowna/iy3ihz0vvqke6tw2ptwa' ]

    const [image, setImage] = useState(slides[0])
    const [slideOpacity, setSlideOpacity] = useState(1)
    const [imgNum, setImgNum] = useState(1)


    function slide () {
        setSlideOpacity(0);
        setTimeout(() => { setImage(slides[imgNum]) }, 500)
        setTimeout(() => { setSlideOpacity(1) }, 1000)
        
        imgNum < slides.length -1 ? setImgNum(imgNum + 1) : setImgNum(0)
    }



    return(
        <div className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4 mb-36 mt-24 sm:mt-0 sm:mb-8 md:mb-0 lg:mb-8 xl:pt-48" onLoad={ () => setTimeout(() => { slide()}, 6000) }>
            <div className="start-menu xl:pr-16">
                <div className="text-center">
                <span className="font-header hover:text-gray-600/75 text-3xl xs:text-4xl hover:cursor-none">Ola Kasprzykiewicz</span>
                </div>
                <div className="flex flex-row px-8 pt-4 xs:pt-8 justify-center xl:flex-col xl:text-center xl:pt-36">
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>Projekty</a>
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>O mnie</a>
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>Instagram</a>
                    {/* <button onClick={() => slide()}>dasd</button> */}
                </div>
            </div>
            <div className="slideshow pt-16 px-8 sm:pt-16 md:pt-16  xl:pt-0">
                {/* <img className="w-[800px]" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/s--ka_7n688--/f_auto,q_auto/v1/ola/strona%20glowna/wyrzj8udsnh7jwujmgnq"></img> */}
                {/* <img className="w-[800px]" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1712421633/ola/strona%20glowna/crjfv0ensbbe4qjakyrf.jpg"></img> */}
                <img className="w-[800px]"
                style={{opacity: slideOpacity, transition: `opacity 0.7s`}}
                src={image}></img>
            </div>
        </div>
    )
}
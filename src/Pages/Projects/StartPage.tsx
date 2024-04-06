

export default function StartPage () {

    return(
        <div className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4 mb-36 mt-8 sm:mt-0 sm:mb-8 md:mb-0 lg:mb-8 xl:pt-48 ">
            <div className="start-menu xl:pr-16">
                <div className="text-center">
                <span className="font-header hover:text-gray-600/75 text-3xl xs:text-4xl hover:cursor-none">Pola Brogosiewicz</span>
                </div>
                <div className="flex flex-row px-8 pt-4 xs:pt-8 justify-center xl:flex-col xl:text-center xl:pt-36">
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>Projekty</a>
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>O mnie</a>
                    <a className='hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair '>Instagram</a>
                </div>
            </div>
            <div className="slideshow pt-24 px-8 sm:pt-16 md:pt-16 lg:pl-8 lg:pr-0 xl:pt-0">
                    <img className="w-[800px]" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg"></img>
            </div>
        </div>
    )
}
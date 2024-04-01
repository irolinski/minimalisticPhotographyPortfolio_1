import { useState } from "react";

const slides = ['https://res-console.cloudinary.com/dtjtqp7r1/media_explorer_thumbnails/07b7e68d13de93322cfdc6bb5c71183d/detailed', 'https://res-console.cloudinary.com/dtjtqp7r1/media_explorer_thumbnails/578d9a50a59427825771f5d93cdf5dfa/detailed', 'https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg', 'https://64.media.tumblr.com/139152f8a52760bbc53b9be439194eb4/tumblr_pw4pecjMWA1sfa5q9o1_500.jpg', 'https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg']

export default function ViewProject () {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };


    return(
        <div className="flex my-[25%] sm:my-[10%] lg:my-[5%]" >
            <div className='carousel-wrapper px-2 mx-auto flex'>      
                <button onClick={previousSlide}>
                        &lt;
                </button>

                <div className="overflow-hidden relative max-w-full md:max-w-screen-md mx-8">

                    <div
                        className={`flex transition ease-out duration-40`}
                        style={{
                        transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {slides.map((s) => {
                        return <> <img src={s} className=" carousel-image block max-h-full max-w-full h-full relative mx-auto top-[50%] " /></>;
                        })}
                    </div>
                    <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                        {slides.map((s, i) => {
                        return (
                            <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${
                                i == current ? "bg-white" : "bg-gray-500"
                            }`}
                            >
                            </div>
                            );
                            })}
                    </div>
                </div>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    )
}




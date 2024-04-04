import { useState } from "react";
import Pic from "./Pic";

const slides = ["https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg", "https://64.media.tumblr.com/139152f8a52760bbc53b9be439194eb4/tumblr_pw4pecjMWA1sfa5q9o1_500.jpg", "https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg", "https://images.unsplash.com/photo-1542061433-6b0de4289291?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg"] 



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
      <>

          <div className="flex justify-center">
            <h1 className="font-header text-center text-xl xs:text-2xl sm:text-3xl my-[15%] md:my-[5%] lg:mt-[2%] lg:mb-[0]">
              Osaczanie pary w trawie (1996)
            </h1>
          

          </div>  
        <div className="flex mb-[25%] sm:mb-[10%] lg:my-[5%]" >
            <div className='carousel-wrapper px-2 mx-auto flex'>      
                <button onClick={previousSlide}> &lt; </button>
                <div className="overflow-hidden relative max-w-full md:max-w-screen-md mx-8">
                    <div className={`flex transition ease-out duration-40`} style={{ transform: `translateX(-${current * 100}%)`}}> 
                        {slides.map(a => {
                          return(
                             <Pic src={a} />    
                          )
                        })}
                    </div>
                </div>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
        </>
    )
}





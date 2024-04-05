import { useState } from "react";
import Pic from "./Pic";



type carouselTypes ={
  slides: string[];
}

export default function Carousel ({slides}: carouselTypes) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
    
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 100 

    const onTouchStart = (evt: any) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(evt.targetTouches[0].clientX);
    }

    const onTouchMove = (evt: any) => setTouchEnd(evt.targetTouches[0].clientX);

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      isLeftSwipe && nextSlide();
      isRightSwipe && previousSlide();
    }

    return(
      <>
        <div className="flex mb-[25%] sm:mb-[10%] lg:my-[5%]" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} >
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





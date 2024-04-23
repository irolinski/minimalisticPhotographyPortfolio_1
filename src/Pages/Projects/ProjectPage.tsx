import Carousel from "../../Components/Projects/Carousel"


type projectPageTypes = {
  name: string,
  slides: string[]
}

export default function Project({name, slides}: projectPageTypes) {
  return(
    <>
    <div className="flex justify-center">
      <h1 className="font-header text-center text-2xl xxs:text-2xl sm:text-3xl md:text-4xl mt-[15%] mb-[10%] xs:mb-[5%]  md:mb-[7%]  lg:mt-[5%] lg:mb-[-1%] hover:cursor-none">
        {name}
      </h1>
    </div>  
    <Carousel slides={slides}/>
    </>
  )
}
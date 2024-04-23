import { useState } from "react";
import { slides } from "../../../public/project_data/start_slides.ts";
export default function StartPage() {
  const [image, setImage] = useState(slides[0]);
  const [slideOpacity, setSlideOpacity] = useState(1);
  const [imgNum, setImgNum] = useState(1);

  function slide() {
    setSlideOpacity(0);
    setTimeout(() => {
      setImage(slides[imgNum]);
    }, 500);
    setTimeout(() => {
      setSlideOpacity(1);
    }, 600);

    imgNum < slides.length - 1 ? setImgNum(imgNum + 1) : setImgNum(0);
  }

  return (
    <div
      className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4 mb-36 mt-24 sm:mt-0 sm:mb-8 md:mb-0 lg:mb-8 lg:pt-[12.5vh] xl:flex-nowrap xl:py-[20vh]"
      onLoad={() =>
        setTimeout(() => {
          slide();
        }, 7000)
      }
    >
      <div className="start-menu xl:pr-16">
        <div className="text-center">
          <span className="font-header hover:text-gray-600/75 text-3xl xs:text-4xl hover:cursor-none">
            Ola Kasprzykiewicz
          </span>
        </div>
        <div className="flex flex-row px-8 pt-4 xs:pt-8 justify-center xl:flex-col xl:text-center xl:pt-36">
          <a
            href="/#/projekty"
            className="hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair"
          >
            Projekty
          </a>
          <a
            href="/#/o-mnie"
            className="hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair"
          >
            O mnie
          </a>
          <a
            href="https://www.instagram.com/nadoleola"
            target="_blank"
            className="hidden xl:block hover:text-gray font-light px-3 py-2 my-2 text-md sm:text-lg lg:text-xl font-header hover:cursor-crosshair"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="slideshow pt-16 px-8 sm:pt-16 md:pt-16 xl:pt-0">
        {/* load all slideshow images */}
        {slides.map((src, i) => {
          return <img className="hidden" src={src} key={i} />;
        })}

        {/* display only the one determined by slide function */}
        <div style={{ opacity: slideOpacity, transition: `opacity 0.7s` }}>
          <img className="w-[800px]" src={image} />
        </div>
      </div>
    </div>
  );
}

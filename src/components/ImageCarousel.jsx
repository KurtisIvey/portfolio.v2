import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import photos from "../assets/photos/photos";

const ImageCarousel = () => {
  const [slidesIndex, setSlidesIndex] = useState(0);

  function changeSlideForward() {
    if (slidesIndex === photos.length - 1) {
      setSlidesIndex(0);
    }
    setSlidesIndex((prev) => prev + 1);
  }
  function changeSlideBackward() {
    if (slidesIndex === 0) {
      setSlidesIndex(photos.length - 1);
    }
    setSlidesIndex((prev) => prev - 1);
  }

  /*
  w-full h-full max-w-full max-h-auto min-w-[150px] sm:max-w-[400px] sm:max-h-[780px]
    min-h-[220px] sm:min-w-[300px] sm:min-h-[300px]  sm:h-[500px]  m-auto relative px-2 
  */

  return (
    <div
      className="
      w-full h-full max-w-[85%] md:max-w-[650px]  min-w-[150px] 
      min-h-[210px] sm:min-w-[300px] sm:min-h-[300px]  sm:h-[500px]  m-auto relative px-14  overflow-hidden"
    >
      <img
        className="h-auto max-w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 object-cover"
        src={photos[slidesIndex].image}
        alt={photos[slidesIndex].alt}
      />
      <BsChevronCompactLeft
        size={28}
        onClick={changeSlideBackward}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded p-2 bg-white/30  hover:bg-white/50 text-white cursor-pointer"
      />

      <BsChevronCompactRight
        size={28}
        onClick={changeSlideForward}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded p-2 bg-white/30 hover:bg-white/50 text-white cursor-pointer "
      />
    </div>
  );
};

export default ImageCarousel;

/*

<img
        class="h-auto max-w-full aspect-[4/2.5]"
        src="https://kitsunebackfire.github.io/portfolio/static/media/bobaProject.5e7f354347c576b3308f.png"
        alt="fdsfs fsd"
      />
 */

// code before tyring new responsive technique
/*

<div
      className="
      w-full h-full max-w-full max-h-auto min-w-[150px] sm:max-w-[400px] sm:max-h-[780px]
      min-h-[220px] sm:min-w-[300px] sm:min-h-[300px]  sm:h-[500px]  m-auto relative px-14 "
    >
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[slidesIndex].url})` }}
      >
        <div>
          <BsChevronCompactLeft
            size={28}
            onClick={changeSlideBackward}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-16 text-2xl rounded p-2 bg-black/40  hover:bg-white/10 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            size={28}
            onClick={changeSlideForward}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-16 text-2xl rounded p-2 bg-black/40 hover:bg-white/10 text-white cursor-pointer "
          />
        </div>
      </div>
    </div>
*/

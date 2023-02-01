import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageCarousel = () => {
  const [slidesIndex, setSlidesIndex] = useState(0);

  function changeSlideForward() {
    if (slidesIndex === slides.length - 1) {
      setSlidesIndex(0);
    }
    setSlidesIndex((prev) => prev + 1);
  }
  function changeSlideBackward() {
    if (slidesIndex === 0) {
      setSlidesIndex(slides.length - 1);
    }
    setSlidesIndex((prev) => prev - 1);
  }

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1591242824895-b9598b8e9e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1674779146587-c7190e552f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1674776259177-aa1e233b5e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1674740556819-58ed1adfb5df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <div className="max-w-[190px] max-h-auto  sm:max-w-[400px] sm:max-h-[780px]  min-w-[150px] min-h-[220px] sm:min-w-[300px] sm:min-h-[300px] h-full sm:h-[500px] w-full m-auto relative px-2 ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[slidesIndex].url})` }}
      >
        <div>
          <BsChevronCompactLeft
            size={28}
            onClick={changeSlideBackward}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded p-2 bg-black/40  hover:bg-white/10 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            size={28}
            onClick={changeSlideForward}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded p-2 bg-black/40 hover:bg-white/10 text-white cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

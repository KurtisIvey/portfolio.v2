import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const IntroNav = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Kurtis",
      "Guy-who-loves-Jiu-Jitsu",
      "<ButReallyLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen  flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-40 w-40 md:w-50 md:h-50 xl:w-60 xl:h-60 mx-auto "
        src="https://kurtisivey.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
        alt="me"
      />
      <h2 className="text-sm  lg:text-3xl  uppercase text-gray-500 tracking-[15px]">
        Full Stack Developer
      </h2>
      <h1 className=" font-semibold scroll-px-10">
        <span className="mr-3 text-2xl sm:text-4xl lg:text-5xl ">{text}</span>
        <Cursor cursorColor="#F04E35" />
      </h1>
      <nav className=" grid grid-cols-2 gap-8 sm:grid-cols-4 text- ">
        <a href="#about" className=" navBtn">
          About
        </a>
        <a href="#skills" className=" navBtn">
          Skills
        </a>

        <a href="#projects" className=" navBtn">
          Projects
        </a>
        <a href="#contact" className=" navBtn">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default IntroNav;

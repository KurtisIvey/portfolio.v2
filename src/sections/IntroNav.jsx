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
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
        alt="me"
      />
      <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
        Fullstack Developer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
      <nav className="flex space-x-10 tracking-[2px] text-gray-600">
        <a href="#about">About link</a>
        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default IntroNav;

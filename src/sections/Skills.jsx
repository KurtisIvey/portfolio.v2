import React from "react";
import logos from "../assets/skillLogos";

const Skills = () => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {logos.map((logo) => (
          <img src={logo.url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Skills;

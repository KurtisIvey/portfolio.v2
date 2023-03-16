import React from "react";
import logos from "../assets/skillLogos/skillLogos";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="relative h-fit xl:h-[1350px]  flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto mt-[13%]">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-4xl ml-6">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-[60%] sm:mt-[45%] md:mt-[35%] lg:mt-[26%] xl:mt-[20%] xl:gap-12 ">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="hover:scale-105 transition-all duration-200 ease-in-out  flex flex-col justify-center items-center gap-3 mx-3"
          >
            <motion.div
              initial={{ x: -75, opacity: 0, scale: 0.5 }}
              transition={{ duration: logo.duration }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className=" flex flex-col justify-center items-center gap-3 mx-3 "
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="object-cover rounded-sm w-auto h-10 sm:h-14 opacity-40 hover:opacity-100 xl:h-15"
              />
              <p className="text-center md:text-xl lg:text-2xl  mt-5">{logo.name}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

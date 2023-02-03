import React from "react";
import logos from "../assets/skillLogos";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {logos.map((logo) => (
          <motion.div
            initial={{ x: -75, opacity: 0, scale: 0.5 }}
            transition={{ duration: logo.duration }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            key={logo.id}
            className=" flex flex-col justify-center items-center gap-3 mx-3"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="object-cover rounded-sm w-auto h-10 sm:h-14"
            />
            <p className="text-center">{logo.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

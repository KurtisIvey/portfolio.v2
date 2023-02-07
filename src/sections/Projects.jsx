import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-full  flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0 mt-[15%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full h-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mx-auto max-w-[90%] 
         sm:max-w-[92%]  lg:max-w-[942px]  mt-[30%] sm:mt-[25%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%]
       scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#223333]/60"
      >
        {projects.map((project, i) => (
          <div
            className="snap-center w-full flex-shrink-0 flex flex-col space-y-5 sm:space-y-10  items-center justify-center 
            p-10  h-full "
            key={i}
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              src="https://kitsunebackfire.github.io/portfolio/static/media/bobaProject.5e7f354347c576b3308f.png"
              alt=""
              className=""
            />
            <div className="space-y-2 sm:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg sm:text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Project {i + 1} of {projects.length}:
                </span>
                ups clone
              </h4>
              <p className="text-[.8rem] sm:text-base md:text-xl text-center md:text-left">
                Marshmallow cupcake dragée chocolate bar pastry pie sesame
                snaps. Jelly-o caramels oat cake sugar plum cake. Apple pie
                marzipan pie jelly beans cookie chocolate gummi bears wafer
                cake. Biscuit toffee cupcake soufflé
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

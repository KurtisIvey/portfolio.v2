import React from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects/projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-full  flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0 mt-[11%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ml-5">
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
            key={project.id}
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.name}
              className=""
            />
            <div className="space-y-2 sm:space-y-4 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg sm:text-4xl font-semibold text-center">
                Project {i + 1} of {projects.length}:{" "}
                <a
                  className=" text-gray-700 hover:text-[#F04E35] underline"
                  href={project.url}
                >
                  {project.name}
                </a>
              </h4>
              <p className="text-[.8rem] sm:text-base md:text-xl text-center md:text-left">
                {project.description}
              </p>

              <p className="text-xs text-center text-gray-700">
                Tech Stack: {project.techStack}
              </p>
              <div className="flex justify-center">
                <a
                  href={project.githubUrl}
                  className="text-xs  m-0 text-gray-600 hover:text-[#F04E35] underline"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

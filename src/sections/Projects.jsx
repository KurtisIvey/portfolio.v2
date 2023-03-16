import React from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects/projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-full  xl:h-[1550px] flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0 mt-[11%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-4xl  ml-5">
        Projects
      </h3>
      <div
        className="relative w-full h-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mx-auto max-w-[89%] 
         sm:max-w-[91%]  lg:max-w-[900px] xxl:max-w-[1300px] mt-[34%] sm:mt-[25%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%]
       scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#223333]/60 bg-[#e4e4e4bb]"
      >
        {projects.map((project, i) => (
          <div
            className="snap-center w-full max-w-[84%] flex-shrink-0 flex flex-col space-y-3   items-center justify-center 
            p-5  h-full opacity-60 hover:opacity-100 "
            key={project.id}
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.name}
              className="lg:max-w-[580px] lg:h-auto"
            />
            <div className="space-y-1  px-0 md:px-3 max-w-6xl">
              <h4 className="text-lg sm:text-2xl font-semibold text-center">
                Project {i + 1} of {projects.length}:{" "}
                <a
                  className=" text-gray-700 hover:text-[#F04E35] underline"
                  href={project.url}
                >
                  {project.name}
                </a>{' , '}<a
                  href={project.githubUrl}
                  className="text-lg sm:text-2xl    m-0 text-gray-600 hover:text-[#F04E35] underline"
                >
                  Repo
                </a>
              </h4>
              <p className=" text-xs sm:text-base md:text-lg  text-center md:text-left">
                {project.description}
              </p>

              <p className="text-xs sm:text-base md:text-lg   text-center text-gray-700">
                Tech Stack: {project.techStack}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative h-full  flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto  ">
      <h3 className="absolute sm:top-24 top-14  uppercase tracking-[20px] text-gray-500 text-2xl sm:ml-0 ml-6">
        About
      </h3>

      <div className=" grid grid-cols-1 lg:grid-cols-2 h-[71%]  mt-[30%] sm:mt-[25%]   gap-2 md:gap-4 ">
        <ImageCarousel />
        <div className="text-xs sm:text-base flex flex-col justify-center mr-1 mt-[5%]  ">
          <p>
            Hi, my name is Kurtis and I enjoy creating websites from scratch. My
            interest in coding originally started while I was an over the road
            truck driver/instructor for about 5 years. Unfortunately, trucking
            is not conducive to a good marital life. Because of this, I sought
            out an alternative career. Once my wife successfully immigrated from
            Jamaica to the USA, I needed a game plan for the future and chose
            coding.
          </p>
          <br />
          <p>
            Fast forward to the end of my trucking career, I decided to pursue
            an education and eventually went down the path of a self taught
            developer. I utilized resources such as Google, Youtube,
            Freecodecamp, Udemy, docs,The Odin Project, etc... to further my
            skills.
          </p>
          <br />

          <p className="text-[.6rem] sm:text-sm">
            <span className=" text-[#F04E35] ">Fun Fact:</span> I've drove the
            distance equivalent to having driven around the world 28 times, so
            I'm pretty much a professional at sitting on my butt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
/*<content>
        <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute sm:top-24 top-14  uppercase tracking-[20px] text-gray-500 text-2xl sm:ml-0 ml-6">
        About
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 h-[69%] sm:h-[65%] mt-[1%] sm:mt-[12%] gap-2 sm:gap-10">
        <ImageCarousel />
        <div className="text-xs sm:text-base flex flex-col justify-center mr-1">
          <p>
            Hi, my name is Kurtis and I enjoy creating websites from scratch. My
            interest in coding originally started while I was an over the road
            truck driver/instructor for about 5 years. Unfortunately, trucking
            is not conducive to a good marital life. Because of this, I sought
            out an alternative career. Once my wife successfully immigrated from
            Jamaica to the USA, I needed a game plan for the future and chose
            coding.
          </p>
          <br />
          <p>
            Fast forward to the end of my trucking career, I decided to pursue
            an education and eventually went down the path of a self taught
            developer. I utilized resources such as Google, Youtube,
            Freecodecamp, Udemy, docs,The Odin Project, etc... to further my
            skills.
          </p>
          <br />

          <p className="text-[.6rem] sm:text-sm">
            <span className=" text-[#F04E35] ">Fun Fact:</span> I've drove the
            distance equivalent to having driven around the world 28 times, so
            I'm pretty much a professional at sitting on my butt.
          </p>
        </div>
      </div>
    </motion.div>
      </content> */

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center sticky top-0 overflow-hidden">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.35 }}
        className=""
      >
        <SocialIcon
          url="https://www.linkedin.com/in/kurtisivey/"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out xl:scale-130"
        />
        <SocialIcon
          url="https://github.com/KurtisIvey"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out xl:scale-130"
        />
        <SocialIcon
          url="https://www.instagram.com/iv.coding.bjj/"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out xl:scale-130"
        />
      </motion.div>
      <motion.a
        href="#contact"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.35 }}
        className=" mr-5"
      >
        <div className=" hover:scale-[108%] transition-all duration-100 ease-in-out flex items-center xl:scale-130">
          <SocialIcon 
            className="cursor-pointer "
            network="email"
            fgColor="black"
            bgColor="transparent"
          />
          <p className=" uppercase hidden  sm:inline-flex text-base xl:text-xl text-black pr-3">
            Get in Touch
          </p>
        </div>
      </motion.a>
    </header>
  );
};

export default Header;

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
          url="https://www.linkedin.com/in/k-ivey/"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out"
        />
        <SocialIcon
          url="https://github.com/Kitsunebackfire"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out"
        />
        <SocialIcon
          url="https://www.instagram.com/iv.coding.bjj/"
          fgColor="black"
          bgColor="transparent"
          className=" hover:scale-110 transition-all duration-100 ease-in-out"
        />
      </motion.div>
      <motion.a
        href="mailto:kurtiveycodes@gmail.com"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.35 }}
        className=" mr-3"
      >
        <div className=" hover:scale-105 transition-all duration-100 ease-in-out">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="black"
            bgColor="transparent"
          />
          <p className=" uppercase hidden  sm:inline-flex text-sm text-black pr-3">
            Get in Touch
          </p>
        </div>
      </motion.a>
    </header>
  );
};

export default Header;

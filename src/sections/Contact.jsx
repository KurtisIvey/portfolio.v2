import React from "react";
import Mailer from "../components/Mailer";

const Contact = () => {
  return (
    <div
      className="relative h-full xl:h-[1450px] min-h-[500px] flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center 
    mx-auto mt-[10%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-4xl ml-3">
        Contact
      </h3>
      <Mailer />
    </div>
  );
};

export default Contact;

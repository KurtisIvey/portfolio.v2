import React from "react";
import Mailer from "../components/Mailer";

const Contact = () => {
  return (
    <div
      className="relative h-full min-h-[500px] flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center 
    mx-auto mt-[15%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <Mailer />
    </div>
  );
};

export default Contact;

/*
<section className="contact__body">
        <h1>
          To <span className="underline">Reach Out</span> to Me
        </h1>
        <div className="contact__linkbody">
          You can email me at{" "}
          <a
            className="underline contact__link"
            href="mailto:kurtiveycodes@gmail.com"
          >
            kurtiveycodes@gmail.com
          </a>
        </div>
        <div>or</div>
        <div>
          Message me on{" "}
          <a
            className="underline contact__link"
            href="https://twitter.com/IveyCodingBJJ"
          >
            twitter
          </a>
          ,{" "}
          <a
            className="underline contact__link"
            href="https://www.linkedin.com/in/k-ivey/"
          >
            linkedIn
          </a>
          , or{" "}
          <a
            className="underline contact__link"
            href="https://www.instagram.com/iv.coding.bjj/?hl=en"
          >
            instagram
          </a>
        </div>
      </section>
*/

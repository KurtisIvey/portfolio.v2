import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const to_name = "Kurtis";
  const [params, setParams] = useState({
    to_name: to_name,
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
    console.log(params);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send("service_dh4g8gf", "template_loa37xn", params, "IZvdiiarOHlVtgcBd")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <div className="">
      <form
        action=""
        onSubmit={(e) => sendEmail(e)}
        className="flex flex-col gap-2"
      >
        <label htmlFor="name">name</label>
        <input type="text" name="from_name" onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input type="email" name="user_email" onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="4"
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-200 rounded my-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Mailer;

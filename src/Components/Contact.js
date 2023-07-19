import React from "react";
import "../Styles/Contact.css";
import insta from "../Icons/insta.png";

import thread from "../Icons/thread.png";
import linkedin from "../Icons/linkedin.png";
const Contact = () => {
  return (
    <div className="contact" id="/contact">
      <h1>Contact</h1>

      <form
        action="https://formsubmit.co/86be1e0313220a8be2cb3df2e3c37559"
        method="POST"
      >
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Leave a message"
        ></textarea>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="socials">
        <a
          href="https://instagram.com/raj.burad_0?igshid=NGExMmI2YTkyZg=="
          target="_blank"
        >
          <img src={insta} alt="" width="40px" height="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-burad-101b65237"
          target="_blank"
        >
          <img src={linkedin} alt="" width="40px" height="40px" />
        </a>
        <a href="https://www.threads.net/@raj.burad_0" target="_blank">
          <img src={thread} alt="" width="40px" height="40px" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

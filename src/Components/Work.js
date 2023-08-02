import React from "react";
import "../Styles/Work.css";
import { Link } from "react-router-dom";
import work1 from "../Icons/work1.png";
import work2 from "../Icons/work2.png";
const Work = () => {
  function Addwork(linkHead, head, details, imgSrc) {
    return (
      <Link to={linkHead} className="workLink" target="_blank">
        <div className="worklinkBefore">
          <h2>{head}</h2>
          <p>{details}</p>
        </div>
        <img src={imgSrc} alt="" />
      </Link>
    );
  }
  return (
    <div className="workSection" id="/work">
      <h1>Work</h1>
      <div className="workTabs">
        {Addwork(
          "https://www.figma.com/file/Pzr4L64LZqBKaK7MaWTfd4/ZOO-app?type=design&node-id=0%3A1&mode=design&t=Eaxvp1vBXVPBznE3-1",
          "UI UX Project",
          "This project is based on real time zoo tour guide system and making it easy for tourist to explore the area.",
          work1
        )}
        {Addwork(
          "https://ecom-chi-two.vercel.app/",
          "React Project",
          "This is prototype of a real time ecommerce application.",
          work2
        )}
      </div>
    </div>
  );
};

export default Work;

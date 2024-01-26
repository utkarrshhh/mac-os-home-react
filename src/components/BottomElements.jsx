import React from "react";
import "./BottomElements.css";
import {
  applemusic,
  arcade,
  calendar,
  discord,
  github,
  finder,
  netflix,
  weather,
  twitter,
  photos,
} from "./webp/index.js";

const BottomElements = () => {
  return (
    <div className="bottom-ele-container">
      <div className="item-container">
        <div className="  hover-prop">
          <img src={applemusic} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={finder} alt="" className="bottom-items" />
        </div>
        <div className="division"></div>
        <div className=" hover-prop">
          <img src={github} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={netflix} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={calendar} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={weather} alt="" className="bottom-items" />
        </div>
        <div className="division"></div>
        <div className=" hover-prop">
          <img src={twitter} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={photos} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={discord} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <img src={arcade} alt="" className="bottom-items" />
        </div>
      </div>
    </div>
  );
};

export default BottomElements;

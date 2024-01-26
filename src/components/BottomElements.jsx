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
        <div className=" hover-prop">
          <div className="tool-tip">Music</div>
          <img src={applemusic} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Finder</div>
          <img src={finder} alt="" className="bottom-items" />
        </div>
        <div className="division"></div>
        <div className=" hover-prop">
          <div className="tool-tip">Github</div>
          <img src={github} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Netflix</div>
          <img src={netflix} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Calendar</div>
          <img src={calendar} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Weather</div>
          <img src={weather} alt="" className="bottom-items" />
        </div>
        <div className="division"></div>
        <div className=" hover-prop">
          <div className="tool-tip">Twitter</div>
          <img src={twitter} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Photos</div>
          <img src={photos} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Discord</div>
          <img src={discord} alt="" className="bottom-items" />
        </div>
        <div className=" hover-prop">
          <div className="tool-tip">Arcade</div>
          <img src={arcade} alt="" className="bottom-items" />
        </div>
      </div>
    </div>
  );
};

export default BottomElements;

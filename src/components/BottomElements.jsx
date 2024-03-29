import React, { useState } from "react";
import "./BottomElements.css";
// import BackgroundImage from "./BackgroundImage.jsx";
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
import BackgroundImage from "./BackgroundImage.jsx";

const BottomElements = ({
  position,
  zIndex,
  isMinimize,
  folderImage,
  name,
  setIsMinimize,
}) => {
  const handleNewFolder = (folderImage, name) => {
    return (
      <>
        <div className="division"></div>
        <div
          className=" hover-prop"
          style={{ alignItems: "center" }}
          onClick={() => setIsMinimize(false)}
        >
          <div className="tool-tip">{name}</div>
          <img src={folderImage} alt="" className="bottom-items" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <hr style={{ width: "40%" }} />
          </div>
        </div>
        {/* {setIsMinimize(false)} */}
      </>
    );
  };

  console.log(isMinimize);
  const [isPhoto, setisPhoto] = useState(false);
  const handlePhoto = () => {
    setisPhoto(!isPhoto);
  };

  return (
    <>
      {isPhoto ? <BackgroundImage /> : null}
      <div
        className="bottom-ele-container"
        style={{ zIndex: zIndex, position: position }}
      >
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
            <img
              src={photos}
              alt=""
              className="bottom-items"
              onClick={handlePhoto}
            />
            {isPhoto ? (
              <hr style={{ width: "40%", margin: "auto" }}></hr>
            ) : null}
          </div>
          <div className=" hover-prop">
            <div className="tool-tip">Discord</div>
            <img src={discord} alt="" className="bottom-items" />
          </div>
          <div className=" hover-prop">
            <div className="tool-tip">Arcade</div>
            <img src={arcade} alt="" className="bottom-items" />
          </div>
          {console.log(isMinimize)}
          {isMinimize && handleNewFolder(folderImage, name)}
        </div>
      </div>
    </>
  );
};

BottomElements.defaultProps = {
  isMinimize: false,
  folderImage: null,
  name: null,
  setIsMinimize: null,
};

export default BottomElements;

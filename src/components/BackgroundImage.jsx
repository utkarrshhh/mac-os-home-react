import React, { useState } from "react";
import "./FolderStructure.css";
import "./wallpaper.css";
const BackgroundImage = () => {
  const handleBackground = (e) => {
    document.body.style.background = `url(${e.target.src}  )`;
  };
  const backgroundData = [
    "bigsur",
    "bigsurgraphic",
    "catalina",
    "catalina_day",
    "solargrad",
    "thedesert",
    "ventura",
  ];
  return (
    <div className="transition-container">
      <div
        className="folder-container2"
        id="folderContainer"
        style={{ top: "10%", left: "25%" }}
      >
        <div className="folder-navbar">
          <div className="left-nav-items">
            <div className="item-2 icons-used" id="closeButton">
              <img
                src="/svg/close.svg"
                alt="logo"
                className="svg-close close"
              />
            </div>
            <div className="item-1 icons-used" id="minimizeButton">
              <img
                src="/svg/minimize.svg"
                alt="nothing"
                className="svg-close minimize"
              />
            </div>
            <div className="item-3 icons-used" id="stretchButton">
              <img
                src="/svg/stretch.svg"
                alt="logo"
                className="svg-close stretch"
              />
            </div>
          </div>
          <div className="right-nav-items">
            <img
              src="/resources/fullscreen.png"
              alt=""
              style={{ height: "10px", width: "10px" }}
            />
          </div>
        </div>
        <div className="folder-contents">
          <div className="wallpaper-folder">
            {backgroundData.map((imageName, index) => (
              <div
                key={index}
                className="wallpaper-preview"
                onClick={(e) => handleBackground(e)}
              >
                <img
                  src={`/resources/wallpapers/${imageName}.jpg`}
                  alt={`Wallpaper ${index + 1}`}
                  className="wallpaper-image"
                />
                <p>{`${imageName.toUpperCase()}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;

import React from "react";
import "./FolderStructure.css";
const FolderStructure = () => {
  return (
    <div className="folder-container2 " style={{ top: "10%", left: "25%" }}>
      <div className="folder-navbar">
        <div className="left-nav-items">
          <div className="item-2 icons-used">
            <img
              src="../public/svg/close.svg"
              alt="logo"
              className="svg-close close"
            />
          </div>
          <div className="item-1 icons-used">
            <img
              src="../public/svg/minimize.svg"
              alt="nothing"
              className="svg-close minimize"
            />
          </div>

          <div className="item-3 icons-used">
            <img
              src="../public/svg/stretch.svg"
              alt="logo"
              className="svg-close stretch"
            />
          </div>
        </div>
        <div className="right-nav-items">
          <img
            src="../public/resources/fullscreen.png"
            alt=""
            style={{ height: "10px", width: "10px" }}
          />
        </div>
      </div>
      <div className="folder-contents">asdgas</div>
    </div>
  );
};

export default FolderStructure;

import React, { useRef, useState, useEffect } from "react";
import "./FolderStructure.css";
import BottomElements from "./BottomElements";

const FolderStructure = ({ isOpen, setIsOpen }) => {
  const folderRef = useRef(null);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleClickOutside = (e) => {
    if (folderRef.current && !folderRef.current.contains(e.target)) {
      setIsMinimize(false);
      setIsOpen(!isOpen);
    }
  };

  const handleMinimize = () => {
    console.log("Minimize clicked");
    setIsMinimize(!isMinimize);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [folderRef, isOpen, setIsOpen, isMinimize]);

  console.log(isOpen, isMinimize, isClose);

  return (
    <div style={{ transition: "0.3s ease-in" }}>
      {isOpen && !isMinimize && (
        <div
          className="folder-container2"
          style={{ top: "10%", left: "25%" }}
          ref={folderRef}
        >
          <div className="folder-navbar">
            <div className="left-nav-items">
              <div
                className="item-2 icons-used"
                onClick={() => setIsClose(true)}
              >
                <img
                  src="../public/svg/close.svg"
                  alt="logo"
                  className="svg-close close"
                />
              </div>
              <div className="item-1 icons-used" onClick={handleMinimize}>
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
      )}
      {console.log(isMinimize)}
      <div>
        {isMinimize && (
          <BottomElements
            position={"absolute"}
            zIndex={5}
            isMinimize={isMinimize}
            folderImage="../public/resources/mac-folder.png"
            name="Projects"
            //   setIsMinimize={setIsMinimize}
          />
        )}
      </div>
    </div>
  );
};

export default FolderStructure;

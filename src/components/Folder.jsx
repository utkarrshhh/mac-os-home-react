import React, { useState } from "react";
import "./folder.css";
import FolderStructure from "./FolderStructure";
import BottomElements from "./BottomElements";

const Folder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="folder-container"
        id="1"
        onDoubleClick={handleDoubleClick}
      >
        <img
          src="../public/resources/mac-folder.png"
          className="folder-icon"
          alt="folder"
        />
        <h5 style={{ color: "#c0c0c0" }}>Projects</h5>
      </div>
      {console.log(isOpen)}
      {isOpen && <FolderStructure isOpen={isOpen} setIsOpen={setIsOpen} />}

      <BottomElements position={"absolute"} zIndex={"3"} />
    </>
  );
};

export default Folder;

import React, { useState } from "react";
import "./folder.css";
import FolderStructure from "./FolderStructure";

const Folder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="folder-container" id="1" onClick={(e) => handleOpen()}>
        <img
          src="../public/resources/mac-folder.png"
          className="folder-icon"
          alt="folder"
        />

        <h5 style={{ color: "#c0c0c0" }}>Projects</h5>
      </div>
      {isOpen && <FolderStructure />}
    </>
  );
};

export default Folder;

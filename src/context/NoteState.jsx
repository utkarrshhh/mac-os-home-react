import React, { useState } from "react";
import NoteContext from "./noteContext.jsx";

let i = 2;
let x = 50;
let y = 50;
const NoteState = (props) => {
  const [folders, setFolders] = useState([]);

  const handleNewFolder = () => {
    // Add a new folder to the state
    setFolders((prevFolders) => [
      ...prevFolders,
      { id: i++, position: [(x += 60), 50], name: "New Folder" },
    ]);
  };

  return (
    <NoteContext.Provider value={{ handleNewFolder }}>
      {/* Render existing folders */}
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="folder-container hello"
          style={{
            position: "absolute",
            top: folder.position[0] + 60 + "px",
            left: folder.position[1] + "px",
            width: "fit-content",
          }}
        >
          <img
            src="../public/resources/mac-folder.png"
            className="folder-icon"
            alt="folder"
          />
          <h5>{folder.name}</h5>
        </div>
      ))}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

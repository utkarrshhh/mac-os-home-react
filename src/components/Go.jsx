import React from "react";

import "./File.css";
const Go = () => {
  return (
    <div className="nav-drop-down">
      <div className="nav-drop-down-items">
        <div className="selectable">back</div>
        <div className="selectable">Forward</div>
        <div className="selectable">Enclosing Folder</div>
        <div className="divider"></div>
        <div className="selectable">Recents</div>
        <div className="selectable">Documents</div>
        <div className="selectable">Desktop</div>
        <div className="selectable">Downloads</div>
        <div className="selectable">Home</div>
        <div className="selectable">Airdrop</div>
      </div>
    </div>
  );
};

export default Go;

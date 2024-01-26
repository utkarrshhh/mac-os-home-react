import React from "react";

const EditDropDown = () => {
  const menuItems = [
    "Undo",
    "Redo",
    "Cut",
    "Copy",
    "Paste",
    "Select All",
    "Show Clipboard",
    "Start Dictation",
    "Emoji & Symbols",
  ];

  return (
    <div className="dropdown-menu dropdown-edit">
      {menuItems.map((item, index) => (
        <div key={index} className="dropdown-item dropdown-edit-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default EditDropDown;

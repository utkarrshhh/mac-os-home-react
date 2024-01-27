import React, { useRef, useState, useEffect } from "react";
import "./settings.css";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const Settings = ({ x, y }) => {
  const settingsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useOutsideClick(settingsRef, () => {
    setSelectedItem(null);
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      className={`settings-drop-down ${
        selectedItem === "Settings" ? "selected-one" : ""
      }`}
      style={{ top: y, left: x }}
      ref={settingsRef}
      onClick={() => handleItemClick("Settings")}
    >
      <div>sdrfhs</div>
      <div>sdrfhs</div>
      <div>sdrfhs</div>
      <div>sdrfhs</div>
      <div>sdrfhs</div>
      <div>sdfgassdrfhs</div>
    </div>
  );
};

export default Settings;

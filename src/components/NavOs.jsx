import React, { useRef, useState, useEffect } from "react";
import Settings from "./Settings";
import { File, Go, View, Windows, Edit, Help } from "./index";
const NavOs = () => {
  let date = new Date();
  console.log(date);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime = `${hours12}:${minutes} ${period}`;
  const [isActive, setisActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        console.log(navbarRef.current);
        setSelectedItem(null);
        setSelectedName(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (Item) => {
    setSelectedItem(Item);
    setSelectedName(Item);
  };

  let x = null;
  let y = null;

  return (
    <div className="navbar">
      <div className="left" ref={navbarRef}>
        <div className="left-items logo-container ">
          <img
            src="../public/resources/apple.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div
          className={`left-items ${
            selectedItem === "Finder" ? "selected-one" : ""
          }}`}
          onClick={(e) => {
            handleItemClick(Finder);
          }}
        >
          Finder
          {selectedName == "Finder" && <Finder />}
        </div>
        <div>
          <div
            className={`left-items ${
              selectedItem === "File" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("File");
            }}
          >
            File
          </div>
          {selectedName == "File" && <File />}
        </div>
        <div>
          <div
            className={`left-items ${
              selectedItem === "Edit" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("Edit");
            }}
          >
            Edit
          </div>
          {selectedName == "Edit" && <Edit />}
        </div>
        <div>
          <div
            className={`left-items ${
              selectedItem === "View" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("View");
            }}
          >
            View
          </div>
          {selectedName == "View" && <View />}
        </div>
        <div>
          <div
            className={`left-items ${
              selectedItem === "Go" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("Go");
            }}
          >
            Go
          </div>
          {selectedName == "Go" && <Go />}
        </div>

        <div>
          <div
            className={`left-items ${
              selectedItem === "Windows" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("Windows");
            }}
          >
            Windows
          </div>
          {selectedName == "Windows" && <Windows />}
        </div>
        <div>
          <div
            className={`left-items ${
              selectedItem === "Help" ? "selected-one" : ""
            }`}
            onClick={(e) => {
              handleItemClick("Help");
            }}
          >
            Help
          </div>
          {selectedName == "Help" && <Help />}
        </div>
      </div>
      <div className="right">
        <div
          className="right-items tools"
          onClick={(e) => {
            // ele = middle(e.clientX, e.clientY);
            x = e.clientX;
            y = e.clientY;
            setisActive(!isActive);
          }}
        >
          <img
            src="../public/resources/tools.png"
            className="tools"
            alt="tools"
          />
          {isActive && <Settings x={x} y={y} />}
        </div>
        <div className="right-items">{date.toDateString()}</div>
        <div className="right-items " style={{ marginRight: "10px" }}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default NavOs;

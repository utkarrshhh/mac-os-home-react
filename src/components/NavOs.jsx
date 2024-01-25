import React from "react";

const NavOs = () => {
  let date = new Date();
  console.log(date);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime = `${hours12}:${minutes} ${period}`;

  return (
    <div className="navbar">
      <div className="left">
        <div className="left-items logo-container ">
          <img
            src="../public/resources/apple.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="left-items ">Finder</div>
        <div className="left-items">File</div>
        <div className="left-items">Edit</div>
        <div className="left-items">View</div>
        <div className="left-items">Go</div>
        <div className="left-items">Windows</div>
        <div className="left-items">Help</div>
      </div>
      <div className="right">
        <div className="right-items tools">
          <img
            src="../public/resources/tools.png"
            className="tools"
            alt="tools"
          />
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

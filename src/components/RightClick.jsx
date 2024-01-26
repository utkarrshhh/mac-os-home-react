import React from "react";

const RightClick = () => {
  let box = "";
  const rightClickDisplay = (e) => {
    e.preventDefault();
    box = document.getElementById("right-click");
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
    box.style.display = "block";
  };

  // let body = document.body;
  document.addEventListener("contextmenu", (e) => rightClickDisplay(e));
  document.addEventListener("click", () => {
    box.style.display == "block" ? (box.style.display = "none") : "";
  });
  return (
    <div className="right-click right-click-container " id="right-click">
      <div className="right-click-items">New Folder</div>
      <div className=" context-divider"></div>
      <div className="right-click-items">Get Info</div>
      <div className="right-click-items">Change Desktop background</div>
      <div className=" context-divider"></div>
      <div className="right-click-items">Use Stack</div>
      <div className="right-click-items">Sort By</div>
      <div className="right-click-items">Clean up</div>
      <div className="right-click-items">Clean Up By</div>
      <div className="right-click-items">Show View Option</div>
    </div>
  );
};

export default RightClick;

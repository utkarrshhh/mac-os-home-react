import React from "react";

const RightClick = () => {
  const rightClickDisplay = (e) => {
    e.preventDefault();
    let box = document.getElementById("right-click");
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
    box.style.display = "block";
  };

  let body = document.body;
  body.addEventListener("contextmenu", (e) => rightClickDisplay(e));

  return (
    <div className="right-click" id="right-click">
      <div className="right-click-items">items</div>
      <div className="right-click-items">items</div>
      <div className="right-click-items">items</div>
      <div className="right-click-items">items</div>
      <div className="right-click-items">items</div>
      <div className="right-click-items">items</div>
    </div>
  );
};

export default RightClick;

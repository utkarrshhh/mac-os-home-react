import React from "react";
import NavOs from "./components/NavOs.jsx";
import RightClick from "./components/RightClick.jsx";
import BottomElements from "./components/BottomElements.jsx";
import Folder from "./components/Folder.jsx";
const App = () => {
  return (
    <div className="container">
      <RightClick />
      <NavOs />
      <Folder />
      <BottomElements />
    </div>
  );
};

export default App;

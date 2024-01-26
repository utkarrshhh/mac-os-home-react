import React from "react";
import NavOs from "./components/NavOs.jsx";
import RightClick from "./components/RightClick.jsx";
import BottomElements from "./components/BottomElements.jsx";
import Folder from "./components/Folder.jsx";
import NoteState from "./context/NoteState.jsx";
const App = () => {
  return (
    <div className="container">
      <NoteState>
        <RightClick />
        <NavOs />
        <Folder />
        <BottomElements />
      </NoteState>
    </div>
  );
};

export default App;

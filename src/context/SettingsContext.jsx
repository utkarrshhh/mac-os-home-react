import settingContext from "./settingsContextReal";
import "./settings.css";

const SettingsContext = (props) => {
  const settingDropDown = (x, y) => {
    return (
      <div
        className="settings-drop-down"
        style={{
          visibility: "hidden" ? "visible" : "hidden",

          position: "relative",
          top: y,
          border: "2px solid red",
          left: x,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="setting-drop-down-items">asrgd</div>
        <div className="setting-drop-down-items">asrgd</div>
        <div className="setting-drop-down-items">asrgd</div>
        <div className="setting-drop-down-items">asrgd</div>
        <div className="setting-drop-down-items">asrgd</div>
        <div className="setting-drop-down-items">asrgd</div>
      </div>
    );
  };

  return (
    <settingContext.Provider value={{ settingDropDown }}>
      {props.children}
    </settingContext.Provider>
  );
};

export default SettingsContext;

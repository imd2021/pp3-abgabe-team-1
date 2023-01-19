import Emergency from "./components/Emergency";
import GetHelp from "./components/GetHelp";
import Help from "./components/Help";
import settingsIcon from "./assets/icons/Settings.svg";
import locationIcon from "./assets/icons/Location.svg";
import "./App.css";

function App() {
  const handleClick = (e) => {
    const elem = e.currentTarget;
    elem.style.zIndex = "999";
    elem.style.height = "100%";
    elem.style.width = "100%";
  };
  return (
    <>
      <Emergency />
      <GetHelp />
      <Help />
      <section className="section-area" id="settings" onClick={handleClick}>
        <img className="icon" src={settingsIcon} alt="Einstellungen" />
      </section>
      <section className="section-area" id="location" onClick={handleClick}>
        <img className="icon" src={locationIcon} alt="Ortung" />
      </section>
    </>
  );
}

export default App;

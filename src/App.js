import React, { useState } from "react";
import Emergency from "./components/Emergency";
import stopIcon from "./assets/icons/Stop.svg";
import helpIcon from "./assets/icons/Help.svg";
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
      <section className="section-area" id="getHelp" onClick={handleClick}>
        <img src={stopIcon} alt="Hilfe erhalten" />
      </section>
      <section className="section-area" id="help" onClick={handleClick}>
        <img src={helpIcon} alt="Helfen" />
      </section>
      <section className="section-area" id="settings" onClick={handleClick}>
        <img src={settingsIcon} alt="Einstellungen" />
      </section>
      <section className="section-area" id="location" onClick={handleClick}>
        <img src={locationIcon} alt="Ortung" />
      </section>
    </>
  );
}

export default App;

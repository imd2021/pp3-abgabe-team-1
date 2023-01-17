import React, { useState } from "react";
import Cross from "../assets/icons/Cross.svg";
import "./Emergency.css";

function Emergency() {
  const [showTextField, setShowTextField] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [timerId, setTimerId] = useState(null);

  // Setzt Timer zurück und kehrt zurück zum Hilfe-Button
  const handleGoBack = () => {
    clearInterval(timerId);
    setCountdown(5);
    setTimerId(null);
    setShowTextField(false);
    setShowFinalText(false);
  };

  //Timer für den Hilferuf
  const handleTimer = (e) => {
    setShowTextField(true);
    const id = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timerId);
          setShowFinalText(true);
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);
    setTimerId(id);
  };

  return (
    <>
      <section className="section-area" id="emergency">
        {!showTextField && !showFinalText && (
          <button className="helpButton" onClick={handleTimer}>
            HILFE
          </button>
        )}
        {showTextField && !showFinalText && (
          <div>
            <p className="helpInformation">
              HILFERUF WIRD <br></br> IN {countdown} SEKUNDEN ABGESETZT:
            </p>
            <button className="goBack" onClick={handleGoBack}>
              <img src={Cross} alt="Abbrechen" /> Jetzt abbrechen
            </button>
          </div>
        )}
        {showFinalText && (
          <div>
            <p className="helpInformation">HILFERUF WURDE ABGESETZT</p>
            <button className="goBack" onClick={handleGoBack}>
              <img src={Cross} alt="Abbrechen" /> Ich benötige keine weitere
              Hilfe
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Emergency;

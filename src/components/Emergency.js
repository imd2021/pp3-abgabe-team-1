import React, { useState } from "react";
import Cross from "../assets/icons/Cross.svg";
import styles from "./Emergency.module.css";

function Emergency() {
  // state to keep track of whether the text field is shown
  const [showTextField, setShowTextField] = useState(false);
  // state to keep track of whether the final text is shown
  const [showFinalText, setShowFinalText] = useState(false);
  // state to keep track of the countdown
  const [countdown, setCountdown] = useState(5);
  // state to keep track of the timer id
  const [timerId, setTimerId] = useState(null);

  // function to handle going back to the help button
  const handleGoBack = () => {
    clearInterval(timerId);
    setCountdown(5);
    setTimerId(null);
    setShowTextField(false);
    setShowFinalText(false);
  };

  // function to handle the timer for the emergency call
  const handleTimer = (e) => {
    setShowTextField(true);
    // start countdown
    const id = setInterval(() => {
      setCountdown((prevCount) => {
        // when countdown reaches 0, display final text
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
      <section className={styles.sectionArea} id={styles.emergency}>
        {!showTextField && !showFinalText && (
          <button className={styles.helpButton} onClick={handleTimer}>
            HILFE
          </button>
        )}
        {showTextField && !showFinalText && (
          <div>
            <p className={styles.helpInformation}>
              HILFERUF WIRD <br></br> IN {countdown} SEKUNDEN ABGESETZT:
            </p>
            <button className={styles.goBack} onClick={handleGoBack}>
              <img src={Cross} alt="Abbrechen" /> Jetzt abbrechen
            </button>
          </div>
        )}
        {showFinalText && (
          <div>
            <p className={styles.helpInformation}>HILFERUF WURDE ABGESETZT</p>
            <button className={styles.goBack} onClick={handleGoBack}>
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

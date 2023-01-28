import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import stopIcon from "../assets/icons/Stop.svg";
import CrossIcon from "../assets/icons/Cross_green.svg";
import "./GetHelp.css";

function GetHelp() {
  // state to keep track of the current index of the cards
  const [currentIndex, setCurrentIndex] = useState(0);
  // state to keep track of whether the help text is displayed
  const [showHelpText, setShowHelpText] = useState(false);
  // state to keep track of whether the section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // array of cards to display
  const cards = [
    {
      title: (
        <div>
          <mark>
            ICH WERDE <br />
            &nbsp;BELÄSTIGT!
          </mark>
        </div>
      ),
      content: (
        <div>
          <h2>
            <b>01</b> Hilfe holen
          </h2>{" "}
          <p>
            Mache Personen um dich herum auf dich aufmerksam. Sieze den
            Täter/die Täterin, damit Außenstehenden klar ist, dass es sich nicht
            um eine persönliche Angelegenheit handelt. Sag dem Täter/der Täterin
            deutlich, dass er/sie die Handlung unterlassen soll. <br />
            <br />
            Über die App kannst du einen diskreten Hilferuf an Personen in
            deiner Nähe und das Personal in der Bahn absetzen. Drücke hierfür
            einfach den Hilfe-Button auf der Startseite. In den Einstellungen
            kannst du auch eine Tastenkombination festlegen, mit welcher ein
            Hilferuf abgesetzt werden kann.
            <br />
            <br /> Setzt du einen Hilferuf ab, erhalten Personen in deiner Nähe
            eine Benachrichtigung, dass du Hilfe benötigst. Sie können dich
            anschließend über die App orten und dich aufsuchen. Über den
            Hilferuf der App wird NICHT die Polizei informiert. Solltest du
            Hilfe von der Polizei benötigen, wähle die Nummer 110.
          </p>
          <h3>Lese auf der nächsten Seite weiter.</h3>
        </div>
      ),
    },
    {
      title: (
        <div>
          <mark>
            ICH WERDE <br />
            &nbsp;BELÄSTIGT!
          </mark>
        </div>
      ),
      content: (
        <div>
          <h2>
            <b>02</b> Belästigung vermeiden
          </h2>{" "}
          <p>
            Bereite dich gedanklich auf bedrohliche Situationen vor. Nimm deine
            Umgebung aufmerksam wahr. Wenn dir dein Bauchgefühl sagt, dass die
            Situation bedrohlich werden könnte, distanziere dich. Einem
            drohenden Konflikt auszuweichen, ist der beste Art der
            Konfliktlösung.
          </p>
          <h2>
            <b>03</b> Tipps für den ÖPNV
          </h2>{" "}
          <p>
            Setze dich in die Nähe des Fahrers oder in einen Wagen, in dem
            bereits mehrere Fahrgäste sind Setze dich in der Bahn in den ersten
            Wagen. Dort kann dir der Fahrer/ die Fahrerin am schnellsten zu
            Hilfe kommen Schließe dich vertrauenswürdigen Personen an
            Telefonieren mit einer Freundin/einem Freund Habe dein Handy
            griffbereit, um Hilfe rufen zu können, wenn es nötig ist
          </p>
        </div>
      ),
    },
  ];

  // useSwipeable hook to handle swipe events
  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
    swipeDuration: 600,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // function to go to the previous card
  const prevCard = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // function to go to the next card
  const nextCard = () => {
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // function to handle the event when the "Get Help" button is clicked
  const handleGetHelpClick = () => {
    setShowHelpText(true);
    setIsExpanded(true);
  };

  // function to handle the event when the "Back to Home" button is clicked
  const handleBackToHomeClick = () => {
    window.location.reload();
    setShowHelpText(false);
    setIsExpanded(false);
  };

  return (
    <section
      className={`section-area-gethelp ${isExpanded ? "expanded" : ""}`}
      id="getHelp"
      onClick={handleGetHelpClick}
      {...handlers}
    >
      {/* Conditional rendering: if showHelpText is true, display the help text, otherwise, display the stop icon */}
      {showHelpText ? (
        <div className="get-help-text-container">
          <button className="homeButtonGreen" onClick={handleBackToHomeClick}>
            <img src={CrossIcon} alt="Close" />
          </button>
          <button className="prevButton" onClick={() => prevCard()}></button>
          <button className="nextButton" onClick={() => nextCard()}></button>
          <div>
            <h1>{cards[currentIndex].title}</h1>
            <p>{cards[currentIndex].content}</p>
          </div>
        </div>
      ) : (
        <img className="icon" src={stopIcon} alt="Hilfe erhalten" />
      )}
    </section>
  );
}

export default GetHelp;

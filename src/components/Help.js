import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import HelpIcon from "../assets/icons/Help.svg";
import CrossIcon from "../assets/icons/Cross_orange.svg";
import "./Help.css";

function Help() {
  // state to keep track of the current index of the cards
  const [currentIndex, setCurrentIndex] = useState(0);
  // state to keep track of whether the help text is displayed
  const [showHelpText, setShowHelpText] = useState(false);
  // state to keep track of whether the section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // array of cards to display home
  const cards = [
    {
      title: (
        <div>
          <mark className="markOrange">
            SO KANNST <br />
            &nbsp;DU HELFEN
          </mark>
        </div>
      ),
      content: (
        <div>
          <h2>
            <b>01</b> Gefahr ausschließen
          </h2>{" "}
          <p>
            Deine Sicherheit geht vor! Solltest dein Eingreifen ein Risiko für
            dein Wohlbefinden darstellen, bleibe auf Abstand und informiere die
            Polizei!
          </p>
          <h2>
            <b>02</b> Gehe zu der Person
          </h2>
          <p>
            Gehe zu der Person, welche Hilfe benötigt. Wenn du über APPNAME
            einen Hilferuf von einer Person erhalten hast, kannst du diese über
            “Person auffinden” orten. Folge dabei einfach dem Pfeil auf deinem
            Display.
          </p>
          <h2>
            <b>03</b> Person ansprechen
          </h2>
          <p>
            Wenn du die Person gefunden hast, sprich sie an. Frage sie, ob sie
            Hilfe braucht. Du kannst dich auch als ein Freund o.ä. ausgeben und
            ein Gespräch beginnen. Setze dich zu ihr oder frage sie, ob sie sich
            mit zu dir setzen möchte.
          </p>
          <h3>Lese auf der nächsten Seite weiter.</h3>
        </div>
      ),
    },
    {
      title: (
        <div>
          <mark>
            SO KANNST <br />
            &nbsp;DU HELFEN
          </mark>
        </div>
      ),
      content: (
        <div>
          <h2>
            <b>04</b> Täter*in beobachten
          </h2>{" "}
          <p>
            Behalte weiterhin den Täter/die Täterin im Auge. Sollte er/sie trotz
            Aufforderungen, das Verhalten zu unterlassen nicht vom Opfer
            absehen, informiere umgehend die Polizei. Bleibe ruhig, provoziere
            den Täter/die Täterin nicht und stelle Distanz zwischen euch her.
            Bitte andere Personen um Mithilfe.
          </p>
          <h2>
            <b>05</b> Tätermerkmale
          </h2>
          <p>
            Präge dir wichtige Merkmale des Täters/der Täterin ein: Wie groß ist
            der Täter/die Täterin? Welche Haarfarbe hat er oder sie? Wie war er
            oder sie bekleidet? Gibt es Besonderheiten?
          </p>
          <h2>
            <b>06</b> Opfer versorgen
          </h2>
          <p>
            Kümmere dich um das Opfer. Rufe wenn nötig den Rettungsdienst, wenn
            das Opfer verletzt sein sollte oder unter Schock steht. Bleibe bei
            der Betroffenen Person und beruhige sie/ihn. Frage nach, ob sie/er
            ein Familienmitglied oder einen Freund/Freundin anrufen möchte.
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
  const handleHelpClick = () => {
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
      className={`section-area-help ${isExpanded ? "expanded" : ""}`}
      id="Help"
      onClick={handleHelpClick}
      {...handlers}
    >
      {/* Conditional rendering: if showHelpText is true, display the help text, otherwise, display the stop icon */}
      {showHelpText ? (
        <div className="help-text-container">
          <button className="homeButtonOrange" onClick={handleBackToHomeClick}>
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
        <img className="icon" src={HelpIcon} alt="Hilfe erhalten" />
      )}
    </section>
  );
}

export default Help;

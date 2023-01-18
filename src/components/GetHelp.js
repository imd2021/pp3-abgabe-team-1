import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import stopIcon from "../assets/icons/Stop.svg";
import "./GetHelp.css";

function GetHelp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // state to keep track of whether the help text is displayed
  const [showHelpText, setShowHelpText] = useState(false);
  // state to keep track of whether the section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  const cards = [
    {
      title: "Ich werde belästigt",
      content: "Renn um dein Leben.",
    },
    {
      title: "Ich werde belästigt",
      content: "Relax. Take it eeeeeeaaaasy",
    },
  ];

  const prevCard = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
      className={`section-area ${isExpanded ? "expanded" : ""}`}
      id="getHelp"
      onClick={handleGetHelpClick}
    >
      {/* Conditional rendering: if showHelpText is true, display the help text, otherwise, display the stop icon */}
      {showHelpText ? (
        <div className="help-text-container">
          <button onClick={handleBackToHomeClick}>Back to Home</button>
          <div>
            <h1>{cards[currentIndex].title}</h1>
            <p>{cards[currentIndex].content}</p>
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
          </div>
        </div>
      ) : (
        <img className="icon" src={stopIcon} alt="Hilfe erhalten" />
      )}
    </section>
  );
}

export default GetHelp;

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import stopIcon from "../assets/icons/Stop.svg";
import "./GetHelp.css";

function GetHelp() {
  // state to keep track of the current index of the cards
  const [currentIndex, setCurrentIndex] = useState(0);
  // state to keep track of whether the help text is displayed
  const [showHelpText, setShowGetHelpText] = useState(false);
  // state to keep track of whether the section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // array of cards to display
  const cards = [
    { title: "Ich werde belästigt", content: "Renn um dein Leben." },
    {
      title: "Ich werde immer noch belästigt",
      content: "Relax. Take it eeeeeeaaaasy",
    },
  ];

  // useSwipeable hook to handle swipe events
  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
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
    setShowGetHelpText(true);
    setIsExpanded(true);
  };

  // function to handle the event when the "Back to Home" button is clicked
  const handleBackToHomeClick = () => {
    window.location.reload();
    setShowGetHelpText(false);
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
          <button onClick={handleBackToHomeClick}>Back to Home</button>
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

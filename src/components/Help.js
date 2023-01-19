import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import HelpIcon from "../assets/icons/Help.svg";
import "./Help.css";

function Help() {
  // state to keep track of the current index of the cards
  const [currentIndex, setCurrentIndex] = useState(0);
  // state to keep track of whether the help text is displayed
  const [showHelpText, setShowHelpText] = useState(false);
  // state to keep track of whether the section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // array of cards to display
  const cards = [
    { title: "So kannst du helfen", content: "gar nicht lol" },
    {
      title: "so kannst du helfen",
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
          <button onClick={handleBackToHomeClick}>Back to Home</button>
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

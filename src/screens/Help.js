import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import CrossIcon from "../assets/icons/Cross_orange.svg";
import HelpIcon from "../assets/icons/Help.svg";
import styles from "./Help.module.css";

function Help({ expanded, setExpanded, content, setContent }) {
	// state to keep track of the current index of the cards
	const [currentIndex, setCurrentIndex] = useState(0);
	// // state to keep track of whether the help text is displayed
	// const [showContent, setShowContent] = useState(false);

	// array of cards to display home
	const cards = [
		{
			title: (
				<h1>
					<mark>&nbsp;SO KANNST&nbsp;</mark>
					<br />
					<mark>&nbsp;DU HELFEN&nbsp;</mark>
				</h1>
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
						Gehe zu der Person, welche Hilfe benötigt. Wenn du über BOB einen
						Hilferuf von einer Person erhalten hast, kannst du diese über den
						Location-Screen orten. Folge dabei einfach den Distanz- und
						Richtungs-Angaben Display.
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
					<h3>Lies auf der nächsten Seite weiter.</h3>
				</div>
			),
		},
		{
			title: (
				<h1>
					<mark>&nbsp;SO KANNST&nbsp;</mark>
					<br />
					<mark>&nbsp;DU HELFEN&nbsp;</mark>
				</h1>
			),
			content: (
				<div>
					<h2>
						<b>04</b> Täter*in beobachten
					</h2>{" "}
					<p>
						Behalte weiterhin den Täter/die Täterin im Auge. Sollte er/sie trotz
						Aufforderungen, das Verhalten zu unterlassen, nicht vom Opfer
						absehen, informiere umgehend die Polizei. Bleibe ruhig, provoziere
						den Täter/die Täterin nicht und stelle Distanz zwischen euch her.
						Bitte andere Personen um Mithilfe.
					</p>
					<h2>
						<b>05</b> Tätermerkmale
					</h2>
					<p>
						Präge dir wichtige Merkmale des Täters/der Täterin ein: Wie groß ist
						der Täter/die Täterin? Welche Haarfarbe hat er/sie? Wie war er/sie
						bekleidet? Gibt es Besonderheiten?
					</p>
					<h2>
						<b>06</b> Opfer versorgen
					</h2>
					<p>
						Kümmere dich um das Opfer. Rufe wenn nötig den Rettungsdienst, wenn
						das Opfer verletzt sein sollte oder unter Schock steht. Bleibe bei
						der Betroffenen Person und beruhige ihn/sie. Frage nach, ob er/sie
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
		setExpanded(true);
		setTimeout(() => setContent(true), 225);
	};

	// function to handle the event when the "Back to Home" button is clicked
	const handleBackToHomeClick = () => {
		setContent(false);
		setExpanded(false);
	};

	return (
		<section
			className={
				expanded
					? `${styles.sectionArea} ${styles.expanded}`
					: `${styles.sectionArea}`
			}
			id={styles.help}
			{...handlers}
		>
			{/* Conditional rendering: if showContent is true, display the help text, otherwise, display the stop icon */}
			{content ? (
				<div className={styles.help__textContainer}>
					<button
						className={styles.homeButtonOrange}
						onClick={handleBackToHomeClick}
					>
						<img src={CrossIcon} alt="Close" />
					</button>

					<div>
						<div>{cards[currentIndex].title}</div>
						<div style={{ margin: "2.5vw" }}>{cards[currentIndex].content}</div>
					</div>

					<nav className={styles.nav}>
						<div
							className={
								currentIndex === 0
									? `${styles.navBtn} ${styles.navBtnActive}`
									: `${styles.navBtn}`
							}
							onClick={() => setCurrentIndex(0)}
						></div>
						<div
							className={
								currentIndex === 1
									? `${styles.navBtn} ${styles.navBtnActive}`
									: `${styles.navBtn}`
							}
							onClick={() => setCurrentIndex(1)}
						></div>
					</nav>
				</div>
			) : (
				<img
					className={styles.icon}
					src={HelpIcon}
					alt="Hilfe erhalten"
					onClick={handleHelpClick}
				/>
			)}
		</section>
	);
}

export default Help;

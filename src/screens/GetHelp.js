import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import CrossIcon from "../assets/icons/Cross_green.svg";
import stopIcon from "../assets/icons/Stop.svg";
import styles from "./GetHelp.module.css";

function GetHelp() {
	// state to keep track of the current index of the cards
	const [currentIndex, setCurrentIndex] = useState(0);
	// state to keep track of whether the help text is displayed
	const [showContent, setShowContent] = useState(false);
	// state to keep track of whether the section is expanded
	const [isExpanded, setIsExpanded] = useState(false);

	// array of cards to display
	// array of cards to display
	const cards = [
		{
			title: (
				<h1>
					<mark>&nbsp;ICH WERDE&nbsp;</mark>
					<br />
					<mark>&nbsp;BELÄSTIGT!&nbsp;</mark>
				</h1>
			),
			content: (
				<div>
					<h2>
						<b>01</b> Hilfe holen
					</h2>
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
					<h3>Lies auf den nächsten Seiten weiter.</h3>
				</div>
			),
		},
		{
			title: (
				<h1>
					<mark>&nbsp;ICH WERDE&nbsp;</mark>
					<br />
					<mark>&nbsp;BELÄSTIGT!&nbsp;</mark>
				</h1>
			),
			content: (
				<div>
					<h2>
						<b>02</b> Belästigung vermeiden
					</h2>
					<p>
						Bereite dich gedanklich auf bedrohliche Situationen vor. Nimm deine
						Umgebung aufmerksam wahr. Wenn dir dein Bauchgefühl sagt, dass die
						Situation bedrohlich werden könnte, distanziere dich. Einem
						drohenden Konflikt auszuweichen, ist die beste Art der
						Konfliktlösung.
					</p>
					<h2>
						<b>03</b> Tipps für den ÖPNV
					</h2>
					<ul>
						<li>
							Setze dich in die Nähe des Fahrers oder in einen Wagen, in dem
							bereits mehrere Fahrgäste sind.
						</li>
						<li>
							Setze dich in der Bahn in den ersten Wagen. Dort kann dir der
							Fahrer/ die Fahrerin am schnellsten zur Hilfe kommen. Schließe
							dich vertrauenswürdigen Personen an.
						</li>
						<li>Telefoniere mit einer Freundin/einem Freund. </li>
						<li>
							Habe dein Handy griffbereit, um Hilfe rufen zu können, wenn es
							nötig ist.
						</li>
					</ul>
				</div>
			),
		},
		{
			title: (
				<h1>
					<mark>&nbsp;ICH WERDE&nbsp;</mark>
					<br />
					<mark>&nbsp;BELÄSTIGT!&nbsp;</mark>
				</h1>
			),
			content: (
				<div>
					<h2>
						<b>04</b> Anlaufstellen
					</h2>
					<p>
						<br />
						Hilfetelefon - Gewalt gegen Frauen <br />
						Telefon: 08000 116 016 <br />
						Website:{" "}
						<a href="https://www.hilfetelefon.de">www.hilfetelefon.de</a>
						<br />
						<br />
						<br />
						Weißer Ring <br />
						Telefon: 116 006 <br />
						Website:{" "}
						<a href="https://www.weisser-ring.de">www.weisser-ring.de</a>
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
	const handleGetHelpClick = () => {
		setIsExpanded(true);
		setTimeout(() => setShowContent(true), 225);
	};

	// function to handle the event when the "Back to Home" button is clicked
	const handleBackToHomeClick = () => {
		setShowContent(false);
		setIsExpanded(false);
	};

	return (
		<section
			className={
				isExpanded
					? `${styles.sectionArea} ${styles.expanded}`
					: `${styles.sectionArea}`
			}
			id={styles.getHelp}
			{...handlers}
		>
			{/* Conditional rendering: if showContent is true, display the help text, otherwise, display the stop icon */}
			{showContent ? (
				<div className={styles.getHelp__textContainer}>
					<button
						className={styles.homeButtonGreen}
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
						<div
							className={
								currentIndex === 2
									? `${styles.navBtn} ${styles.navBtnActive}`
									: `${styles.navBtn}`
							}
							onClick={() => setCurrentIndex(2)}
						></div>
					</nav>
				</div>
			) : (
				<img
					className={styles.icon}
					src={stopIcon}
					alt="Hilfe erhalten"
					onClick={handleGetHelpClick}
				/>
			)}
		</section>
	);
}

export default GetHelp;

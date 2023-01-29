import React, { useState } from "react";
import SectionBottom from "../components/SectionBottom";
import styles from "./Location.module.css";
import LocationIcon from "../assets/icons/Location.svg";
import destinationPoint from "../assets/destinationPoint.svg";
import directionArrow from "../assets/directionArrow.svg";
import exit from "../assets/exit.svg";
import help from "../assets/help.svg";

const Location = () => {
	// state to keep track of whether the help text is displayed
	const [showContent, setShowContent] = useState(false);
	// state to keep track of whether the section is expanded
	const [isExpanded, setIsExpanded] = useState(false);

	const [helpPending, setHelpPending] = useState(true);

	const handleFound = () => {
		setHelpPending(!helpPending);
		console.log(helpPending);
	};

	const handleLocationClick = () => {
		setIsExpanded(true);
		setTimeout(() => setShowContent(true), 225);
	};

	const handleBackToHomeClick = () => {
		setShowContent(false);
		setIsExpanded(false);
	};

	return (
		<>
			<section
				className={
					isExpanded
						? `${styles.sectionArea} ${styles.expanded}`
						: `${styles.sectionArea}`
				}
				id={styles.location}
			>
				{showContent ? (
					<div>
						{helpPending ? (
							<div className={styles.locationContent}>
								<div className={styles.destination}>
									<h2 className={styles.destination__name}>Name</h2>
									<img
										className={styles.destinationPoint}
										src={destinationPoint}
										alt="Destination Point"
									/>
								</div>

								<img
									className={styles.directionArrow}
									src={directionArrow}
									alt="Direction Arrow"
								/>

								<div className={styles.destinationInfo}>
									<h1>
										<span id="distance">15</span> M
									</h1>
									<h2>
										Wagon <span id="wagon">20</span>
									</h2>
								</div>
							</div>
						) : (
							<div className={styles.emptyContent}>
								<div className={styles.emptyInfo}>
									<h1>
										<span>YUHU!</span>
									</h1>
									<p>Es benötigt gerade niemand in deinem Umfeld Hilfe!</p>
								</div>
							</div>
						)}

						{helpPending ? (
							<SectionBottom color="#3F3FC2" handleClick={handleFound}>
								<h1>GEFUNDEN!</h1>
							</SectionBottom>
						) : (
							<SectionBottom color="#FF9D28" handleClick={handleFound}>
								<img
									className={styles.section__icon}
									src={help}
									alt="Lifebelt"
								/>
								<p>Lies dir hier durch, wie du helfen kannst!</p>
							</SectionBottom>
						)}
						<img
							className={styles.exitBtn}
							src={exit}
							alt="Exit Button"
							onClick={handleBackToHomeClick}
						/>
					</div>
				) : (
					<img
						className={styles.icon}
						src={LocationIcon}
						alt="Ortung"
						onClick={handleLocationClick}
					/>
				)}
			</section>
		</>
	);
};

export default Location;

import React, { useState } from "react";
import SectionBottom from "./SectionBottom";
import "./LocationScreen.css";

import destinationPoint from "../assets/destinationPoint.svg";
import directionArrow from "../assets/directionArrow.svg";
import exit from "../assets/exit.svg";
import help from "../assets/help.svg";

const LocationScreen = () => {
	const [helpPending, setHelpPending] = useState(true);

	const handleFound = () => {
		setHelpPending(!helpPending);
		console.log(helpPending);
	};

	return (
		<>
			<section className="section-area" id="location">
				{helpPending ? (
					<div className="location-content">
						<div className="destination">
							<h2 className="destination__name">Name</h2>
							<img
								className="destinationPoint"
								src={destinationPoint}
								alt="Destination Point"
							/>
						</div>

						<img
							className="directionArrow"
							src={directionArrow}
							alt="Direction Arrow"
						/>

						<div className="destination-info">
							<h1>
								<span id="distance">15</span> M
							</h1>
							<h2>
								Wagon <span id="wagon">20</span>
							</h2>
						</div>
					</div>
				) : (
					<div className="empty-content">
						<div className="empty-info">
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
						<img className="section__icon" src={help} alt="Lifebelt" />
						<p>Lies dir hier durch, wie du helfen kannst!</p>
					</SectionBottom>
				)}
			</section>

			<img className="exit-btn" src={exit} alt="Exit Button" />
		</>
	);
};

export default LocationScreen;

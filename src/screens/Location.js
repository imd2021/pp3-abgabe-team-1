import { useEffect, useState } from "react";
import SectionBottom from "../components/SectionBottom";
import styles from "./Location.module.css";
import LocationIcon from "../assets/icons/Location.svg";
import destinationPoint from "../assets/destinationPoint.svg";
import directionArrow from "../assets/directionArrow.svg";
import exit from "../assets/exit.svg";
import help from "../assets/help.svg";
import { Geolocation } from "@capacitor/geolocation";
import storage from "../storage";

const deviceID = await storage.get("deviceID");

const Location = ({ calls, openHelp }) => {
	// state to keep track of whether the help text is displayed
	const [showContent, setShowContent] = useState(false);
	// state to keep track of whether the section is expanded
	const [isExpanded, setIsExpanded] = useState(false);
	// GPS coordinates of the device
	const [coordinates, setCoordiantes] = useState({ lat: 49, lon: 7.999 });

	useEffect(() => {
		getCurrentPosition();
	}, []);

	const getCurrentPosition = async () => {
		const response = await Geolocation.getCurrentPosition();
		const coords = {
			lat: response.coords.latitude,
			lon: response.coords.longitude,
		};
		setCoordiantes(coords);
	};

	// math from http://www.movable-type.co.uk/scripts/gis-faq-5.1.html
	const calculateDistance = (lat1, lon1, lat2, lon2) => {
		const toRad = (x) => (Math.PI / 180) * x;

		const R = 6371000; // metres
		lat1 = toRad(lat1);
		lat2 = toRad(lat2);

		const dLat = toRad(lat2 - lat1);
		const dLon = toRad(lon2 - lon1);

		const a =
			Math.pow(Math.sin(dLat / 2), 2) +
			Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
		const c = 2 * Math.asin(Math.sqrt(a));

		return R * c; // distance in metres
	};

	const handleFound = () => {};

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
					<>
						{calls.length === 0 || calls[0].deviceID === deviceID ? (
							<div className={styles.emptyContent}>
								<div className={styles.emptyInfo}>
									<h1>
										<span>YUHU!</span>
									</h1>
									<p>Es benötigt gerade niemand in deinem Umfeld Hilfe!</p>
								</div>
							</div>
						) : (
							<div className={styles.locationContent}>
								<div className={styles.destination}>
									<h2 className={styles.destination__name}>{calls[0].name}</h2>
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
										<span id="distance">
											{Math.round(
												calculateDistance(
													calls[0].pos.lat,
													calls[0].pos.lon,
													coordinates.lat,
													coordinates.lon
												)
											)}
										</span>{" "}
										M
									</h1>
									<h2>
										Wagon <span id="wagon">20</span>
									</h2>
								</div>
							</div>
						)}

						{calls.length === 0 || calls[0].deviceID === deviceID ? (
							<SectionBottom
								color="#FF9D28"
								handleClick={() => {
									openHelp();
									handleBackToHomeClick();
								}}
							>
								<img
									className={styles.section__icon}
									src={help}
									alt="Lifebelt"
								/>
								<p>Lies dir hier durch, wie du helfen kannst!</p>
							</SectionBottom>
						) : (
							<SectionBottom color="#3F3FC2" handleClick={handleFound}>
								<h1>GEFUNDEN!</h1>
							</SectionBottom>
						)}
						<img
							className={styles.exitBtn}
							src={exit}
							alt="Exit Button"
							onClick={handleBackToHomeClick}
						/>
					</>
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

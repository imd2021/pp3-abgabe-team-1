import { useEffect, useState } from "react";
import SectionBottom from "../components/SectionBottom";
import styles from "./Location.module.css";
import LocationIcon from "../assets/icons/Location.svg";
import destinationPoint from "../assets/destinationPoint.svg";
import directionArrow from "../assets/directionArrow.svg";
import cross from "../assets/icons/Cross.svg";
import help from "../assets/help.svg";
import storage from "../storage";
import { Geolocation } from "@capacitor/geolocation";
import { DeviceOrientation } from "@awesome-cordova-plugins/device-orientation";

const deviceID = await storage.get("deviceID");

const Location = ({ calls, openHelp }) => {
	// state to keep track of whether the help text is displayed
	const [showContent, setShowContent] = useState(false);
	// state to keep track of whether the section is expanded
	const [isExpanded, setIsExpanded] = useState(false);
	// GPS coordinates of the device
	const [coordinates, setCoordiantes] = useState({});

	const [watchingPosition, setWatchingPosition] = useState(false);

	const [north, setNorth] = useState(0);
	const [angle, setAngle] = useState(0);

	useEffect(() => {
		if (
			watchingPosition &&
			calls.length > 0 &&
			calls[0].deviceID !== deviceID
		) {
			getCurrentPosition();
		}
		const intervalID = setInterval(() => {
			if (
				watchingPosition &&
				calls.length > 0 &&
				calls[0].deviceID !== deviceID
			) {
				getCurrentPosition();
			}
		}, 2500);

		return () => clearInterval(intervalID);
	}, [watchingPosition]);

	const getCurrentPosition = async () => {
		const response = await Geolocation.getCurrentPosition({
			enableHighAccuracy: true,
		});
		const coords = {
			lat: response.coords.latitude,
			lon: response.coords.longitude,
		};
		setCoordiantes(coords);
	};

	useEffect(() => {
		// event listener for device orientation
		const subscribtion = DeviceOrientation.watchHeading().subscribe((data) => {
			setNorth(data.magneticHeading);
		});

		return () => {
			subscribtion.unsubscribe();
		};
	}, []);

	useEffect(() => {
		// calculates angle between both devices
		if (coordinates.lat && calls.length > 0) {
			const radian =
				(Math.atan2(
					calls[0].pos.lon - coordinates.lat,
					calls[0].pos.lat - coordinates.lon
				) +
					Math.PI / 2) %
				(2 * Math.PI);
			setAngle((radian / Math.PI) * 180);
		}
	}, [north]);

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

	const handleLocationClick = () => {
		setIsExpanded(true);
		setWatchingPosition(true);
		setTimeout(() => setShowContent(true), 225);
	};

	const handleBackToHomeClick = () => {
		setShowContent(false);
		setIsExpanded(false);
		setWatchingPosition(false);
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
									<h2 className={styles.destination__name}>
										{calls[0].firstname}
									</h2>
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
									style={{
										transform: `rotate(${north + angle}deg)`,
									}}
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
												) * 10
											) / 10 || "0"}
										</span>{" "}
										M
									</h1>
									<h2>
										Wagon <span id="wagon">20</span>
									</h2>
								</div>
							</div>
						)}

						<SectionBottom
							color="#FF9D28"
							handleClick={() => {
								openHelp();
								handleBackToHomeClick();
							}}
						>
							<img className={styles.section__icon} src={help} alt="Lifebelt" />
							<p>Lies dir hier durch, wie du helfen kannst!</p>
						</SectionBottom>

						<img
							className={styles.exitBtn}
							src={cross}
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

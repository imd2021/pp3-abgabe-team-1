import { useState } from "react";
import styles from "./Settings.module.css";
import Setting from "../components/Setting";
import cross from "../assets/icons/Cross.svg";
import SettingsIcon from "../assets/icons/Settings.svg";

const Settings = () => {
	// state to keep track of whether the help text is displayed
	const [showContent, setShowContent] = useState(false);
	// state to keep track of whether the section is expanded
	const [isExpanded, setIsExpanded] = useState(false);

	const handleSettingsClick = () => {
		setIsExpanded(true);
		setTimeout(() => setShowContent(true), 225);
	};

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
			id={styles.settings}
		>
			{showContent ? (
				<div>
					<div className={styles.settingsContainer}>
						<Setting
							id="personalInfo"
							heading="Persönliche Informationen"
							description="Hier kannst du Informationen angeben, die im Ernstfall nützlich
										sein könnten, um dich zu finden!"
							values={[
								{id: "firstname", name: "Vorname", value: "Max" },
								{id: "lastname", name: "Nachname", value: "Mustermann" },
							]}
						></Setting>

						<Setting
							id="shortcut"
							heading="Tasten&shy;kombination"
							description="Stelle hier deine Tastenkombination ein, um schnell einen Hilferuf absenden zu können!"
							values={[
								{ name: "Taste 1", value: "Leiser-Taste" },
								{ name: "Taste 2", value: "Leiser-Taste" },
								{ name: "Art", value: "Schnell hintereinander" },
							]}
						></Setting>
					</div>
					<img
						className={styles.exitBtn}
						src={cross}
						alt="Exit Button"
						onClick={handleBackToHomeClick}
					/>
				</div>
			) : (
				<img
					className={styles.icon}
					src={SettingsIcon}
					alt="Settings"
					onClick={handleSettingsClick}
				/>
			)}
		</section>
	);
};

export default Settings;

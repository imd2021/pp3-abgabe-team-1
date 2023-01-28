import React from "react";
import styles from "./SettingsScreen.module.css";
import Setting from "../components/Setting";
import exit from "../assets/exit.svg";

const SettingsScreen = () => {
	return (
		<>
			<section className={styles.sectionArea} id={styles.settings}>
				<div className={styles.settingsContainer}>
					<Setting
						heading="Tasten&shy;kombination"
						description="Stelle hier deine Tastenkombination ein um schnell einen Hilferuf absenden zu können!"
						values={[
							{ name: "Taste 1", value: "Leiser-Taste" },
							{ name: "Taste 2", value: "Leiser-Taste" },
							{ name: "Art", value: "Schnell hintereinander" },
						]}
					></Setting>
					
					<Setting
						heading="Persönliche Informationen"
						description="Hier kannst du Informationen angeben, die im Ernstfall nützlich
						sein könnten, um dich zu finden!"
						values={[
							{ name: "Vorname", value: "Max" },
							{ name: "Nachname", value: "Mustermann" },
						]}
					></Setting>
				</div>
			</section>
			<img className={styles.exitBtn} src={exit} alt="Exit Button" />
		</>
	);
};

export default SettingsScreen;

import React from "react";
import "./SettingsScreen.css";
import exit from "../assets/exit.svg";

const SettingsScreen = () => {
	return (
		<>
			<section className="section-area" id="settings">
				<div className="settings-container">
					<article className="setting">
						<div className="setting__head">
							<h2>Tasten&shy;kombination</h2>
							<label className="setting__switch">
								<input type="checkbox" />
								<span className="slider"></span>
							</label>
						</div>
						<p className="setting__description">
							Stelle hier deine Tastenkombination ein um schnell einen Hilferuf
							absenden zu können!
						</p>
						<div className="setting__values">
							<p>
								<b>Taste 1:</b> Leiser-Taste <br />
								<b>Taste 2:</b> Leiser-Taste <br />
								<b>Art:</b> Schnell hintereinander
							</p>
							<p className="edit">Bearbeiten</p>
						</div>
					</article>

					<article className="setting">
						<div className="setting__head">
							<h2>Persönliche Informationen</h2>
							<label className="setting__switch">
								<input type="checkbox" />
								<span className="slider"></span>
							</label>
						</div>
						<p className="setting__description">
							Hier kannst du Informationen angeben, die im Ernstfall nützlich
							sein könnten, um dich zu finden!
						</p>
						<div className="setting__values">
							<p>
								<b>Vorname:</b> Max <br />
								<b>Nachname:</b> Mustermann
							</p>
							<p className="edit">Bearbeiten</p>
						</div>
					</article>
				</div>
			</section>
			<img className="exit-btn" src={exit} alt="Exit Button" />
		</>
	);
};

export default SettingsScreen;

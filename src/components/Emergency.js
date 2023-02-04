import { useState } from "react";
import Cross from "../assets/icons/Cross.svg";
import styles from "./Emergency.module.css";
import {
	setDoc,
	deleteDoc,
	doc,
	serverTimestamp,
	collection,
} from "firebase/firestore";
import db from "../firebaseConfig";
import { uuidv4 } from "@firebase/util";
import storage from "../storage";
import { Geolocation } from "@capacitor/geolocation";

function Emergency() {
	// state to keep track of whether the text field is shown
	const [showTextField, setShowTextField] = useState(false);
	// state to keep track of whether the final text is shown
	const [showFinalText, setShowFinalText] = useState(false);
	// state to keep track of the countdown
	const [countdown, setCountdown] = useState(5);
	// state to keep track of the timer id
	const [timerId, setTimerId] = useState(null);
	// stores the unique id of the emergency call that is currently pending
	const [callId, setCallId] = useState("");

	const currentPosition = async () => {
		const response = await Geolocation.getCurrentPosition({
			enableHighAccuracy: true,
		});
		const coords = {
			lat: response.coords.latitude,
			lon: response.coords.longitude,
		};
		return coords;
	};

	const sendCall = async () => {
		const id = uuidv4();
		setCallId(id);
		await setDoc(doc(db, "emergencies", id), {
			deviceID: await storage.get("deviceID"),
			firstname: await storage.get("firstname"),
			lastname: await storage.get("lastname"),
			createdAt: serverTimestamp(),
			pos: await currentPosition(),
		});
	};

	const deleteCall = async () => {
		const emergenciesRef = collection(db, "emergencies");
		const docRef = doc(emergenciesRef, callId);
		await deleteDoc(docRef);
	};

	// function to handle going back to the help button
	const handleGoBack = () => {
		clearInterval(timerId);
		setCountdown(5);
		setTimerId(null);
		setShowTextField(false);
		setShowFinalText(false);
		deleteCall();
	};

	// function to handle the timer for the emergency call
	const handleTimer = () => {
		setShowTextField(true);
		// start countdown
		const id = setInterval(() => {
			setCountdown((prevCount) => {
				// after countdown reaches 1, display final text and send emergency call
				if (prevCount === 1) {
					clearInterval(id);
					setShowFinalText(true);
					sendCall();
					return prevCount;
				}
				return prevCount - 1;
			});
		}, 1000);
		setTimerId(id);
	};

	return (
		<>
			<section className={styles.sectionArea} id={styles.emergency}>
				{!showTextField && !showFinalText && (
					<button className={styles.helpButton} onClick={handleTimer}>
						HILFE
					</button>
				)}
				{showTextField && !showFinalText && (
					<div>
						<p className={styles.helpInformation}>
							<mark>
								&nbsp;HILFERUF WIRD&nbsp;<br />&nbsp;IN {countdown}{" "}
								SEKUNDEN&nbsp;<br />&nbsp;ABGESETZT:&nbsp;
							</mark>
						</p>
						<button className={styles.goBack} onClick={handleGoBack}>
							<img src={Cross} alt="Abbrechen" /> Jetzt abbrechen
						</button>
					</div>
				)}
				{showFinalText && (
					<div>
						<p className={styles.helpInformation}>
							<mark>
								&nbsp;HILFERUF WURDE&nbsp;<br />&nbsp;ABGESETZT&nbsp;
							</mark>
						</p>
						<button className={styles.goBack} onClick={handleGoBack}>
							<img src={Cross} alt="Abbrechen" /> Ich benötige keine weitere
							Hilfe
						</button>
					</div>
				)}
			</section>
		</>
	);
}

export default Emergency;

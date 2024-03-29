import { useEffect, useState } from "react";
import "./fontface.css";
import "./App.css";
import Home from "./screens/Home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebaseConfig";
import { LocalNotifications } from "@capacitor/local-notifications";
import storage from "./storage";

const deviceID = await storage.get("deviceID");

function App() {
	const [calls, setCalls] = useState([]);

	const scheduleNotification = async () => {
		await LocalNotifications.schedule({
			notifications: [
				{
					id: 1,
					title: "Jemand braucht deine Hilfe!",
					body: "Öffne die Richtungsanzeige in der App, um zu sehen, wo sich die Person befindet.",
				},
			],
		});
	};

	// lists all emergency calls from the db collection if it changes
	useEffect(() => {
		const emergenciesRef = collection(db, "emergencies");
		const unsubscribe = onSnapshot(emergenciesRef, (snapshot) => {
			setCalls(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					deviceID: doc.data().deviceID,
					pos: doc.data().pos,
					firstname: doc.data().firstname,
					lastname: doc.data().lastname,
				}))
			);

			if (
				snapshot.docs.length > 0 &&
				snapshot.docs[0].data().deviceID !== deviceID
			) {
				scheduleNotification();
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// locks app into portrait mode
	useEffect(() => {
		ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
	}, []);

	return <Home calls={calls} />;
}

export default App;

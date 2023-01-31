import { useEffect, useState, createContext } from "react";
import "./fontface.css";
import "./App.css";
import Home from "./screens/Home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

import { initializeApp } from "firebase/app";
import {
	doc,
	addDoc,
	deleteDoc,
	getFirestore,
	orderBy,
	serverTimestamp,
	collection,
	query,
	onSnapshot,
} from "firebase/firestore";
import { create } from "domain";

const firebaseConfig = {
	apiKey: "AIzaSyCLcw8uUMz5lzkW-y7TCspNHdvY-gB6yC4",
	authDomain: "bob-p3.firebaseapp.com",
	projectId: "bob-p3",
	storageBucket: "bob-p3.appspot.com",
	messagingSenderId: "680370630200",
	appId: "1:680370630200:web:fd299edbca4a122ae800cd",
	measurementId: "G-NZ2KN9TW3G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const emergenciesRef = collection(db, "emergencies");

function App() {
	const [calls, setCalls] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(emergenciesRef, (snapshot) => {
			setCalls(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					deviceID: doc.data().deviceID,
					pos: doc.data().pos,
				}))
			);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// // locks app into portrait mode
	// useEffect(() => {
	// 	ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
	// }, []);

	return (
			<Home calls={calls}/>
	);
}

export default App;

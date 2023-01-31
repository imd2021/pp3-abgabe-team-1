import { useEffect, useState } from "react";
import "./fontface.css";
import "./App.css";
import Home from "./screens/Home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

import { onSnapshot } from "firebase/firestore";
import emergenciesRef from "./firebaseConfig";

function App() {
	const [calls, setCalls] = useState([]);

	// lists all emergency calls from the db collection if it changes
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

	// locks app into portrait mode
	useEffect(() => {
		ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
	}, []);

	return (
			<Home calls={calls}/>
	);
}

export default App;

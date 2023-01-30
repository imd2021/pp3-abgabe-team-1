import { useEffect } from "react";
import "./fontface.css";
import "./App.css";
import Home from "./screens/Home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

function App() {
	useEffect(() => {
		ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
	}, []);

	return <Home />;
}

export default App;

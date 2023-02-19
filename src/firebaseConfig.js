import { initializeApp } from "firebase/app";
import {
	getFirestore,
} from "firebase/firestore";

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

export default db;
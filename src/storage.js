import { Storage } from "@ionic/storage";
import { uuidv4 } from "@firebase/util";

const storage = new Storage();
const createStorage = async () => {
	await storage.create();
};
createStorage();

// --- setting default values for the first use of the app if not already declared ---
// setting unique id for device
if ((await storage.get("deviceID")) == null) {
	await storage.set("deviceID", uuidv4());
}

// disable all setting on first use
if ((await storage.get("personalInfo")) == null) {
	await storage.set("personalInfo", false);
}
if ((await storage.get("shortcut")) == null) {
	await storage.set("shortcut", false);
}

// set initial value for name inputs
if ((await storage.get("firstname")) == null) {
	await storage.set("firstname", "");
}
if ((await storage.get("lastname")) == null) {
	await storage.set("lastname", "");
}


export default storage;

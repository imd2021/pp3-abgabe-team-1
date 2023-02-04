import { Storage } from "@ionic/storage";
import { uuidv4 } from "@firebase/util";

const storage = new Storage();
const createStorage = async () => {
	await storage.create();
};
createStorage();

// setting specific values for the device
if ((await storage.get("deviceID")) == null) {
	await storage.set("deviceID", uuidv4());
}

// disable all setting on default
if ((await storage.get("personalInfo")) == null) {
	await storage.set("personalInfo", false);
}
if ((await storage.get("shortcut")) == null) {
	await storage.set("shortcut", false);
}

// set default value for name inputs
if ((await storage.get("firstname")) == null) {
	await storage.set("firstname", "");
}
if ((await storage.get("lastname")) == null) {
	await storage.set("lastname", "");
}


export default storage;

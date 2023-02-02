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
await storage.set("name", "Jona Strickler");

export default storage;

import Emergency from "../components/Emergency";
import GetHelp from "./GetHelp";
import Help from "./Help";
import Location from "./Location";
import Settings from "./Settings";

function Home() {
	return (
		<>
			<Emergency />
			<GetHelp />
			<Help />
			<Settings />
			<Location/>
		</>
	);
}

export default Home;

import Emergency from "../components/Emergency";
import GetHelp from "./GetHelp";
import Help from "./Help";
import Location from "./Location";
import Settings from "./Settings";

function Home({calls}) {
	return (
		<>
			<Emergency />
			<GetHelp />
			<Help />
			<Settings />
			<Location calls={calls}/>
		</>
	);
}

export default Home;

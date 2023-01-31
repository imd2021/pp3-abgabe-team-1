import { useState } from "react";
import Emergency from "../components/Emergency";
import GetHelp from "./GetHelp";
import Help from "./Help";
import Location from "./Location";
import Settings from "./Settings";

function Home({ calls }) {
	const [helpExpanded, setHelpExpanded] = useState(false);
	const [helpContent, setHelpContent] = useState(false);

	// function to handle the event when the "Get Help" button is clicked
	const openHelp = () => {
		setTimeout(() => {
			setHelpExpanded(true);
			setTimeout(() => setHelpContent(true), 225);
		}, 225);
	};

	return (
		<>
			<GetHelp />
			<Help
				expanded={helpExpanded}
				setExpanded={setHelpExpanded}
				content={helpContent}
				setContent={setHelpContent}
			/>
			<Emergency />
			<Settings />
			<Location calls={calls} openHelp={openHelp} />
		</>
	);
}

export default Home;

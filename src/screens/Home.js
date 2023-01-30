import Emergency from "../components/Emergency";
import GetHelp from "./GetHelp";
import Help from "./Help";
import Location from "./Location"
import Settings from "./Settings"

function Home() {
  const handleClick = (e) => {
    const elem = e.currentTarget;
    elem.style.zIndex = "999";
    elem.style.height = "100%";
    elem.style.width = "100%";
  };
  return (
    <>
      <Emergency />
      <GetHelp />
      <Help />
      <Settings />
      <Location />
    </>
  );
}

export default Home;
import Emergency from "../components/Emergency";
import GetHelp from "./GetHelp";
import Help from "./Help";
import settingsIcon from "../assets/icons/Settings.svg";
import locationIcon from "../assets/icons/Location.svg";
import styles from "./Home.module.css";

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
      <section className={styles.sectionArea} id={styles.settings} onClick={handleClick}>
        <img className={styles.icon} src={settingsIcon} alt="Einstellungen" />
      </section>
      <section className={styles.sectionArea} id={styles.location} onClick={handleClick}>
        <img className={styles.icon} src={locationIcon} alt="Ortung" />
      </section>
    </>
  );
}

export default Home;
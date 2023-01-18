import "./App.css";
import SectionBottom from "./components/SectionBottom";

function App() {
	return (
		<>
			<section className="section-area" id="location">
				<div className="content">
					<div className="destination">
						<h2 className="destination__name">Name</h2>
						<img className="destinationPoint" src="/assets/destinationPoint.svg" alt="Destination Point" />
					</div>

					<img className="directionArrow" src="/assets/directionArrow.svg" alt="Direction Arrow" />

					<div className="info">
						<h1 className="info__distance">
							<span id="distance">15</span> M
						</h1>
						<h2 classname="info__wagon">
							Wagon <span id="wagon">20</span>
						</h2>
					</div>
				</div>
				<SectionBottom color="#3F3FC2">
					<h1>GEFUNDEN!</h1>
				</SectionBottom>
			</section>

			<img className="exit-btn" src="/assets/exit.svg" alt="Exit Button" />
		</>
	);
}

export default App;

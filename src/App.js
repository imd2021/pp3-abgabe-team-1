import './App.css';

function App() {
	const handleClick = (e) => {
		const elem = e.currentTarget;
		elem.style.zIndex = "999";
		elem.style.height = "100%";
		elem.style.width = "100%";
	}

  return (
		<>
			<section className="section-area" id='help'></section>
    	<section className="section-area" id='info1' onClick={handleClick}></section>
    	<section className="section-area" id='info2' onClick={handleClick}></section>
    	<section className="section-area" id='settings' onClick={handleClick}></section>
    	<section className="section-area" id='location' onClick={handleClick}></section>
		</>
  );
}

export default App;

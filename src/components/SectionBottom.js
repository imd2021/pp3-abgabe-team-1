import React from "react";
import "./SectionBottom.css";

const SectionBottom = ({ color, children }) => {
	return (
		<>
			<section
				className="section"
				style={{ backgroundColor: color, color: color }}
			>
				<div className="section__container">
					{children}
				</div>
			</section>
		</>
	);
};

export default SectionBottom;

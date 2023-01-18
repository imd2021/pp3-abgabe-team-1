import React from "react";
import "./SectionBottom.css";

const SectionBottom = ({ color, children, handleClick }) => {
	return (
		<>
			<section
				className="section"
				style={{ backgroundColor: color, color: color }}
				onClick={handleClick}
			>
				<div className="section__container">
					{children}
				</div>
			</section>
		</>
	);
};

export default SectionBottom;

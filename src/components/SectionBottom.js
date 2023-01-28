import React from "react";
import styles from "./SectionBottom.module.css";

const SectionBottom = ({ color, children, handleClick }) => {
	return (
		<>
			<section
				className={styles.section}
				style={{ backgroundColor: color, color: color }}
				onClick={handleClick}
			>
				<div className= {styles.section__container}>
					{children}
				</div>
			</section>
		</>
	);
};

export default SectionBottom;

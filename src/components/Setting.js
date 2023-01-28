import React from "react";
import styles from "./Setting.module.css"

const Setting = ({ heading, description, values }) => {
	return (
		<article className={styles.setting}>
			<div className={styles.setting__head}>
				<h2>{heading}</h2>
				<label className={styles.setting__switch}>
					<input type="checkbox" />
					<span className={styles.slider}></span>
				</label>
			</div>
			<p className={styles.setting__description}>{description}</p>
			<div className={styles.setting__values}>
				<p>
					{values.map((item) => {
						return (
							<>
								<b>{`${item.name}: `}</b>
								{item.value}
								<br />
							</>
						);
					})}
				</p>
				<p className={styles.edit}>Bearbeiten</p>
			</div>
		</article>
	);
};

export default Setting;

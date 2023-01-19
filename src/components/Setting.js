import React from "react";
import "./Setting.css"

const Setting = ({ heading, description, values }) => {
	return (
		<article className="setting">
			<div className="setting__head">
				<h2>{heading}</h2>
				<label className="setting__switch">
					<input type="checkbox" />
					<span className="slider"></span>
				</label>
			</div>
			<p className="setting__description">{description}</p>
			<div className="setting__values">
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
				<p className="edit">Bearbeiten</p>
			</div>
		</article>
	);
};

export default Setting;

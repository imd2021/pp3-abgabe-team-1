import { useState, useEffect } from "react";
import styles from "./Setting.module.css";
import storage from "../storage";

const Setting = ({ id, heading, description, values }) => {
	const [active, setActive] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		const initSetting = async () => {
			const enabled = await storage.get(id);

			// get personal info from storage
			const storedFirstname = await storage.get("firstname");
			setFirstName(storedFirstname);
			const storedLastname = await storage.get("lastname");
			setLastName(storedLastname);
			// set checkbox.checked to stored value
			const checkbox = document.getElementById(`${id}__checkbox`);
			checkbox.checked = enabled;
			// set active state to stored value
			const personalInfo = await storage.get("personalInfo");
			const shortcut = await storage.get("shortcut");
			if (id === "personalInfo") {
				setActive(personalInfo);
			} else {
				setActive(shortcut);
			}
			// set inputs.disabled to stored value
			const inputs = document.querySelectorAll(".setting__input");
			inputs.forEach((elem) => {
				elem.disabled = !enabled;
			});
			// set buttons.disables to stored value
			const btn = document.getElementById(`${id}__btn`);
			btn.disabled = !enabled;
		};
		initSetting();
	}, []);

	const toggleSetting = async () => {
		setActive(!active);
		const inputs = document.querySelectorAll(".setting__input");
		inputs.forEach((elem) => {
			elem.disabled = !elem.disabled;
		});
		const checkbox = document.getElementById(`${id}__checkbox`);
		await storage.set(id, !checkbox.checked);

		const btn = document.getElementById(`${id}__btn`);
		btn.disabled = !btn.disabled;
	};

	const saveChanges = async () => {
		if (id === "personalInfo" && active) {
			await storage.set("firstname", firstName);
			await storage.set("lastname", lastName);
		}
		console.log("btn clicked");
	};

	return (
		<article className={styles.setting}>
			<div className={styles.setting__head}>
				<h2>{heading}</h2>
				<label className={styles.setting__switch}>
					<input id={`${id}__checkbox`} type="checkbox" />
					<span className={styles.slider} onClick={toggleSetting}></span>
				</label>
			</div>
			<p className={styles.setting__description}>{description}</p>
			<div className={styles.setting__values}>
				<p>
					{values.map((item) => {
						return id === "shortcut" ? (
							<span key={item.name}>
								<b>{`${item.name}: `}</b>
								{item.value}
								<br />
							</span>
						) : (
							<span key={item.name}>
								<b>{`${item.name}: `}</b>
								<br />
								<input
									autoComplete="off"
									id={item.id}
									className={`${styles.input} setting__input`}
									type="text"
									name={item.name}
									value={item.id === "firstname" ? firstName : lastName}
									onChange={(e) => {
										if (item.id === "firstname") {
											setFirstName(e.target.value);
										} else {
											setLastName(e.target.value);
										}
									}}
								/>
								<br />
							</span>
						);
					})}
				</p>
				<button id={`${id}__btn`} className={styles.save} onClick={saveChanges}>
					Speichern
				</button>
			</div>
		</article>
	);
};

export default Setting;

/** @format */
import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import data from "./data.js";
import "./styles.css";
import LightDarkMode from "./testing-theme.jsx";
export default function BrowserExtension() {
	const [engagedTab, setEngagedTab] = useState("all");
	const [update, setUpdate] = useState(data);
	function removeButton(name) {
		const newData = update.filter((item) => {
			return item.name !== name;
		});
		setUpdate(newData);
	}

	function toggleStatus(name) {
		setUpdate((prevData) =>
			prevData.map((item) =>
				item.name === name
					? { ...item, isActive: !item.isActive }
					: item
			)
		);
	}

	return (
		<div className="container">
			<LightDarkMode />
			<div className="list-toggle-container">
				<h2 className="extensions-list-heading">Extensions List</h2>
				<div className="toggle-buttons">
					<button
						onClick={() => {
							setEngagedTab("all");
						}}>
						All
					</button>
					<button
						onClick={() => {
							setEngagedTab("active");
						}}>
						Active
					</button>
					<button
						onClick={() => {
							setEngagedTab("inactive");
						}}>
						Inactive
					</button>
				</div>
			</div>

			<div className="general-grid-container">
				{update.map((dataItem) => {
					if (engagedTab === "active" && !dataItem.isActive) {
						return null;
					}

					if (engagedTab === "inactive" && dataItem.isActive) {
						return null;
					}
					return (
						<div className="grid-container">
							<div className="flex-container">
								<div>
									<img
										src={dataItem.logo}
										alt={dataItem.name}
									/>
								</div>
								<div className="extension-description">
									<h2>{dataItem.name}</h2>
									<p>{dataItem.description}</p>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<button
									onClick={() => removeButton(dataItem.name)}
									className="remove-button">
									Remove
								</button>

								{dataItem.isActive ? (
									<button
										onClick={() =>
											toggleStatus(dataItem.name)
										}
										className="toggleOn-button">
										<FaToggleOn
											style={{ color: "red" }}
											className="toggleOn"
										/>
									</button>
								) : (
									<button
										onClick={() =>
											toggleStatus(dataItem.name)
										}
										className="toggleOff-button">
										<FaToggleOff
											style={{ color: "hsl(0, 0%, 78%)" }}
											className="toggleOff"
										/>
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>
			<div
				className="attribution"
				style={{
					fontSize: "11px",
				}}>
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge">
					Frontend Mentor
				</a>
				. Coded by <a href="https://github.com/OZ-astra/browser-extensions">Ozil</a>.
			</div>
		</div>
	);
}

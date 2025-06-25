/** @format */
import { useEffect, useState } from "react";
import "./styles.css";

export default function LightDarkMode() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
		console.log(theme);
		document.body.className = theme;
	}, [theme]);

	const switchToLight = () => {
		setTheme("light");
	};
	const switchToDark = () => setTheme("dark");

	return (
		<div>
			<header>
				<img src="/assets/images/logo.svg" alt="Logo" id="page-logo" />
				<button onClick={switchToDark} className="moon-icon-button">
					<img
						src="/assets/images/icon-moon.svg"
						alt="moon icon"
						id="moon-icon"
					/>
				</button>
				<button onClick={switchToLight} className="sun-icon-button">
					<img src="/assets/images/icon-sun.svg" alt="" />
				</button>
			</header>
		</div>
	);
}

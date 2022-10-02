import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	//const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return (
			localStorage.getItem("theme") && localStorage.getItem("theme") === "dark"
		);
	});

	const toggleDarkMode = () => {
		//	localStorage.setItem("theme", isDarkMode ? "light" : "dark");
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		const html = window.document.documentElement;

		const prevTheme = isDarkMode ? "dark" : "light";
		html.classList.remove(prevTheme);

		const nextTheme = isDarkMode ? "light" : "dark";
		html.classList.add(nextTheme);
		console.log(isDarkMode, html.classList);

		//localStorage.setItem("theme", nextTheme);
	}, [isDarkMode]);

	return (
		<nav className="flex flex-row justify-between items-center px-5 h-12 bg-zinc-100  dark:bg-zinc-900 dark:text-white">
			<h1 className="font-bold">TMDB</h1>
			<Link to="/">Accueil</Link>
			<Link to="/signup">S'enregistrer</Link>
			<Link to="/login">Connexion</Link>
			<Link to="/profil">Mon profil</Link>
			<button
				className="rounded-2xl border border-white  dark:bg-zinc-700 bg-black px-3 text-sm text-white"
				onClick={toggleDarkMode}
			>
				{isDarkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</nav>
	);
}

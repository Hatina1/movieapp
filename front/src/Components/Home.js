import { useEffect, useState } from "react";
import { getHomeMovies, getHomeSeries } from "../ApiMovies";
import MoviesSection from "./MoviesSection";
import SeriesSection from "./SeriesSection";
import "../App.css";

function Home() {
	const [moviesList, setMoviesList] = useState([]);
	const [seriesList, setSeriesList] = useState([]);

	useEffect(() => {
		const showMovies = async () => {
			let list = await getHomeMovies();
			//console.log(list);
			setMoviesList(list);
		};
		showMovies();
	}, []);

	useEffect(() => {
		const showSeries = async () => {
			let list = await getHomeSeries();
			console.log(list);
			setSeriesList(list);
		};
		showSeries();
	}, []);

	return (
		<div className="App">
			<div className="h-2 bg-black dark:bg-white"></div>
			<section className="mt-10">
				{moviesList.map((item, key) => (
					<div key={key}>
						<MoviesSection
							key={key}
							list={item.listType}
							title={item.title}
							items={item.items}
						/>
					</div>
				))}
				{seriesList.map((item, key) => (
					<div key={key}>
						<SeriesSection
							key={key}
							list={item.listType}
							title={item.title}
							items={item.items}
						/>
					</div>
				))}
			</section>
		</div>
	);
}

export default Home;

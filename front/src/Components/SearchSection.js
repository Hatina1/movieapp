import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchSection({ moviesList, seriesList }) {
	const [searchValue, setSearchValue] = useState("");

	const [filteredMoviesList, setFilteredMoviesList] = useState([]);

	/*
    	let topRatedList = moviesList[0].items.results;

		let filteredMovies = topRatedList.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue)
    );*/

	const searchMovies = (e) => {
		const keyword = e.target.value;

		if (keyword !== "") {
			const filteredMovies = moviesList.filter((movie) => {
				return movie.title.toLowerCase().startsWith(keyword.toLowerCase());
			});
			setFilteredMoviesList(filteredMovies);
		}
		setSearchValue(searchValue);
	};

	return (
		<>
			<form className="my-10">
				<input
					type="text"
					placeholder="Tapez votre recherche"
					onChange={searchMovies}
				/>
			</form>
			{searchValue && (
				<div className="flex flex-row p-4 items-center bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-800 border-none relative overflow-x-scroll overflow-x-hidden max-w-max w-11/12 my-5 mx-auto">
					{filteredMoviesList[0].items.results.length > 0 &&
						filteredMoviesList[0].items.results.map((item, key) => (
							<figure
								key={key}
								className="px-4 w-48 h-80 cursor-pointer whitespace-nowrap "
							>
								<Link to="/profil">
									<div className="relative group">
										<img
											className="object-cover max-w-none h-64 transition ease-in-out hover:scale-105 hover:shadow-l hover:opacity-25  "
											alt={item.title}
											src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
										/>
										<div
											className="opacity-0 absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-full flex 
 justify-center items-center border border border-zinc-500 p-6 w-6 h-6 bg-zinc-800  group-hover:opacity-100"
										>
											+
										</div>
									</div>
								</Link>
								<figcaption className="pt-2 h-16 dark:text-white text-dark font-bold text-ellipsis overflow-hidden ...">
									{item.title}
								</figcaption>
							</figure>
						))}
				</div>
			)}
		</>
	);
}

export default SearchSection;

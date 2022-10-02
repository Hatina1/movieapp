const API_KEY = process.env.REACT_APP_API_MOVIES_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
	return await fetch(
		`${API_URL}${endpoint}?api_key=${API_KEY}&language=fr&page=1`
	).then((res) => res.json());
};

export const getHomeMovies = async () => {
	return [
		{
			listType: "Films",
			category: "top-rated",
			title: "Les mieux notés",
			items: await fetchMovies("movie/top_rated/"),
		},
		{
			listType: "Films",
			category: "popular",
			title: "Les plus populaires",
			items: await fetchMovies("movie/popular/"),
		},
		{
			listType: "Films",
			category: "upcoming",
			title: "A venir",
			items: await fetchMovies("movie/upcoming/"),
		},
	];
};

export const getHomeSeries = async () => {
	return [
		{
			listType: "Séries",
			category: "top-rated",
			title: "Mieux notés",
			items: await fetchMovies("tv/top_rated/"),
		},
		{
			listType: "Séries",
			category: "popular",
			title: "Les plus populaires",
			items: await fetchMovies("tv/popular/"),
		},
		{
			listType: "Séries",
			category: "upcoming",
			title: "A venir",
			items: await fetchMovies("tv/popular/"),
		},
	];
};

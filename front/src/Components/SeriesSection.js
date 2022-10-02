function SeriesSection({ list, title, items }) {
	return (
		<div className="flex flex-col ">
			<h3 className="self-start pl-10 pt-4 font-bold text-2xl  dark:text-white">
				{list} - {title}
			</h3>
			<div className="flex flex-row p-4 items-center bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-800 border-none relative overflow-x-scroll overflow-x-hidden max-w-max w-11/12 my-5 mx-auto">
				{items.results.length > 0 &&
					items.results.map((item, key) => (
						<figure
							key={key}
							className="px-4 w-48 h-80  cursor-pointer whitespace-nowrap"
						>
							<img
								className="object-cover max-w-none h-64 transition ease-in-out hover:scale-105 hover:shadow-l"
								alt={item.name}
								src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
							/>
							<figcaption className="pt-2 h-16 dark:text-white text-dark font-bold text-ellipsis overflow-hidden ...">
								{item.name}
							</figcaption>
						</figure>
					))}
			</div>
		</div>
	);
}

export default SeriesSection;

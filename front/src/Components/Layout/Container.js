import Header from "./Header";

export default function Container({ children }) {
	return (
		<div>
			<Header />
			<main className="bg-zinc-100 dark:bg-zinc-900">{children}</main>
		</div>
	);
}

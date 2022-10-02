//import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/Layout/Container";
import Home from "./Components/Home";
import "./App.css";
import SignupForm from "./Components/Forms/SignupForm";
import LoginForm from "./Components/Forms/LoginForm";
import RequireAuth from "./helper/RequireAuth";

function App() {
	return (
		<div className="App">
			<Container>
				<Routes>
					<Route
						path="/"
						element={
							<RequireAuth withAuth={false}>
								<Home />
							</RequireAuth>
						}
					></Route>
				</Routes>
				<Routes>
					<Route
						path="/signup"
						element={
							<RequireAuth withAuth={false}>
								<SignupForm />
							</RequireAuth>
						}
					></Route>
				</Routes>

				<Routes>
					<Route
						path="/login"
						element={
							<RequireAuth withAuth={false}>
								<LoginForm />
							</RequireAuth>
						}
					></Route>
				</Routes>
			</Container>
		</div>
	);
}

export default App;

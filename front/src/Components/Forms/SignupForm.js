import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../ApiUsers";

export default function SignupForm() {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const inputHandler = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();

		saveUser(values)
			.then((res) => {
				if (res.status === 201) {
					return navigate(" /login");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="flex flex-col items-center w-full h-screen bg-gray-50">
			<form
				className="bg-white shadow-md rounded-lg px-16 pt-10 pb-20 mt-8"
				onSubmit={submitForm}
			>
				<div className="mb-5">
					<label className="text-gray-700 text-lg font-bold">SIGN UP</label>
				</div>
				<div>
					<input
						className="shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Email"
						autoComplete="current-email"
						name="email"
						value={values.email}
						onChange={inputHandler}
					/>
				</div>
				<div>
					<input
						className="shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						type="password"
						placeholder="Password"
						autoComplete="current-password"
						name="password"
						value={values.password}
						onChange={inputHandler}
					/>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Inscription
				</button>
			</form>
		</div>
	);
}

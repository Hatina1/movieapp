import axios from "axios";

export const saveUser = (data) => {
	return axios
		.post(`${process.env.REACT_APP_API_USER_URL}/api/user/signup`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
export const loginUser = (data) => {
	return axios
		.post(`${process.env.REACT_APP_API_USER_URL}/api/user/login`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const checkToken = (token) => {
	return axios
		.get(`${process.env.REACT_APP_API_USER_URL}/api/auth/checkToken`, {
			headers: { authorization: "Bearer " + token },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

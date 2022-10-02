import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer";

export const Store = configureStore({
	reducer: {
		user, //user:user
	},
});

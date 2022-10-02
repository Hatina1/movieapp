const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const DB = "stackoverflou";
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zesvqvc.mongodb.net/?retryWrites=true&w=majority`;

const MongoDBClient = {
	initialize: () => {
		try {
			const client = mongoose.connect(URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});

			client
				.then(() => {
					return console.log(`successfully connected to DB`);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			throw Error(err);
			console.log(err);
		}
	},
};

MongoDBClient.initialize();
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.get("/", (req, res, next) => {
	res.json({ status: 200, msg: "ok" });
});

userRoutes(app);
//authRoutes(app);

// module exportation
module.exports = app;

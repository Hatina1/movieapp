const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.APP_SECRET;
const auth = require("../middlewares/auth");

module.exports = (app) => {
	const User = require("../models/user");

	app.post("/api/user/signup", async (req, res) => {
		const hash = await bcrypt.hash(req.body.password, saltRound);

		const data = {
			email: req.body.email,
			password: hash,
			creationDate: new Date(),
		};

		const user = await new User(data);
		const result = await user.save();

		res.json({ status: 201, result, result });
	});

	app.get("/api/user/:id", auth, async (req, res) => {
		const id = req.params.id;

		const user = await User.find({ _id: id });

		res.json({ status: 200, user: user[0] });
	});

	app.post("/api/user/login", async (req, res) => {
		const user = await User.find({ email: req.body.email });

		if (user.length <= 0) {
			res.json({ status: 404, error: "user email not found" });
		} else {
			const compare = await bcrypt.compare(req.body.password, user[0].password);
			if (compare) {
				const payload = { email: user[0].email, id: user[0]._id };
				const token = jwt.sign(payload, secret);
				res.json({ status: 200, data: { token, user: user[0] } });
			} else {
				res.json({ status: 401, error: "not allowed bad password" });
			}
		}
	});
};

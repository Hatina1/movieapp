const jwt = require("jsonwebtoken");
const secret = process.env.APP_SECRET;

module.exports = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	if (token === undefined) {
		res.json({ status: 404, data: { msg: "Token not found" } });
	} else {
		jwt.verify(token, secret, (err, decoded) => {
			if (err) {
				res.json({ status: 401, data: { msg: "Invalid Token !!!" } });
			} else {
				//l'id concerné est donc celui dans l'objet decoded et la valeur de la clé id
				req.body._id = decoded.id;
				next();
			}
		});
	}
};

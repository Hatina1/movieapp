const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Mongoose.Schema(
	{
		email: { type: String, required: true },
		password: { type: String, required: true },
		creationDate: { type: Date, required: true },
	},
	{ collection: "user" }
);

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("user", userSchema);

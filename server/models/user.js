var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: [2, "Username must be at least 2 characters"]
	}
});


mongoose.model('User', UserSchema);
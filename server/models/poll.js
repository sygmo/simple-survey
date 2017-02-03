var mongoose = require("mongoose");

var PollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
		minlength: [8, "Question must be at least 8 characters"]
	},
	option1: {
		type: String,
		required: true,
		minlength: [3, "Option must be at least 3 characters"]
	},
	option2: {
		type: String,
		required: true,
		minlength: [3, "Option must be at least 3 characters"]
	},
	option3: {
		type: String,
		required: true,
		minlength: [3, "Option must be at least 3 characters"]
	},
	option4: {
		type: String,
		required: true,
		minlength: [3, "Option must be at least 3 characters"]
	}
}, { timestamps: true });


mongoose.model('Poll', PollSchema);
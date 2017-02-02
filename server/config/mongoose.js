var mongoose = require("mongoose"),
	db = "mongodb://localhost/surveyDB",
	path = require("path"),
	fs = require("fs");

mongoose.connect(db);

require("./../models/user.js");
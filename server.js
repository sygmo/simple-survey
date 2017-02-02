var express = require("express"),
	bodyParser = require("body-parser"),
	path = require("path"),
	app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/bower_components"));

var mongoose = require("./server/config/mongoose.js");
//var routeSetter = require("./server/config/routes.js")(app);
require("./server/config/routes.js")(app);

app.listen(8000, function(){
	console.log("running on 8000");
})
var users = require("./../controllers/users.js");
var polls = require("./../controllers/polls.js");

module.exports = function(app){
	console.log("routes imported");
	app.post('/users', users.create);
	app.post('/login', users.login);
	app.post('/poll', polls.create);
}

console.log("Routes loaded");
var users = require("./../controllers/users.js");
var polls = require("./../controllers/polls.js");

module.exports = function(app){
	console.log("routes imported");
	app.post('/users', users.create);
	app.post('/login', users.login);
	app.post('/polls', polls.create);
	app.get('/polls', polls.index);
	app.get('/show', polls.show);
}

console.log("Routes loaded");
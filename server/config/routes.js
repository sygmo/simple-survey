var users = require("./../controllers/users.js");
var polls = require("./../controllers/polls.js");

module.exports = function(app){
	console.log("routes imported");
	app.post('/users', users.create);
	app.post('/login', users.login);
	app.post('/polls', polls.create);
	app.get('/polls', polls.index);
	app.get('/polls/:id', polls.show);
	app.delete('/polls/:id', polls.delete);
}

console.log("Routes loaded");
var mongoose = require("mongoose");
var Poll = mongoose.model("Poll");

module.exports = function(){
	console.log("Server-side Controller loaded up");
	return {
		index: function(req, res){
			Poll.find({}, function (err, results){
				res.json(results);
			})
		},
		create: function(req, res){
			console.log(req.body);
			var newPoll = new Poll(req.body);
			newPoll.save(function(err, data){
				if(err){
					console.log("GOT ERROR");
					console.log(err);
					res.status(422);
					res.json(err);
				} else{
					console.log(data);
					res.json(data);
				}
			})
		}
	}
}();
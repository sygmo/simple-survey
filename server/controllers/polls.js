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
		show: function(req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				if (err){
					console.log(err);
					res.status(422);
					res.json(err);
				} else{
					res.json(poll);
				}
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
		},
		delete: function(req, res){
			Poll.remove({_id: req.params.id}, function (err){
				res.json("successfully deleted poll");
			})
		}
	}
}();
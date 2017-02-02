var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = function(){
	console.log("Server-side Controller loaded up");
	return {
		create: function(req, res){
			console.log(req.body);
			var newUser = new User(req.body);
			newUser.save(function(err, data){
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
		login: function(req, res){
			console.log(req.body);
			var user = User.findOne({username: req.body.username}, function(err, data){
				if(data == null){
					console.log("inside if err");
					console.log(err);
					res.status(422);
					// err.data = "failed";
					// res.json(data);
					res.json({data: {errors: {login: {message: "Invalid Credentials"}}}});
				} else if(data){
					console.log("inside else if");
					console.log(data);
					res.json({_id: data._id});
				} else{
					console.log("got to final else which means password was wrong");
					res.status(422);
					res.json({data: {errors: {login: {message: "Invalid Credentials"}}}});
				}
			});
		}
	}
}();
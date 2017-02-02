myApp.controller('usersController', ['userFactory', '$location', function (userFactory, $location){
	console.log("users controller loaded");

	if(userFactory.loggedUser._id){
		console.log("user logged in");
	} else{
		console.log("not logged in");
	}
	var self = this;
	this.validationErrors;
	this.register = function(){
		console.log(self.regUser);
		userFactory.register(self.regUser, function(data){
			console.log("first callback in UC.register");
			// console.log(data);
		}, function(error){
			console.log("second callback in UC.register");
			// console.log(error);
			self.validationErrors = error.data.errors;
			console.log(this.validationErrors);
		})
	}
	this.login = function(){
		console.log(self.logUser);
		userFactory.login(self.logUser, function(data){
			console.log("first callback, everything is good");
			//console.log(data);
			userFactory.setLogin(data);
			$location.url('/dashboard');
		}, function(error){
			console.log("second callback");
			//console.log(error);
			self.validationErrors = error.data.data.errors;
		})
	}
}])

myApp.controller('pollsController', ['pollFactory', '$location', '$routeParams', function (pollFactory, $location, $routeParams){
	console.log("polls controller loaded");

	var self = this;
	var setPolls = function (polls){
		self.polls = polls;
	}
	pollFactory.getPolls(setPolls);

	this.validationErrors;
	this.create = function(){
		console.log(self.poll);
		pollFactory.create(self.poll, function(data){
			console.log("first callback in CC.create");
			$location.url('/dashboard');
		}, function(error){
			console.log("second callback in CC.create");
			// console.log(error);
			self.validationErrors = error.data.errors;
			console.log(this.validationErrors);
		})
	}
	this.showPoll = function(){
		pollFactory.showPoll($routeParams.id, function (poll){
			self.poll = poll;
		})
	}
}])
myApp.factory('userFactory', function ($http){
	console.log("userFactory loaded up");
	var factory = {};

	factory.loggedUser = {};

	factory.register = function(user, callback, errorCallback){
		console.log(user);
		$http.post('/users', user).then(callback, errorCallback);
	}
	factory.login = function(user, callback, errorCallback){
		console.log(user);
		$http.post('/login', user).then(callback, errorCallback);
	}
	factory.setLogin = function(user){
		factory.loggedUser = user;
	}

	return factory;
})


myApp.factory('pollFactory', function ($http){
	console.log("pollFactory loaded up");
	var factory = {};

	factory.getPolls = function (callback){
		$http.get('/polls').then(function (response){
			polls = response.data;
			if (typeof callback == 'function'){
				callback(polls);
			}
		});
	}
	factory.getPoll = function(id, callback){
		$http.get(`/polls/${id}`).then(function (response){
			callback(response.data);
		});
	}
	factory.create = function(poll, callback, errorCallback){
		console.log(poll);
		$http.post('/polls', poll).then(callback, errorCallback);
	}
	factory.delete = function(id, callback){
		$http.delete(`/polls/${id}`).then(function (response){
			factory.getPolls(callback);
		})
	}

	return factory;
})
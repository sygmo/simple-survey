myApp.factory('userFactory', function($http){
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


myApp.factory('createFactory', function($http){
	console.log("createFactory loaded up");
	var factory = {};

	factory.create = function(poll, callback, errorCallback){
		console.log(poll);
		$http.post('/poll', poll).then(callback, errorCallback);
	}

	return factory;
})
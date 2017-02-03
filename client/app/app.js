//var app = angular.module('friendsApp', ['ngRoute']);
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'pollsController',
			controllerAs: 'pc'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'pollsController',
			controllerAs: 'pc'
		})
		.when('/view/:id', {
			templateUrl: 'partials/view.html',
			controller: 'pollsController',
			controllerAs: 'pc'
		})
		.when('/dashboard/:id', {
			templateUrl: 'partials/dashboard.html',
			controller: 'pollsController',
			controllerAs: 'pc'
		})
})
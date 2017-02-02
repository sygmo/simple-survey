//var app = angular.module('friendsApp', ['ngRoute']);
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboardController',
			controllerAs: 'dc'
		})
		.when('/poll', {
			templateUrl: 'partials/new.html',
			controller: 'pollController',
			controllerAs: 'pc'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'createController',
			controllerAs: 'cc'
		})
})
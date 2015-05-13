(function(){
	'use strict';

	angular
		.module('app')
		.config(config);

	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider
		    .state('index', {
		      		url: "/",
		      		templateUrl: "partials/home.html"
		})
	}
})();
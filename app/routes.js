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
		      		controller: "FeedController",
		      		controllerAs: "vm",
		      		templateUrl: "partials/trailer.html"
			})
			.state('trailer', {
					url: "/trailer/:id",
					controller: "FeedController",
					controllerAs: "vm",
					templateUrl: "partials/trailer.html"
			});
	}
})();
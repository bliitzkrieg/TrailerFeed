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
		      		templateUrl: "partials/video.html"
			})
			.state('video', {
					url: "/video/:id",
					controller: "FeedController",
					controllerAs: "vm",
					templateUrl: "partials/video.html"
			});
	}
})();
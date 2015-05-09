(function(){
	'use strict';

	angular
		.module('app')
		.config(config);

	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html'
			})
			.otherwise( { 
				redirectTo: "/" 
			});
	}

})();
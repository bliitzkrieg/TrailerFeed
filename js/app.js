'use strict';

(function(){
	var app = angular.module('app', [ ]);

	app.controller('HelloWorldController', ['$scope', function($scope) {
		$scope.greeting = 'Hello World!';
	}]);

})();
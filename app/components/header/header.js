(function(){
	'use strict';

	angular
		.module('app')
		.directive('popcornHeader', popcornHeader);

		function popcornHeader(){
			var directive = {
				restrict: 'E',
				templateUrl:'components/header/_header.html'
			}
			return directive;
		}
})();
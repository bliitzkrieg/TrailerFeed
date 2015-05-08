(function(){
	'use strict';

	angular
		.module('app')
		.directive('popcornHeader', popcornHeader);

		function popcornHeader(){
			var directive = {
				restrict: 'E',
				templateUrl:'components/header/header.html'
			}
			return directive;
		}
})();
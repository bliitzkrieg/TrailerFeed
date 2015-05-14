(function(){
	'use strict';

	angular
		.module('app.feed')
		.directive('youtubeFeed', youtubeFeed);

		function youtubeFeed(){
			var directive = {
				restrict: 'E',
				templateUrl:'components/feed/feed.html'
			}
			return directive;
		}
})();

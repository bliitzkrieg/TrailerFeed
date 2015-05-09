(function(){
	
	angular
		.module('app.feed')
		.controller('FeedController', FeedController);


		function FeedController(){
			var vm = this;
			vm.videoID = 'dQw4w9WgXcQ'; // Get from API via factory
			vm.title = "Rick Astley - Never Gonna Give You Up" // Get from API via factory
			vm.length = "3:32" // Get from API via factory
		}

})();

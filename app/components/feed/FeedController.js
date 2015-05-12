(function(){
	
	angular
		.module('app.feed')
		.controller('FeedController', FeedController);

		FeedController.$inject = ['apiservice', '$scope'];

		function FeedController(apiservice, $scope){
			var vm = this;
			vm.trailers = [];

			initiate().then(function(){
				vm.videoID = vm.trailers[0].video;
				vm.title = vm.trailers[0].title;
				vm.length = vm.trailers[0].length;
			});

			function initiate(){
				return getTrailers();
			}

			function getTrailers(){
				return apiservice.getTrailers()
					.then(function(data){
						vm.trailers = data;
						return vm.trailers;
					});
			}

			$scope.$on('youtube.player.ended', function ($event, player) {
				//Hardcoded for now
			    vm.videoID = 'dQw4w9WgXcQ'; // Get from API via factory
				vm.title = "Rick Astley - Never Gonna Give You Up"; // Get from API via factory
				vm.length = "3:32"; // Get from API via factory

				$scope.vars = {
					autoplay: 1
				}

			    player.playVideo();
			});
		}

})();

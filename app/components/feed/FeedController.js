(function(){
	
	angular
		.module('app.feed')
		.controller('FeedController', FeedController);

		FeedController.$inject = ['$scope', 'apiservice'];

		function FeedController($scope, apiservice){
			var vm = this;
			vm.trailer;
			vm.id = 1;

			getTrailer(vm.id);

			function getTrailer(userID){
				vm.trailer = apiservice.get({user: userID});
			};

			$scope.$on('youtube.player.ended', function ($event, player) {
				//Todo: Change to get 10, cycle through & add pagination to API
				vm.id = vm.id + 1;
				getTrailer(vm.id);

				$scope.vars = {
					autoplay: 1
				}

			    player.playVideo();
			});
		}

})();

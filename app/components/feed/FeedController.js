(function(){
	
	angular
		.module('app.feed')
		.controller('FeedController', FeedController);

		FeedController.$inject = ['$scope', 'apiservice', "$stateParams"];

		function FeedController($scope, apiservice, $stateParams){
			var vm = this;
			vm.trailer;

			vm.id = $stateParams.id === undefined ? 1 : $stateParams.id;

			getTrailer(vm.id);

			function getTrailer(userID){
				vm.trailer = apiservice.get({user: userID});
			};

			$scope.$on('youtube.player.ended', function ($event, player) {
				//Todo: Change to get 10, cycle through & add pagination to API
				vm.id++;
				vm.previous = vm.trailer.id;
				getTrailer(vm.id);

				if(vm.previous === vm.trailer.id){
					$scope.vars = {
						autoplay: 1
					}	
				}

			    player.playVideo();
			});
		}

})();

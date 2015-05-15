(function(){
	
	angular
		.module('app.feed')
		.controller('FeedController', FeedController);

		FeedController.$inject = ['$scope', 'apiservice', "$stateParams"];

		function FeedController($scope, apiservice, $stateParams){
			var vm = this;
			vm.trailer;

			if($stateParams.id){
				setAutoplay(false);
				vm.trailer = getTrailer($stateParams.id);	
			}
			else{
				setAutoplay(true);
				vm.trailers = getTrailers().$promise.then(function(data){
					vm.trailers = data;
					vm.trailer = _.first(vm.trailers);
				});
			}

			function setAutoplay(status){
				$scope.vars = {
					autoplay: status
				}
			}

			function getTrailer(id){
				return apiservice.getTrailer().get({id: $stateParams.id});
			}

			function getTrailers(pageNo){
				pageNo = typeof pageNo !== 'undefined' ? pageNo : 1;
				return apiservice.getTrailers().query({page: pageNo});//.$promise.then(callback);
			}

			$scope.$on('youtube.player.ended', function ($event, player) {
				vm.trailers = _.drop(vm.trailers, 1);

				if(vm.trailers.length == 0){
					//Fetch 25 more and append to history service
				}

				vm.trailer = _.first(vm.trailers);

			    player.playVideo();
			});
		}

})();

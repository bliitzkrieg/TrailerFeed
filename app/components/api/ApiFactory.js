(function(){

	angular.module('app.api')
		.factory('apiservice', apiservice);

	apiservice.$inject = ['$http', 'api_constants'];

	function apiservice($http, api_constants){
		return{
			getTrailers: getTrailers
		};

		function getTrailers(){
			return $http.get(api_constants.API_GET)
           		.then(getTrailersComplete)
            	.catch(getTrailersFailed);

	        function getTrailersComplete(response) {
	            return response.data;
	        }

	        function getTrailersFailed(error) {
	           console.log('XHR Failed for getTrailers.' + error.data);
	        }
		}
	}

})();
(function(){

	angular.module('app.api')
		.factory('apiservice', apiservice);

	apiservice.$inject = ['$http', '$resource', 'api_constants'];

	function apiservice($http, $resource, api_constants){
		return  {
			getTrailer: function() {
				return $resource(api_constants.API_GET + "/:id", {id: '@id'});
			},
			getTrailers: function() {
				return $resource(api_constants.API_GET + "?page=:page", {page: '@page'});
			}
		}
	}

})();
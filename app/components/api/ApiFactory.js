(function(){

	angular.module('app.api')
		.factory('apiservice', apiservice);

	apiservice.$inject = ['$http', '$resource', 'api_constants'];

	function apiservice($http, $resource, api_constants){
		return $resource(api_constants.API_GET + "/:user", {user: '@user'});
	}

})();
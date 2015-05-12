(function(){
	'use strict';

	angular
		.module('app.api')
			.constant('api_constants', {
				API_GET: 'https://trailerfeedapi.herokuapp.com/trailers'
		 	});

})();
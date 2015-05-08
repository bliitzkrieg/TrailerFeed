(function(){
	
	angular
		.module('app.feed')
		.controller('HelloWorldController', HelloWorldController);


		function HelloWorldController(){
			var vm = this;
			vm.greeting = 'Hello World!';
		}

})();
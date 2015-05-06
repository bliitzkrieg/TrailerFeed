(function(){
	
	angular
		.module('app')
		.controller('HelloWorldController', HelloWorldController);


		function HelloWorldController(){
			var vm = this;
			vm.greeting = 'Hello World!';
		}
})();
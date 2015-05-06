'use strict';

describe('see if Hello World appears', function() {

	beforeEach(module('app'));

    var scope, createController;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('HelloWorldController', {
                '$scope': scope
            });
        };
    }));


	it('says hello world!', function () {
		var controller = createController();
		expect(controller.greeting).toEqual("Hello World!");
	});

});
'use strict';

describe('Layout Check', function() {

	beforeEach(module('app'));

    var scope, compile, elm;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
        elm = angular.element('<popcorn-header></popcorn-header>');
        $compile(elm)(scope);
        scope.$digest();
    }));

    describe('Check if header exists', function(){
        it('should have header element', function(){
            var contents = elm.find('nav.navbar');
            expect(contents.length);
        });
    });
});
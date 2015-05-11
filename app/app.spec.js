'use strict';

describe('Layout Check', function() {

	beforeEach(module('app'));

    var scope, compile, createController;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    describe('Check if header exists', function(){
        it('should have header element', function(){
            var template = compile("<popcorn-header></popcorn-header>")(scope);
            scope.$digest();
            var templateAsHtml = template.html();
            expect(templateAsHtml).toContain("navbar navbar-inverse navbar-fixed-top");
        });
    });

});
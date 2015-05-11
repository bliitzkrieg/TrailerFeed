'use strict';

describe('see if a wild youtube appears', function() {

	beforeEach(module('app.feed'));

    var scope, createController;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('FeedController', {
                '$scope': scope
            });
        };
    }));

    describe('see if there is a youtube video id', function(){
        it('should have a youtube id', function(){
            var controller = createController();
            expect(controller.videoID).toEqual("dQw4w9WgXcQ");
        });
    });

    describe('see if there is a youtube video title', function(){
        it('should have a youtube title', function(){
            var controller = createController();
            expect(controller.title).toEqual("Rick Astley - Never Gonna Give You Up");
        });
    });

    describe('see if there is a youtube video length', function(){
        it('should have a youtube video length', function(){
            var controller = createController();
            expect(controller.length).toEqual("3:32");
        });
    });
});
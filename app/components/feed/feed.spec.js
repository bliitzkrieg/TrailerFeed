'use strict';

describe('see if a wild youtube appears', function() {

	beforeEach(module('app.feed'));

    describe('see if there is a youtube video id', function(){
        it('should equal same as mock db call', 
            inject(function(_$httpBackend_, $rootScope, $controller) {
                var scope = $rootScope.$new();
                var mockBackend = _$httpBackend_;
         
                mockBackend.expectGET('https://trailerfeedapi.herokuapp.com/trailers/1').
                  respond({"id":1,"title":"Shaping Up with AngularJS song","video":"kkBsNU16O0E","length":"0:27","created_at":"2015-05-12T00:40:59.444Z","updated_at":"2015-05-12T00:40:59.444Z"});
         
                var ctrl = $controller('FeedController', {$scope: scope});
                
                mockBackend.flush();  
                
                expect(ctrl.trailer.length).toEqual("0:27");
                expect(ctrl.trailer.video).toEqual("kkBsNU16O0E");
                expect(ctrl.trailer.title).toEqual("Shaping Up with AngularJS song");
          }));
 
    });
});
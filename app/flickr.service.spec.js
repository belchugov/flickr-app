'use strict';

describe('Data model: FlickrService', function () {
    var service;

    beforeEach(module('flickr-app'));

    beforeEach(inject(function (_FlickrService_) {
        service = _FlickrService_;
    }));

    it('Should have service', function () {
        expect(service).toBeDefined();
    });

    describe('getImages()', function() {
        it('Should have getImages', function() {
            expect(service.getImages).toBeDefined();
        });
    });

    describe('getImageDetail()', function() {
        it('Should have getImageDetail', function() {
            expect(service.getImageDetail).toBeDefined();
        });
    });
});

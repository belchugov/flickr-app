'use strict';

describe('myVillains component', function() {

    describe('moreInfo()', function() {
        it('should call getImageDetail() on the FlickrService', function() {
            var $ctrl = getComponentController();
            inject(function(FlickrService, $q) {
                spyOn(FlickrService, 'getImageDetail').and.returnValue($q.when([]));
                $ctrl.moreInfo();
                expect(FlickrService.getImageDetail).toHaveBeenCalled;
            });
        });
    });

    function getComponentController() {
        var $ctrl;
        module('flickr-app');
        inject(function($componentController) {
            $ctrl = $componentController('imageDetail');
        });
        return $ctrl;
    }
});

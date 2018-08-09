(function() {
    'use strict';

    /**
     * @ngdoc component
     * @module flickr-app
     * @name imageDetail
     *
     * @description Component for listing image details
     */
    angular
        .module('flickr-app')
        .component('imageDetail', {
            templateUrl: 'app/image-detail/image-detail.html',
            bindings: {
                photo: '<'
            },
            controller: ImageDetailController
        });

    /**
     * @ngdoc controller
     * @module flickr-app
     * @name ImageDetailController
     *
     * @param FlickrService
     * @description Controller for imageDetail component
     */
    function ImageDetailController(FlickrService) {
        var _this = this;
        _this.moreInfo = moreInfo;

        function moreInfo() {
            return FlickrService.getImageDetail(_this.photo)
                .then(function (response) {
                    _this.photoDetail = response.data.photo;
                }).catch(function (error) {
                    console.log(error);
                })
        }
    }

})();

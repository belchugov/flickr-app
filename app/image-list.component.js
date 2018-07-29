(function() {
    'use strict';

    angular
        .module('flickr-app')
        .component('imageList', {
            templateUrl: './app/image-list.html',
            controller: function ImageListController(FlickrService) {
                var _this = this;

                this.$onInit = function () {
                    getImagesBySearch();
                };

                function getImagesBySearch() {
                    return FlickrService.getImagesBySearch().then(function (response) {
                        _this.photos = response.data.photos.photo;
                    }).catch(function(error) {
                        console.log(error);
                    });
                }
            }
        });
})();

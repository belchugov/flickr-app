(function() {
    'use strict';

    angular
        .module('flickr-app')
        .component('imageList', {
            templateUrl: './app/image-list.html',
            controller: function ImageListController(FlickrService) {
                var _this = this;
                _this.searchInput = 'cars';
                _this.getImagesBySearch = getImagesBySearch;

                this.$onInit = function () {
                    getImagesBySearch();
                };

                function getImagesBySearch() {
                    return FlickrService.getImagesBySearch(_this.searchInput)
                        .then(function (response) {
                            _this.photos = response.data.photos.photo;
                        }).catch(function(error) {
                            console.log(error);
                        });
                }
            }
        });
})();

(function() {
    'use strict';

    /**
     * @ngdoc component
     * @module flickr-app
     * @name imageList
     *
     * @description Component for listing images
     */
    angular
        .module('flickr-app')
        .component('imageList', {
            templateUrl: 'app/image-list/image-list.html',
            controller: ImageListController
        });

    /**
     * @ngdoc controller
     * @module flickr-app
     * @name ImageListController
     *
     * @param FlickrService
     * @description Controller for imageList component
     */
    function ImageListController(FlickrService) {
        this.FlickrService = FlickrService;
        var _this = this;
        _this.searchInput = 'cars';
        _this.getImages = getImages;
        _this.nextPage = nextPage;
        _this.photos = [];
        _this.page = 1;
        _this.busy = false;

        this.$onInit = function () {
            this.getImages();
        };

        function getImages() {
            return FlickrService.getImages(_this.searchInput)
                .then(function (response) {
                    loadImages(response)
                }).catch(function(error) {
                    console.log(error);
                });
        }

        function loadImages(response) {
            _this.photos = response.data.photos.photo;
        }

        function nextPage() {
            if (_this.busy) {
                return;
            }
            _this.busy = true;

            return FlickrService.getImages(_this.searchInput, _this.page)
                .then(function (response) {
                    _this.page++;
                    appendImages(response);
                    _this.busy = false;
                }).catch(function(error) {
                    console.log(error);
                });
        }

        function appendImages(response) {
            response.data.photos.photo.map(function (item) {
                _this.photos.push(item);
            });
        }
    }
})();

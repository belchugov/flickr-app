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
                _this.nextPage = nextPage;
                _this.photos = [];
                _this.page = 1;
                _this.busy = false;

                this.$onInit = function () {
                    getImagesBySearch();
                };

                function getImagesBySearch() {
                    if (_this.busy) {
                        return;
                    }
                    _this.busy = true;

                    return FlickrService.getImagesBySearch(_this.searchInput, _this.page)
                        .then(function (response) {
                            _this.page++;
                            response.data.photos.photo.map(function (item) {
                                _this.photos.push(item);
                            });
                            _this.busy = false;
                        }).catch(function(error) {
                            console.log(error);
                        });
                }

                function nextPage() {
                    getImagesBySearch();
                }
            }
        });
})();

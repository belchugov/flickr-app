(function() {
    'use strict';

    angular
        .module('flickr-app')
        .component('imageList', {
            template:
                '<div class="row">\n' +
                '  <div class="col-sm-4" ng-repeat="photo in $ctrl.photos">\n' +
                '    <div class="card">\n' +
                '      <div class="card-body">\n' +
                '        <h5 class="card-title">{{ photo.title }}</h5>\n' +
                '        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '        <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>',
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

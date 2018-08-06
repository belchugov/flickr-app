(function() {
    'use strict';

    angular
        .module('flickr-app')
        .component('imageDetail', {
            templateUrl: 'app/image-detail/image-detail.html',
            bindings: {
                photo: '<'
            },
            controller: function (FlickrService) {
                var _this = this;
                _this.moreInfo = moreInfo;

                function moreInfo(photo) {
                    return FlickrService.getImageDetail(_this.photo).then(function (response) {
                        console.log('response: ', response.data.photo);
                        _this.photoDetail = response.data.photo;
                    }).catch(function (error) {
                        console.log(error);
                    })
                }

            }
        });
})();

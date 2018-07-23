(function () {
    'use strict';

    angular
        .module('flickr-app')
        .service('FlickrService', FlickrService);

    FlickrService.$inject = ['$http'];

    /* @ngInject */
    function FlickrService($http) {
        this.getImages = getImages;

        ////////////////

        function getImages() {
            var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK';
            $http.jsonp(url)
                .then(function (response) {
                    return response.data;
                })
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('flickr-app')
        .service('FlickrService', FlickrService);

    FlickrService.$inject = ['$http'];

    /* @ngInject */
    function FlickrService($http) {
        this.getImages = getImages;
        this.getImagesBySearch = getImagesBySearch;

        ////////////////

        function getImages() {
            var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
            return $http.jsonp(url, {jsonpCallbackParam: 'callback'})
                .then(function (response) {
                    return response;
                }).catch(function(error) {
                    console.log(error);
                });
        }

        function getImagesBySearch() {
            return $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'ca4197b9386a9cc6d5ff7dc9e5bc25b6',
                    text: 'cars',
                    format: 'json',
                    nojsoncallback: 1
                }
            }).then(function (response) {
                console.log(response);
                return response;
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

})();

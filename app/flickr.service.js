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

        function getImages(searchTerm, page) {
            return $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'ca4197b9386a9cc6d5ff7dc9e5bc25b6',
                    text: searchTerm,
                    format: 'json',
                    nojsoncallback: 1,
                    safe_search: 3,
                    per_page: '12',
                    page: page
                }
            }).then(function (response) {
                return response;
            }).catch(function(error) {
                console.error(error);
            });
        }
    }

})();

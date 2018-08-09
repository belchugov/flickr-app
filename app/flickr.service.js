(function () {
    'use strict';

    /**
     * @ngdoc service
     * @module flickr-app
     * @name FlickrService
     *
     * @description
     * Service for geting images buy search and getting image details from flickr
     */
    angular
        .module('flickr-app')
        .service('FlickrService', FlickrService);

    FlickrService.$inject = ['$http'];

    /* @ngInject */
    function FlickrService($http) {
        this.getImages = getImages;
        this.getImageDetail = getImageDetail;

        ////////////////

        /**
         * @ngdoc method
         * @module flickr-app
         * @name FlickrService#getImages
         * @description
         * Gets the image list from flickr API buy search term
         *
         * @param {string} searchTerm
         * @param {number} page
         * @returns {Promise} A promise that returns a json object if resolved or Error if rejected
         */
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

        /**
         * @ngdoc method
         * @module flickr-app
         * @name FlickrService#getImageDetail
         * @description
         * Gets the image details from flickr API
         *
         * @param {object} image
         * @returns {Promise} A promise that returns a json object if resolved or Error if rejected
         */
        function getImageDetail(image) {
            return $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.getInfo',
                    photo_id: image.id,
                    api_key: 'ca4197b9386a9cc6d5ff7dc9e5bc25b6',
                    format: 'json',
                    nojsoncallback: 1,
                    safe_search: 3
                }
            }).then(function (response) {
                return response;
            }).catch(function(error) {
                console.error(error);
            });
        }
    }

})();

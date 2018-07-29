(function() {
    'use strict';

    angular
        .module('flickr-app')
        .config(config);

    function config($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://api.flickr.com/**'
            ]);
    }
})();

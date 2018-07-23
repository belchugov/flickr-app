(function() {
    'use strict';

    angular
        .module('flickr-app')
        .component('imageList', {
            template:
                '<ul>' +
                    '<li ng-repeat="image in $ctrl.images">' +
                        '<span>{{ image.name }}</span>' +
                        '<p>{{ image.snippet }}</p>' +
                    '</li>' +
                '</ul>',
            controller: function PhoneListController() {
                this.images = [
                    {
                        name: 'Nexus S',
                        snippet: 'Fast just got faster with Nexus S.'
                    }, {
                        name: 'Motorola XOOM™ with Wi-Fi',
                        snippet: 'The Next, Next Generation tablet.'
                    }, {
                        name: 'MOTOROLA XOOM™',
                        snippet: 'The Next, Next Generation tablet.'
                    }
                ];
            }
        });
})();

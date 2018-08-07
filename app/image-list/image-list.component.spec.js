describe('imageList component', function () {

    describe('$onInit()', function () {
        it('should load the photos', function () {
            var $ctrl = getComponentController();
            spyOn($ctrl, 'getImages');
            $ctrl.$onInit();
            expect($ctrl.getImages).toHaveBeenCalled();
        })
    });

    function getComponentController() {
        var $ctrl;
        module('flickr-app');
        inject(function($componentController) {
            $ctrl = $componentController('imageList');
        });
        return $ctrl;
    }
});

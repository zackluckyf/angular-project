describe('MyApp', function() {
    var $controller, scope, controller;

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$controller_, $rootScope) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        scope = $rootScope.$new();
        controller = $controller('MyController as mc', {
            $scope: scope
        });
    }));
    it('should give its name as Fantasy Football Trade Analyzer!', function() {
        expect(scope.mc.name).toEqual('Fantasy Football Trade Analyzer!');
    });
});

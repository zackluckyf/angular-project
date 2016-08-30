describe("Add Factory", function() {
    var scope, controller;

    beforeEach(module('myApp.data'));
    beforeEach(inject(function($controller, $rootScope, _addFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        addFactory = _addFactory_;
        controller = $controller('dataController as dc', {
            $scope: scope
        });
    }));
    it("should return an Eli Manning object when given Eli Manning", function() {
        expect(addFactory.addPlayer('Eli Manning')).toEqual({
            name: 'Eli Manning',
            value: 1
        });
    });
});

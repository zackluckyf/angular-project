describe('Calc Factory', function() {
    var scope, controller;

    beforeEach(module('myApp.data'));
    beforeEach(inject(function($controller, $rootScope, _calculateFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        calculateFactory = _calculateFactory_;
        spyOn(calculateFactory, 'calcTeamValue').and.callThrough();
        controller = $controller('dataController as dc', {
            $scope: scope
        });
    }));
    it("should return 6 given [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}]", function() {
        expect(calculateFactory.calcTeamValue([{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }])).toEqual(6);
    });
    it("should return 5 given [{name: 'Antonio Brown', value: 5}]", function() {
        expect(calculateFactory.calcTeamValue([{
            name: 'Antonio Brown',
            value: 5
        }])).toEqual(5);
    });
});

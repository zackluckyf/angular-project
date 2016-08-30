describe('Data Factory', function() {
    var scope, controller, dataFactory;

    beforeEach(module('myApp.data'));
    beforeEach(inject(function($controller, $rootScope, _dataFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        dataFactory = _dataFactory_;
        spyOn(dataFactory, 'getTeamData').and.callThrough();
        controller = $controller('dataController as dc', {
            $scope: scope
        });
    }));
    it("should return [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}] given team1", function() {
        expect(dataFactory.getTeamData('team1')).toEqual([{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }]);
    });
    it("should return [{name: 'Antonio Brown', value: 5}] given team2", function() {
        expect(dataFactory.getTeamData('team2')).toEqual([{
            name: 'Antonio Brown',
            value: 5
        }]);
    });
});

// jasmine
describe('Other Team Controller', function() {
    'use strict';
    var scope, controller, dataFactory;
    beforeEach(module('myApp.otherTeam'));
    beforeEach(inject(function($controller, $rootScope, _dataFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        dataFactory = _dataFactory_;
        spyOn(dataFactory, 'getTeamData').and.callThrough();
        controller = $controller('otherTeamController as otc', {
            $scope: scope
        });
    }));
    it('should get Team data', function() {
        expect(dataFactory.getTeamData).toHaveBeenCalledWith('team2');
    });
    it('should add a player to the correct team when using updateTeam', function() {
        var team2 = [{
            name: 'Antonio Brown',
            value: 4
        }];
        scope.otc.updateTeam('Carson Palmer', team2);
        expect(team2).toEqual([{
            name: 'Antonio Brown',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }]);
    });
});

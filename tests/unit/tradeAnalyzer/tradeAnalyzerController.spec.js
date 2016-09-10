// jasmine
describe('Trade Analyzer Controller', function() {
    'use strict';
    var scope, controller, dataFactory;
    beforeEach(module('myApp.tradeAnalyzer'));
    beforeEach(inject(function($controller, $rootScope, _dataFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        dataFactory = _dataFactory_;
        spyOn(dataFactory, 'getTeamData').and.callThrough();
        controller = $controller('tradeAnalyzerController as tac', {
            $scope: scope
        });
    }));
    it('should get Team data', function() {
        expect(dataFactory.getTeamData).toHaveBeenCalledWith('team1');
        expect(dataFactory.getTeamData).toHaveBeenCalledWith('team2');
    });
    it('should not let undefined be added to a team for example Eli Tanning', function() {
        var team1 = [{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }];
        scope.tac.updateTeam('Eli Tanning', team1);
        expect(team1).toEqual([{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }]);
    });
    it('should add a player to the correct team when using updateTeam', function() {
        var team2 = [{
            name: 'Antonio Brown',
            value: 4
        }];
        scope.tac.updateTeam('Carson Palmer', team2);
        expect(team2).toEqual([{
            name: 'Antonio Brown',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }]);
    });
    it('should return each teams player values and say that the original trade is good', function() {
        expect(scope.tac.tradeAnalysis(scope.tac.team1, scope.tac.team2)).toEqual(['Your player value: 6', 'Their player value: 5', ' This is a bad trade for you!']);
    });
});

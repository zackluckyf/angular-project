// jasmine
describe('Analyzer Controller', function() {
    'use strict';
    var scope, controller;
    beforeEach(module('myApp', 'myApp.team', 'myApp.analyzer'));
    beforeEach(inject(function($controller, $rootScope) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        controller = $controller('analyzerController as ac', {
            $scope: scope
        });
    }));
    it('should return each teams player values and say that the original trade is good', function() {
        scope.ac.team1 = [{
            id: 1,
            name: 'Adrian Peterson'
        }, {
            id: 2,
            name: 'Carson Palmer'
        }];
        scope.ac.team2 = [{
            id: 3,
            name: 'Antonio Brown'
        }];
        expect(scope.ac.tradeAnalysis(scope.ac.team1, scope.ac.team2)).toEqual(['Your player value: 28', 'Their player value: 13', ' This is a bad trade for you!']);
    });
});

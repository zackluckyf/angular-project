// jasmine
describe('Trade Analyzer Controller', function () {
  'use strict';
  var scope, controller, returnTeamFactory;
  beforeEach(module('myApp.team', 'myApp.analyzer'));
  beforeEach(inject(function ($controller, $rootScope, _returnTeamFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    returnTeamFactory = _returnTeamFactory_;
    spyOn(returnTeamFactory, 'getTeamData').and.callThrough();
    controller = $controller('analyzerController as ac', {
      $scope: scope
    });
  }));
  it('should get Team data', function () {
    expect(returnTeamFactory.getTeamData).toHaveBeenCalledWith('team1');
    expect(returnTeamFactory.getTeamData).toHaveBeenCalledWith('team2');
  });
  it('should not let undefined be added to a team for example Eli Tanning', function () {
    var team1 = [{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }];
    scope.ac.updateTeam('Eli Tanning', team1);
    expect(team1).toEqual([{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }]);
  });
  it('should add a player to the correct team when using updateTeam', function () {
    var team2 = [{
      name: 'Antonio Brown',
      value: 4
    }];
    scope.ac.updateTeam('Carson Palmer', team2);
    expect(team2).toEqual([{
      name: 'Antonio Brown',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }]);
  });
  it('should return each teams player values and say that the original trade is good', function () {
    expect(scope.ac.tradeAnalysis(scope.ac.team1, scope.ac.team2)).toEqual(['Your player value: 6', 'Their player value: 5', ' This is a bad trade for you!']);
  });
});

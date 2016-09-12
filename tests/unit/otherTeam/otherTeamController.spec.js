// jasmine
describe('Other Team Controller', function () {
  'use strict';
  var scope, controller, teamPlayersFactory;
  beforeEach(module('myApp.team', 'myApp.otherTeam'));
  beforeEach(inject(function ($controller, $rootScope, _teamPlayersFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    teamPlayersFactory = _teamPlayersFactory_;
    spyOn(teamPlayersFactory, 'getTeamData').and.callThrough();
    controller = $controller('otherTeamController as otc', {
      $scope: scope
    });
  }));
  it('should get Team data', function () {
    expect(teamPlayersFactory.getTeamData).toHaveBeenCalledWith('team2');
  });
  it('should add a player to the correct team when using updateTeam', function () {
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

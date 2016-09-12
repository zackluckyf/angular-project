// jasmine
describe('Your Team Controller', function () {
  'use strict';
  var scope, controller, teamPlayersFactory;
  beforeEach(module('myApp.team', 'myApp.yourTeam'));
  beforeEach(inject(function ($controller, $rootScope, _teamPlayersFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    teamPlayersFactory = _teamPlayersFactory_;
    spyOn(teamPlayersFactory, 'getTeamData').and.callThrough();
    controller = $controller('yourTeamController as ytc', {
      $scope: scope
    });
  }));
  it('should get Team data', function () {
    expect(teamPlayersFactory.getTeamData).toHaveBeenCalledWith('team1');
  });
  it('should not let undefined be added to a team for example Eli Tanning', function () {
    var team1 = [{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }];
    scope.ytc.updateTeam('Eli Tanning', team1);
    expect(team1).toEqual([{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }]);
  });
});

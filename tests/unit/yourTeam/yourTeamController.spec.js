// jasmine
describe('Your Team Controller', function () {
  'use strict';
  var scope, controller, returnTeamFactory;
  beforeEach(module('myApp.team', 'myApp.yourTeam'));
  beforeEach(inject(function ($controller, $rootScope, _returnTeamFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    returnTeamFactory = _returnTeamFactory_;
    spyOn(returnTeamFactory, 'returnTeam').and.callThrough();
    controller = $controller('yourTeamController as ytc', {
      $scope: scope
    });
  }));
  it('should get Team data', function () {
    expect(returnTeamFactory.returnTeam).toHaveBeenCalledWith('team1');
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

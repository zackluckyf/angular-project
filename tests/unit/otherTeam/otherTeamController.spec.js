// jasmine
describe('Other Team Controller', function () {
  'use strict';
  var scope, controller, returnTeamFactory;
  beforeEach(module('myApp.team', 'myApp.otherTeam'));
  beforeEach(inject(function ($controller, $rootScope, _returnTeamFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    returnTeamFactory = _returnTeamFactory_;
    spyOn(returnTeamFactory, 'getTeamData').and.callThrough();
    controller = $controller('otherTeamController as otc', {
      $scope: scope
    });
  }));
  it('should get Team data', function () {
    expect(returnTeamFactory.getTeamData).toHaveBeenCalledWith('team2');
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

// jasmine
describe('myApp', function () {
  'use strict';
  var scope, controller, dataFactory;
  beforeEach(module('myApp.data'));
  beforeEach(inject(function ($controller, $rootScope, _dataFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    dataFactory = _dataFactory_;
    spyOn(dataFactory, 'getTeamData').and.callThrough();
    controller = $controller('dataController as dc', {
      $scope: scope
    });
  }));
  describe('Data Controller', function () {
    it('should give its name as Fantasy Football Trade Analyzer!', function () {
      expect(scope.dc.title).toEqual('Fantasy Football Trade Analyzer!');
    });
    it('should get Team data', function () {
      expect(dataFactory.getTeamData).toHaveBeenCalledWith('team1');
      expect(dataFactory.getTeamData).toHaveBeenCalledWith('team2');
    });
    it('should not let undefined be added to a team for example Eli Tanning', function () {
      var team1 = [{
        name: 'Adrian Peterson',
        value: 4
      }, {
        name: 'Carson Palmer',
        value: 2
      }];
      scope.dc.updateTeam('Eli Tanning', team1);
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
      scope.dc.updateTeam('Carson Palmer', team2);
      expect(team2).toEqual([{
        name: 'Antonio Brown',
        value: 4
      }, {
        name: 'Carson Palmer',
        value: 2
      }]);
    });
    it('should return each teams player values and say that the original trade is good', function () {
      expect(scope.dc.tradeAnalysis(scope.dc.team1, scope.dc.team2)).toEqual('Your player value: ' + 6 + '\nTheir player value: ' + 5 + '\nThis is a bad trade for you!');
    });
  });
});

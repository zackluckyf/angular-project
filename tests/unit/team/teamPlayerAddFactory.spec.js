describe('Team Player Add Factory', function () {
  'use strict';
  var addPlayersFactory;
  beforeEach(module('myApp.team'));
  beforeEach(inject(function (_addPlayersFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    addPlayersFactory = _addPlayersFactory_;
  }));
  it('should return an Eli Manning object when given Eli Manning', function () {
    var team2 = [{
      name: 'Antonio Brown',
      value: 5
    }];
    addPlayersFactory.addPlayer('Eli Manning', team2);
    expect(team2).toEqual([{
      name: 'Antonio Brown',
      value: 5
    }, {
      name: 'Eli Manning',
      value: 1
    }]);
  });
});

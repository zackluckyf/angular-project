describe('Add Factory', function () {
  'use strict';
  var addFactory;
  beforeEach(module('myApp.data'));
  beforeEach(inject(function (_addFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    addFactory = _addFactory_;
  }));
  it('should return an Eli Manning object when given Eli Manning', function () {
    var team2 = [{
      name: 'Antonio Brown',
      value: 5
    }];
    addFactory.addPlayer('Eli Manning', team2);
    expect(team2).toEqual([{
      name: 'Antonio Brown',
      value: 5
    }, {
      name: 'Eli Manning',
      value: 1
    }]);
  });
});

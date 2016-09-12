describe('Calc Factory', function () {
  'use strict';
  var tradeValueFactory;

  beforeEach(module('myApp.team'));
  beforeEach(inject(function (_tradeValueFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    tradeValueFactory = _tradeValueFactory_;
  }));
  it("should return 6 given [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}]", function () {
    expect(tradeValueFactory.calcTeamValue([{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }])).toEqual(6);
  });
  it("should return 5 given [{name: 'Antonio Brown', value: 5}]", function () {
    expect(tradeValueFactory.calcTeamValue([{
      name: 'Antonio Brown',
      value: 5
    }])).toEqual(5);
  });
});

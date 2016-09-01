describe('Calc Factory', function () {
  'use strict';
  var calculateFactory;

  beforeEach(module('myApp.data'));
  beforeEach(inject(function (_calculateFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    calculateFactory = _calculateFactory_;
  }));
  it("should return 6 given [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}]", function () {
    expect(calculateFactory.calcTeamValue([{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }])).toEqual(6);
  });
  it("should return 5 given [{name: 'Antonio Brown', value: 5}]", function () {
    expect(calculateFactory.calcTeamValue([{
      name: 'Antonio Brown',
      value: 5
    }])).toEqual(5);
  });
});

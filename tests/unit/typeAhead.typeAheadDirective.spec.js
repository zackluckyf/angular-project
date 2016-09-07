describe('typeAheadDirective', function () {
  'use strict';
  var $compile, $rootScope;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('should change text to <p>changed!</p>', function () {
    var element = $compile('typeAhead')($rootScope);
    $rootScope.$digest();
    expect(element.html().value).toEqual('hello');
  });
});

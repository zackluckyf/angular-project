describe('App Config', function () {
  'use strict';
  var $rootScope, $location;

  function digest () {
    $rootScope.$digest();
  }
  beforeEach(module('myApp'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('app/yourTeam/yourTeam.html', '');
  }));
  it('should respond to incorrect URL', function () {
    $location.url('/tea');
    digest();
    expect($location.$$path).toEqual('/yourTeam');
  });
});

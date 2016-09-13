describe('Your Team Config', function () {
  'use strict';
  var $rootScope, $state, $location;

  function digest () {
    $rootScope.$digest();
  }
  beforeEach(module('myApp.yourTeam'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('app/yourTeam/yourTeam.html', '');
  }));
  it('should respond to yourTeam URL', function () {
    $state.go('yourTeam');
    digest();
    expect($state.current.url).toEqual('/yourTeam');
    expect($location.$$path).toEqual('/yourTeam');
  });
});

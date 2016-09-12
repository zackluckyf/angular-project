describe('Other Team Config', function () {
  'use strict';
  var $rootScope, $state, $location, state = 'home';

  function digest () {
    $rootScope.$digest();
  }
  beforeEach(module('myApp.otherTeam'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('app/pages/otherTeam/otherTeam.html', '');
  }));
  it('should respond to otherTeam URL', function () {
    $state.go('otherTeam');
    digest();
    expect($state.current.url).toEqual('/otherTeam');
    expect($location.$$path).toEqual('/otherTeam');
  });
});

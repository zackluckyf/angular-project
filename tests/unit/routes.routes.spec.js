describe('Routes', function () {
  'use strict';
  var $rootScope, $state, $location, state = 'home';

  function digest () {
    $rootScope.$digest();
  }
  beforeEach(module('myApp.routes'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('team1.html', '');
    $templateCache.put('team2.html', '');
    $templateCache.put('trade.html', '');
  }));
  it('should respond to team1 URL', function () {
    $state.go('team1');
    digest();
    expect($state.current.url).toEqual('/team1');
    expect($location.$$path).toEqual('/team1');
  });
  it('should respond to team2 URL', function () {
    $state.go('team2');
    digest();
    expect($state.current.url).toEqual('/team2');
    expect($location.$$path).toEqual('/team2');
  });
  it('should respond to trade URL', function () {
    $state.go('trade');
    digest();
    expect($state.current.url).toEqual('/trade');
    expect($location.$$path).toEqual('/trade');
  });
  it('should respond to incorrect URL', function () {
    $location.url('/tea');
    digest();
    expect($location.$$path).toEqual('/team1');
  });
});

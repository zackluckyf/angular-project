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
    $templateCache.put('pages/page1/page1.html', '');
    $templateCache.put('pages/page2/page2.html', '');
    $templateCache.put('pages/page3/page3.html', '');
  }));
  it('should respond to team1 URL', function () {
    $state.go('page1');
    digest();
    expect($state.current.url).toEqual('/page1');
    expect($location.$$path).toEqual('/page1');
  });
  it('should respond to team2 URL', function () {
    $state.go('page2');
    digest();
    expect($state.current.url).toEqual('/page2');
    expect($location.$$path).toEqual('/page2');
  });
  it('should respond to trade URL', function () {
    $state.go('page3');
    digest();
    expect($state.current.url).toEqual('/page3');
    expect($location.$$path).toEqual('/page3');
  });
  it('should respond to incorrect URL', function () {
    $location.url('/tea');
    digest();
    expect($location.$$path).toEqual('/page1');
  });
});

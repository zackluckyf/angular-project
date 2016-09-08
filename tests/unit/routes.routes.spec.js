xdescribe('Routes', function () {
  'use strict';
  var $rootScope, $state, $location, $httpBackend, state = 'home';

  function digestFlush () {
    $rootScope.$digest();
    $httpBackend.flush();
  }
  beforeEach(module('myApp.routes'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', 'team2.html')
      .respond('Made it to team2.html!');
    $httpBackend.when('GET', 'team1.html')
      .respond('Made it to team1.html!');
    $httpBackend.when('GET', 'trade.html')
      .respond('Made it to trade.html!');
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it('should respond to team1 URL', function () {
    $state.go('team1');
    digestFlush();
    expect($state.current.url).toEqual('/team1');
    expect($location.$$path).toEqual('/team1');
  });
  it('should respond to team2 URL', function () {
    $state.go('team2');
    digestFlush();
    expect($state.current.url).toEqual('/team2');
    expect($location.$$path).toEqual('/team2');
  });
  it('should respond to trade URL', function () {
    $state.go('trade');
    digestFlush();
    expect($state.current.url).toEqual('/trade');
    expect($location.$$path).toEqual('/trade');
  });
  it('should respond to incorrect URL', function () {
    $location.url('/tea');
    $rootScope.$digest();
    expect($location.$$path).toEqual('/team1');
  });
});

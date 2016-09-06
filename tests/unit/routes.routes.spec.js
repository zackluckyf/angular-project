describe('Routes', function () {
  var $rootScope, $state, $injector, Team1, state = 'home';
  beforeEach(module('myApp.routes'));
  beforeEach(inject(function (_$rootScope_, _$state_, _$injector_, _$location_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $injector = _$injector_;
    $location = _$location_;
    $httpBackend = $injector.get('$httpBackend');
    Team1 = $httpBackend.when('GET', 'team1.html')
      .respond('Made it to team1.html!');
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should respond to URL', function () {
    $state.go('team1');
    $rootScope.$digest();
    $httpBackend.flush();
    expect($state.current.url).toEqual('/team1');
    expect($location.$$path).toEqual('/team1');
  });
  it('should respond to URL without a state', function () {
    $location.url('tea');
    $rootScope.$digest();
    $httpBackend.flush();
    expect($location.$$path).toEqual('/team1');
  });
});

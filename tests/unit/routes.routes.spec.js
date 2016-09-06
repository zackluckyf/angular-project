describe('Routes', function () {
  var $rootScope, $state, $injector, state = 'home';

  beforeEach(function () {
    module('myApp.routes');

    inject(function (_$rootScope_, _$state_, _$injector_, _$location_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      $location = _$location_;
    });
  });
  it('should respond to URL', function () {
    $state.go('team');
    $rootScope.$digest();
    // console.log($state.get('team'), $state.current)
    expect($state.current.url).toEqual('/team');
  });
  it('should respond to URL without a state', function () {
    $location.url('tea');
    $rootScope.$digest();
    console.log($location);
    expect($location).toEqual('/home');
  });
});

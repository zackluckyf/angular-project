(function () {
  angular.module('myApp.routes', [ 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      // for any unmatched url, redirect to /overview
      $stateProvider.state('team', {
        url: '/team'
      });
      $urlRouterProvider.otherwise('/home');
    });
})();

(function () {
  'use strict';
  angular.module('myApp.routes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('team1', {
          url: '/team1',
          templateUrl: 'team1.html'
        })
        .state('team2', {
          url: '/team2',
          templateUrl: 'team2.html'
        })
        .state('trade', {
          url: '/trade',
          templateUrl: 'trade.html'
        });
      // for any unmatched url, redirect to /team1
      $urlRouterProvider.otherwise('/team1');
    });
})();

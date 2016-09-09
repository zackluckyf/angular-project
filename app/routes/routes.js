(function () {
  'use strict';
  angular.module('myApp.routes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('page1', {
          url: '/page1',
          templateUrl: 'pages/page1/page1.html'
        })
        .state('page2', {
          url: '/page2',
          templateUrl: 'pages/page2/page2.html'
        })
        .state('page3', {
          url: '/page3',
          templateUrl: 'pages/page3/page3.html'
        });
      // for any unmatched url, redirect to /team1
      $urlRouterProvider.otherwise('/page1');
    });
})();

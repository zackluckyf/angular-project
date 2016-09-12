(function () {
  'use strict';
  angular.module('myApp.team', []);
  angular.module('myApp.tradeValue', []);
  angular.module('myApp.otherTeam', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('otherTeam', {
          url: '/otherTeam',
          templateUrl: 'app/pages/otherTeam/otherTeam.html'
        });
    });
  angular.module('myApp.tradeAnalyzer', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('tradeAnalyzer', {
          url: '/tradeAnalyzer',
          templateUrl: 'app/pages/tradeAnalyzer/tradeAnalyzer.html'
        });
    });
  angular.module('myApp.yourTeam', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('yourTeam', {
          url: '/yourTeam',
          templateUrl: 'app/pages/yourTeam/yourTeam.html'
        });
    });
  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.tradeAnalyzer'])
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/yourTeam');
    });
})();

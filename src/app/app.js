(function () {
  'use strict';

  function otherTeamState ($stateProvider) {
    $stateProvider
      .state('otherTeam', {
        url: '/otherTeam',
        templateUrl: 'app/pages/otherTeam/otherTeam.html'
      });
  }

  function yourTeamState ($stateProvider) {
    $stateProvider
      .state('yourTeam', {
        url: '/yourTeam',
        templateUrl: 'app/pages/yourTeam/yourTeam.html'
      });
  }

  function tradeAnalyzerState ($stateProvider) {
    $stateProvider
      .state('tradeAnalyzer', {
        url: '/tradeAnalyzer',
        templateUrl: 'app/pages/tradeAnalyzer/tradeAnalyzer.html'
      });
  }

  function reroute ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/yourTeam');
  }

  angular.module('myApp.team', []);
  angular.module('myApp.tradeValue', []);
  angular.module('myApp.otherTeam', ['ui.router'])
    .config(otherTeamState);
  otherTeamState.$inject = ['$stateProvider'];
  angular.module('myApp.tradeAnalyzer', ['ui.router'])
    .config(tradeAnalyzerState);
  tradeAnalyzerState.$inject = ['$stateProvider'];
  angular.module('myApp.yourTeam', ['ui.router'])
    .config(yourTeamState);
  yourTeamState.$inject = ['$stateProvider'];
  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.tradeAnalyzer'])
    .config(reroute);
  reroute.$inject = ['$urlRouterProvider'];
})();

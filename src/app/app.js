(function () {
  'use strict';
  require('./common/teamConfig');
  require('./tradeValue/tradeValueConfig');
  require('./yourTeam/yourTeamConfig');
  require('./otherTeam/otherTeamConfig');
  require('./analyzer/analyzerConfig');

  function reroute ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/yourTeam');
  }
  reroute.$inject = ['$urlRouterProvider'];
  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.tradeAnalyzer', 'myApp.tradeValue'])
    .config(reroute);
})();

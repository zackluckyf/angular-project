(function () {
  'use strict';
  require('./common/team/teamConfig');
  require('./yourTeam/yourTeamConfig');
  require('./otherTeam/otherTeamConfig');
  require('./analyzer/analyzerConfig');

  reroute.$inject = ['$urlRouterProvider'];

  function reroute ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/yourTeam');
  }

  setupFactory.$inject = ['$http'];

  function setupFactory ($http) {
    function teamState (team) {
      return $http.get('http://localhost:8888/teams').then(function (res) {
        return res.data;
      });
    }

    function setTeam (team) {
      $http.put();
    }
    return {
      teamState: teamState,
      setTeam: setTeam
    };
  }

  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.analyzer'])
    .config(reroute)
    .factory('setupFactory', setupFactory);
})();

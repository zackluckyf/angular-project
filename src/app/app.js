(function () {
  'use strict';
  require('./common/team/teamConfig');
  require('./yourTeam/yourTeamConfig');
  require('./otherTeam/otherTeamConfig');
  require('./analyzer/analyzerConfig');

  function reroute ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/yourTeam');
  }
  // get empty values for the teams to start and then
  // setup the controllers to update the backend on page change?
  // then ahve the controllers get the state from the backend?
  // array of objects I think since I'm using ng-repeat
  // var vm = this
  function setupService () {
    return {
      teamState: teamState,
      updateTeam: updateTeam
    };
  }

  reroute.$inject = ['$urlRouterProvider'];
  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.analyzer'])
    .config(reroute)
    .factory('setupService', setupService);
})();

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
  // this.team1 = []
  // this.team2 = []
  // returnTeamFactory.returnTeam().then(function(data) {
  //     vm.team1 = data
  // })
  // returnTeamFactory.returnTeam().then(function(data) {
  //     vm.team2 = data
  // })
  reroute.$inject = ['$urlRouterProvider'];
  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.analyzer'])
    .config(reroute);
// .value(team1)
// .value(team2)
})();

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

  function SetupFactory () {
    var vm = this;
    this.yourTeam = {
      name: 'yourTeam',
      players: []
    };
    this.otherTeam = {
      name: 'otherTeam',
      players: []
    };

    function teamState (name) {
      if (name === 'yourTeam') {
        return vm.yourTeam;
      } else return vm.otherTeam;
    }

    function setTeam (team, player) {
      if (team.name === 'yourTeam') {
        vm.yourTeam.players.push(player);
      } else vm.otherTeam.players.push(player);
    }

    return {
      teamState: teamState,
      setTeam: setTeam
    };
  }

  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.analyzer'])
    .config(reroute)
    .factory('SetupFactory', SetupFactory);
}());

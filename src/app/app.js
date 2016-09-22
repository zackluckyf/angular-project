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

    function titleCase (string) {
      var words = string.split(' ');
      var firstName = words[0].split('');
      var lastName = words[1].split('');
      firstName[0] = firstName[0].toUpperCase();
      lastName[0] = lastName[0].toUpperCase();
      firstName = firstName.join('');
      lastName = lastName.join('');
      return firstName + ' ' + lastName;
    }

    function teamState (name) {
      if (name === 'yourTeam') {
        return vm.yourTeam;
      } else return vm.otherTeam;
    }

    function setTeam (team, player) {
      if (team.name === 'yourTeam') {
        vm.yourTeam.players.push(titleCase(player));
      } else vm.otherTeam.players.push(titleCase(player));
    }

    function removePlayer (team, index) {
      if (team === 'yourTeam') {
        vm.yourTeam.players.splice(index, 1);
      } else {
        vm.otherTeam.players.splice(index, 1);
      }
    }

    return {
      teamState: teamState,
      setTeam: setTeam,
      removePlayer: removePlayer
    };
  }

  angular.module('myApp', ['myApp.team', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.analyzer'])
    .config(reroute)
    .factory('SetupFactory', SetupFactory);
}());

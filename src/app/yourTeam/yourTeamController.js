(function () {
  'use strict';
  angular.module('myApp.yourTeam')
    .controller('yourTeamController', YourTeamController);

  YourTeamController.$inject = ['SetupFactory', 'playersFactory'];

  function YourTeamController (SetupFactory, playersFactory) {
    this.yourTeam = SetupFactory.teamState('yourTeam');
    this.updateTeam = function (player, team) {
      playersFactory.loadAndAddPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
    };
    this.remove = function (team, index) {
      playersFactory.removePlayer(team, index);
    };
  }
}());

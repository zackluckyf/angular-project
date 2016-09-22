(function () {
  'use strict';
  angular.module('myApp.yourTeam')
    .controller('yourTeamController', YourTeamController);

  YourTeamController.$inject = ['SetupFactory', 'addPlayersFactory'];

  function YourTeamController (SetupFactory, addPlayersFactory) {
    this.yourTeam = SetupFactory.teamState('yourTeam');
    this.updateTeam = function (player, team) {
      addPlayersFactory.loadAndAddPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
    };
    this.remove = function (team, index) {
      SetupFactory.removePlayer(team, index);
    };
  }
}());

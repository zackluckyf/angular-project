(function () {
  'use strict';
  angular.module('myApp.yourTeam')
    .controller('yourTeamController', YourTeamController);

  YourTeamController.$inject = ['teamPlayersFactory', 'addPlayersFactory'];

  function YourTeamController (teamPlayersFactory, addPlayersFactory) {
    this.team1 = teamPlayersFactory.getTeamData('team1');
    this.updateTeam = function (player, team) {
      addPlayersFactory.addPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
    };
  }
}());

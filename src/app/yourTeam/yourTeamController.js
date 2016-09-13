(function () {
  'use strict';
  angular.module('myApp.yourTeam')
    .controller('yourTeamController', YourTeamController);

  YourTeamController.$inject = ['returnTeamFactory', 'addPlayersFactory'];

  function YourTeamController (returnTeamFactory, addPlayersFactory) {
    this.team1 = returnTeamFactory.getTeamData('team1');
    this.updateTeam = function (player, team) {
      addPlayersFactory.addPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
    };
  }
}());

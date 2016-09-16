(function () {
  'use strict';
  angular.module('myApp.yourTeam')
    .controller('yourTeamController', YourTeamController);

  YourTeamController.$inject = ['returnTeamFactory', 'addPlayersFactory'];

  function YourTeamController (returnTeamFactory, addPlayersFactory) {
    var vm = this;

    this.updateTeam = function (player, team) {
      addPlayersFactory.addPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
    };
    this.updateBackend = function () {};
  }
}());

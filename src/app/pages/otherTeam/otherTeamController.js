(function () {
  'use strict';
  angular.module('myApp.otherTeam')
    .controller('otherTeamController', OtherTeamController);
  OtherTeamController.$inject = ['teamPlayersFactory', 'tradeValueFactory', 'addPlayersFactory'];

  function OtherTeamController (teamPlayersFactory, tradeValueFactory, addPlayersFactory) {
    this.team2 = teamPlayersFactory.getTeamData('team2');
    this.updateTeam = function (player, team) {
      addPlayersFactory.addPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player2 = '';
    };
    this.advice = [];
    this.tradeAnalysis = function (team1, team2) {
      this.advice = tradeValueFactory.analyzeTrade(team1, team2);
      return this.advice;
    };
  }
}());

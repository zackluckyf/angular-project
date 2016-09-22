(function () {
  'use strict';

  angular.module('myApp.otherTeam')
    .controller('otherTeamController', OtherTeamController);
  OtherTeamController.$inject = ['SetupFactory', 'tradeValueFactory', 'playersFactory'];

  function OtherTeamController (SetupFactory, tradeValueFactory, playersFactory) {
    this.otherTeam = SetupFactory.teamState('otherTeam');
    this.updateTeam = function (player, team) {
      playersFactory.loadAndAddPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player2 = '';
    };
    this.remove = function (team, index) {
      playersFactory.removePlayer(team, index);
    };
    this.advice = [];
    this.tradeAnalysis = function (yourTeam, otherTeam) {
      this.advice = tradeValueFactory.analyzeTrade(yourTeam, otherTeam);
      return this.advice;
    };
  }
}());

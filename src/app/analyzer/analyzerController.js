(function () {
  'use strict';
  angular.module('myApp.analyzer')
    .controller('analyzerController', AnalyzerController);
  AnalyzerController.$inject = ['tradeValueFactory', 'playersFactory', 'SetupFactory'];

  function AnalyzerController (tradeValueFactory, playersFactory, SetupFactory) {
    this.yourTeam = SetupFactory.teamState('yourTeam');
    this.otherTeam = SetupFactory.teamState('otherTeam');
    this.updateTeam = function (player, team) {
      playersFactory.loadAndAddPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
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

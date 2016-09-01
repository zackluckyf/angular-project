(function () {
  'use strict';
  angular.module('myApp.data')
    .controller('dataController', DataController);

  function DataController (dataFactory, calculateFactory, addFactory) {
    this.title = 'Fantasy Football Trade Analyzer!';
    this.team1 = dataFactory.getTeamData('team1');
    this.team2 = dataFactory.getTeamData('team2');

    this.updateTeam = function (player, team) {
      addFactory.addPlayer(player, team);
      // this clears the input fields after a player is added!
      this.player1 = '';
      this.player2 = '';
    };

    this.tradeAnalysis = function (team1, team2) {
      console.log(calculateFactory.analyzeTrade(team1, team2));
      return calculateFactory.analyzeTrade(team1, team2);
    };
  }
}());

(function() {
    'use strict';
    angular.module('myApp.tradeAnalyzer')
        .controller('tradeAnalyzerController', TradeAnalyzerController);

    function TradeAnalyzerController(teamPlayersFactory, tradeValueFactory, addFactory) {
        this.team1 = teamPlayersFactory.getTeamData('team1');
        this.team2 = teamPlayersFactory.getTeamData('team2');
        this.updateTeam = function(player, team) {
            addFactory.addPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
            this.player2 = '';
        };
        this.advice = [];
        this.tradeAnalysis = function(team1, team2) {
            this.advice = tradeValueFactory.analyzeTrade(team1, team2);
            return this.advice;
        };
    }
}());

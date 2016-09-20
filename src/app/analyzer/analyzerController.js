(function() {
    'use strict';
    angular.module('myApp.analyzer')
        .controller('analyzerController', AnalyzerController);
    AnalyzerController.$inject = ['tradeValueFactory', 'addPlayersFactory', 'SetupFactory'];

    function AnalyzerController(tradeValueFactory, addPlayersFactory, SetupFactory) {
        this.yourTeam = SetupFactory.teamState('yourTeam');
        this.otherTeam = SetupFactory.teamState('otherTeam');
        this.updateTeam = function(player, team) {
            addPlayersFactory.loadAndAddPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
            this.player2 = '';
        };
        this.advice = [];
        this.tradeAnalysis = function(yourTeam, otherTeam) {
            this.advice = tradeValueFactory.analyzeTrade(yourTeam, otherTeam);
            return this.advice;
        };
    }
}());

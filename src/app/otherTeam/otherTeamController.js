(function() {
    'use strict';

    angular.module('myApp.otherTeam')
        .controller('otherTeamController', OtherTeamController);
    OtherTeamController.$inject = ['setupFactory', 'tradeValueFactory', 'addPlayersFactory'];

    function OtherTeamController(setupFactory, tradeValueFactory, addPlayersFactory) {
        this.team2 = [];
        this.updateTeam = function(player, team) {
            addPlayersFactory.loadAndAddPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player2 = '';
        };
        this.advice = [];
        this.tradeAnalysis = function(team1, team2) {
            this.advice = tradeValueFactory.analyzeTrade(team1, team2);
            return this.advice;
        };
    }
}());

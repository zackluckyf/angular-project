(function() {
    'use strict';
    angular.module('myApp.otherTeam')
        .controller('otherTeamController', OtherTeamController);

    function OtherTeamController(dataFactory, calculateFactory, addFactory) {
        this.team2 = dataFactory.getTeamData('team2');
        this.updateTeam = function(player, team) {
            addFactory.addPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player2 = '';
        };
        this.advice = [];
        this.tradeAnalysis = function(team1, team2) {
            this.advice = calculateFactory.analyzeTrade(team1, team2);
            return this.advice;
        };
    }
}());

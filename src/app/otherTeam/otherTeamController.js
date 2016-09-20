(function() {
    'use strict';

    angular.module('myApp.otherTeam')
        .controller('otherTeamController', OtherTeamController);
    OtherTeamController.$inject = ['SetupFactory', 'tradeValueFactory', 'addPlayersFactory'];

    function OtherTeamController(SetupFactory, tradeValueFactory, addPlayersFactory) {
        this.otherTeam = SetupFactory.teamState('otherTeam');
        this.updateTeam = function(player, team) {
            addPlayersFactory.loadAndAddPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player2 = '';
        };
        this.advice = [];
        this.tradeAnalysis = function(yourTeam, otherTeam) {
            this.advice = tradeValueFactory.analyzeTrade(yourTeam, otherTeam);
            return this.advice;
        };
    }
}());

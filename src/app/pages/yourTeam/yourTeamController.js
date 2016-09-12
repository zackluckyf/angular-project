(function() {
    'use strict';
    angular.module('myApp.yourTeam')
        .controller('yourTeamController', YourTeamController);

    function YourTeamController(teamPlayersFactory, addFactory) {
        this.team1 = teamPlayersFactory.getTeamData('team1');
        this.updateTeam = function(player, team) {
            addFactory.addPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
        };
    }
}());

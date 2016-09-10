(function() {
    'use strict';
    angular.module('myApp.yourTeam')
        .controller('yourTeamController', YourTeamController);

    function YourTeamController(dataFactory, addFactory) {
        this.team1 = dataFactory.getTeamData('team1');
        this.updateTeam = function(player, team) {
            addFactory.addPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
        };
    }
}());

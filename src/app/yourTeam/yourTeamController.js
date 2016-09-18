(function() {
    'use strict';
    angular.module('myApp.yourTeam')
        .controller('yourTeamController', YourTeamController);

    YourTeamController.$inject = ['setupService', 'addPlayersFactory'];

    function YourTeamController(setupService, addPlayersFactory) {
        this.team2 = setupService.teamState('team2');
        this.updateTeam = function(player, team) {
            addPlayersFactory.loadAndAddPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
        };
    }
}());

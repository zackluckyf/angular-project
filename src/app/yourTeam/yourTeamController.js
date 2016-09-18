(function() {
    'use strict';
    angular.module('myApp.yourTeam')
        .controller('yourTeamController', YourTeamController);

    YourTeamController.$inject = ['setupFactory', 'addPlayersFactory'];

    function YourTeamController(setupFactory, addPlayersFactory) {
        this.team1 = [];
        this.updateTeam = function(player, team) {
            addPlayersFactory.loadAndAddPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
        };
    }
}());

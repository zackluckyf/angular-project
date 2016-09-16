(function() {
    'use strict';
    angular.module('myApp.yourTeam')
        .controller('yourTeamController', YourTeamController);

    YourTeamController.$inject = ['returnTeamFactory', 'addPlayersFactory'];

    function YourTeamController(returnTeamFactory, addPlayersFactory) {
        var vm = this;
        // below function should be in the config
        // there should also be one for team 2
        // then each controller can reference the values for state
        returnTeamFactory.returnTeam().then(function(data) {
            vm.team1 = data;
        });
        this.updateTeam = function(player, team) {
            addPlayersFactory.addPlayer(player, team);
            // this clears the input fields after a player is added!
            this.player1 = '';
        };
    }
}());

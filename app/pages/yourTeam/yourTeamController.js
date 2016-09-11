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
        // this function is to attempt to talk to the server
        this.button = function() {
            function returnFeatures(response) {
                return response.map(function(item) {
                    if (item === 'Carson Palmer') {
                        console.log('Carson Palmer');
                    }
                    return item === 'Carson Palmer';
                });
            }
            (function loadPhones() {
                return $http.get('http://localhost:8080/yourTeam')
                    .then(returnFeatures);
            })();
        };
    }
}());

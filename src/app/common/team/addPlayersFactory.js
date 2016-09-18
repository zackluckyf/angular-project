/*jshint esversion: 6 */

(function() {
    'use strict';
    angular.module('myApp.team')
        .factory('addPlayersFactory', addPlayersFactory);

    addPlayersFactory.$inject = ['$http', 'playerurl'];

    function addPlayersFactory($http, playerurl) {
        var nflPlayers = [];

        function parsePlayers(data) {
            nflPlayers = data.filter(function(player) {
                return player.active === '1';
            }).map(function(player) {
                return player.displayName.toLowerCase();
            });
        }

        function loadNflPlayers() {
            return $http.get(playerurl).then(function(response) {
                return response.data.Players;
            }).then(parsePlayers);
        }

        function addPlayer(newPlayer, team) {
            var playerPosition = nflPlayers.indexOf(newPlayer);
            if (playerPosition !== -1 && Object.keys(team).length < 5) {
                team.push({
                    name: newPlayer
                });
            }
        }

        function loadAndAddPlayer(newPlayer, team) {
            newPlayer = newPlayer.toLowerCase();
            if (nflPlayers.length < 1) {
                loadNflPlayers().then(function() {
                    addPlayer(newPlayer, team);
                });
            }
            addPlayer(newPlayer, team);
        }

        return {
            loadAndAddPlayer: loadAndAddPlayer
        };
    }
}());

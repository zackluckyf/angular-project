/*jshint esversion: 6 */

(function() {
    'use strict';
    angular.module('myApp.team')
        .factory('addPlayersFactory', addPlayersFactory);

    addPlayersFactory.$inject = ['$http', 'SetupFactory'];

    function addPlayersFactory($http, SetupFactory) {
        var nflPlayers = [];

        function parsePlayers(data) {
            console.log('started parse with data from server');
            nflPlayers = data.filter(function(player) {
                return player.active === '1';
            }).map(function(player) {
                return player.displayName.toLowerCase();
            });
        }

        function loadNflPlayers() {
            console.log('attempted to get player data from node server');
            return $http.get('http://localhost:8888/nflPlayers').then(function(response) {
                return response.data;
            }).then(parsePlayers);
        }

        function addPlayer(newPlayer, team) {
            console.log('went to add player:', newPlayer, 'to team:', team);
            var playerPosition = nflPlayers.indexOf(newPlayer);
            if (playerPosition !== -1 && Object.keys(team).length < 5) {
                SetupFactory.setTeam(team, newPlayer);
                team.players.push(newPlayer);
            }
        }

        function loadAndAddPlayer(newPlayer, team) {
            console.log(team);
            newPlayer = newPlayer.toLowerCase();
            if (nflPlayers.length < 1) {
                console.log('determined nfl players to not be initialized');
                loadNflPlayers().then(function() {
                    addPlayer(newPlayer, team);
                });
            } else {
                addPlayer(newPlayer, team);
            }
        }

        return {
            loadAndAddPlayer: loadAndAddPlayer
        };
    }
}());

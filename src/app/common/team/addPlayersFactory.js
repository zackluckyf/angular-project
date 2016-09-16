/*jshint esversion: 6 */

(function() {
    'use strict';
    angular.module('myApp.team')
        .factory('addPlayersFactory', addPlayersFactory);

    function addPlayersFactory() {
        var nflPlayers = [];

        playerData.$inject = ['$http'];

        function playerData($http) {
            var url = 'http://www.fantasyfootballnerd.com/service/players/json/dr4mykguqpd9/';
            var data;
            var request = $http.get(url, function(response) {
                var buffer = '';
                response.on('data', function(chunk) {
                    buffer += chunk;
                });
                response.on('end', function(err) {
                    data = JSON.parse(buffer);
                    return parsePlayers(data.Players);
                });
            }).on('error', (e) => {
                console.log(`Got error: ${e.message}`);
            });
        }

        function parsePlayers(data) {
            console.log('started parse');
            nflPlayers = data.filter(function(player) {
                return player.active === '1';
            }).map(function(player) {
                return player.displayName.toLowerCase();
            });
            return nflPlayers;
        }

        function addPlayer(newPlayer, team) {
            newPlayer = newPlayer.toLowerCase();
            if (!nflPlayers) {
                nflPlayers = playerData();
            }
            var newPlayerValue = Math.floor((newPlayer.length() / 4));
            var playerPosition = nflPlayers.indexof(newPlayer);
            if (playerPosition !== -1 && Object.keys(team).length < 5) {
                team.push({
                    name: newPlayer,
                    value: newPlayerValue
                });
            }
        }

        return {
            addPlayer: addPlayer
        };
    }
}());

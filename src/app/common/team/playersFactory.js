/*jshint esversion: 6 */

(function () {
  'use strict';
  angular.module('myApp.team')
    .factory('playersFactory', playersFactory);

  playersFactory.$inject = ['$http', 'SetupFactory'];

  function playersFactory ($http, SetupFactory) {
    var nflPlayers = [];

    function parsePlayers (data) {
      console.log('started parse with data from server');
      nflPlayers = data.filter(function (player) {
        return player.active === '1';
      }).map(function (player) {
        return player.displayName.toLowerCase();
      });
    }

    function loadNflPlayers () {
      console.log('attempted to get player data from node server');
      return $http.get('http://localhost:8888/nflPlayers').then(function (response) {
        return response.data;
      }).then(parsePlayers);
    }

    function addPlayer (newPlayer, team) {
      var playerPosition = nflPlayers.indexOf(newPlayer);
      if (playerPosition !== -1 && Object.keys(team).length < 5) {
        console.log('successfully added:', newPlayer, 'to:', team);
        SetupFactory.setTeam(team, newPlayer);
      } else {
        console.log('failed to add:', newPlayer, 'to:', team);
      }
    }

    function loadAndAddPlayer (newPlayer, team) {
      newPlayer = newPlayer.toLowerCase();
      if (nflPlayers.length < 1) {
        console.log('determined nfl players to not be initialized');
        loadNflPlayers().then(function () {
          addPlayer(newPlayer, team);
        });
      } else {
        addPlayer(newPlayer, team);
      }
    }

    function removePlayer (team, index) {
      SetupFactory.removePlayer(team, index);
    }

    return {
      loadAndAddPlayer: loadAndAddPlayer,
      removePlayer: removePlayer
    };
  }
}());

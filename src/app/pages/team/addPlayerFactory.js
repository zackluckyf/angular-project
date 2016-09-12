(function () {
  'use strict';
  angular.module('myApp.team')
    .factory('addPlayersFactory', addPlayersFactory);

  function addPlayersFactory () {
    var player = {
      'Adrian Peterson': 4,
      'Antonio Brown': 5,
      'A.J. Green': 3,
      'Carson Palmer': 2,
      'Eli Manning': 1,
      'Phillip Rivers': 1
    };

    function addPlayer (newPlayer, team) {
      if (player[newPlayer] && Object.keys(team).length < 5) {
        team.push({
          name: newPlayer,
          value: player[newPlayer]
        });
      }
    }

    return {
      addPlayer: addPlayer
    };
  }
}());

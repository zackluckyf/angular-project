(function () {
  'use strict';
  angular.module('myApp.team')
    .factory('teamPlayersFactory', teamPlayersFactory);

  teamPlayersFactory.$inject = ['$http'];

  function teamPlayersFactory ($http) {
    function getPlayers (response) {
      return response.data;
    }

    function returnPlayers (team) {
      return $http.get('/data/teams/' + team).then(getPlayers);
    }

    function getData (team) {
      if (team === 'team1') {
        return [{
          name: 'Adrian Peterson',
          value: 4
        }, {
          name: 'Carson Palmer',
          value: 2
        }];
      } else if (team === 'team2') {
        return [{
          name: 'Antonio Brown',
          value: 5
        }];
      }
    }
    return {
      getTeamData: getData,
      returnPlayers: returnPlayers
    };
  }
}());

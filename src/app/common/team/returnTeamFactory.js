(function () {
  'use strict';
  angular.module('myApp.team')
    .factory('returnTeamFactory', returnTeamFactory);

  returnTeamFactory.$inject = ['$http'];

  function returnTeamFactory ($http) {
    function returnTeam (team) {
      return $http.get('http://localhost:8888/teams').then(function (res) {
        return res.data;
      });
    }
    return {
      returnTeam: returnTeam
    };
  }
}());
